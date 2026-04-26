@echo off
setlocal

cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo No se encontro Node.js en el sistema.
  pause
  exit /b 1
)

echo.
echo Iniciando dev server en http://127.0.0.1:5173
echo La pagina se recargara sola al guardar cambios.
echo Deja esta ventana abierta mientras iteras.
echo.

start "" "http://127.0.0.1:5173/"
node dev-server.js
