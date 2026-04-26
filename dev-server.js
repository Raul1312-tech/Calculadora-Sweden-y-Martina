const http = require("node:http");
const fs = require("node:fs");
const fsp = require("node:fs/promises");
const path = require("node:path");
const { URL } = require("node:url");

const rootDir = __dirname;
const port = 5173;

const mimeTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

const ignoredNames = new Set([
  ".git",
  "landing-home.png",
  "landing-home-branding.png",
  "landing-mobile.png",
  "landing-mobile-branding.png",
  "server-out.log",
  "server-err.log",
]);

let version = Date.now();
const clients = new Set();

function bumpVersion() {
  version = Date.now();
  for (const client of clients) {
    client.write(`event: reload\ndata: ${version}\n\n`);
  }
}

function watchWorkspace() {
  try {
    fs.watch(
      rootDir,
      { recursive: true },
      (_eventType, filename) => {
        if (!filename) {
          return;
        }

        const topLevel = filename.split(path.sep)[0];
        if (ignoredNames.has(topLevel) || ignoredNames.has(path.basename(filename))) {
          return;
        }

        bumpVersion();
      }
    );
  } catch (error) {
    console.warn("No se pudo activar fs.watch recursivo:", error.message);
  }
}

function devClientScript() {
  return `
<script>
(() => {
  if (!window.EventSource) return;
  const source = new EventSource("/__dev_events");
  source.addEventListener("reload", () => {
    window.location.reload();
  });
})();
</script>`;
}

async function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  try {
    let content = await fsp.readFile(filePath);

    if (ext === ".html") {
      const html = content.toString("utf8");
      const injected = html.includes("</body>")
        ? html.replace("</body>", `${devClientScript()}\n</body>`)
        : `${html}\n${devClientScript()}`;
      content = Buffer.from(injected, "utf8");
    }

    res.writeHead(200, { "Content-Type": contentType, "Cache-Control": "no-store" });
    res.end(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Archivo no encontrado");
      return;
    }

    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Error interno del servidor");
  }
}

function sanitizePathname(pathname) {
  const decoded = decodeURIComponent(pathname);
  const safePath = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const joined = path.join(rootDir, safePath);

  if (!joined.startsWith(rootDir)) {
    return null;
  }

  return joined;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/__dev_events") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-store",
      Connection: "keep-alive",
    });
    res.write(`event: connected\ndata: ${version}\n\n`);
    clients.add(res);

    req.on("close", () => {
      clients.delete(res);
    });
    return;
  }

  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = sanitizePathname(pathname);

  if (!filePath) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Ruta no permitida");
    return;
  }

  let stats;
  try {
    stats = await fsp.stat(filePath);
  } catch (_error) {
    await serveFile(res, filePath);
    return;
  }

  if (stats.isDirectory()) {
    await serveFile(res, path.join(filePath, "index.html"));
    return;
  }

  await serveFile(res, filePath);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Dev server listo en http://127.0.0.1:${port}`);
});

watchWorkspace();
