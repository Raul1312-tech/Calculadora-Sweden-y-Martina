$ErrorActionPreference = "Stop"

Set-Location -LiteralPath $PSScriptRoot

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host ""
  Write-Host "No se encontro Node.js en el sistema." -ForegroundColor Yellow
  Read-Host "Pulsa Enter para salir"
  exit 1
}

Write-Host ""
Write-Host "Iniciando dev server en http://127.0.0.1:5173" -ForegroundColor Cyan
Write-Host "La pagina se recargara sola al guardar cambios." -ForegroundColor Gray
Write-Host "Deja esta ventana abierta mientras iteras." -ForegroundColor Gray
Write-Host ""

Start-Process "http://127.0.0.1:5173/"
node .\dev-server.js
