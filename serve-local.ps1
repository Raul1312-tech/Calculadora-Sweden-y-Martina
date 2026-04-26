$ErrorActionPreference = "Stop"

Set-Location -LiteralPath $PSScriptRoot

if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
  Write-Host ""
  Write-Host "No se encontro Python en el sistema." -ForegroundColor Yellow
  Write-Host "Instala Python o abre index.html directamente." -ForegroundColor Yellow
  Read-Host "Pulsa Enter para salir"
  exit 1
}

$port = 8000

Write-Host ""
Write-Host "Iniciando servidor local en http://127.0.0.1:$port" -ForegroundColor Cyan
Write-Host "Deja esta ventana abierta mientras uses la landing." -ForegroundColor Gray
Write-Host "Para detener el servidor, cierra esta ventana o pulsa Ctrl+C." -ForegroundColor Gray
Write-Host ""

Start-Process "http://127.0.0.1:$port/"
python -m http.server $port
