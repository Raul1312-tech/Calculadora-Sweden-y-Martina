@echo off
setlocal

cd /d "%~dp0"

where python >nul 2>nul
if errorlevel 1 (
  echo No se encontro Python en el sistema.
  echo Instala Python o abre index.html directamente.
  pause
  exit /b 1
)

set PORT=8000

echo.
echo Iniciando servidor local en http://127.0.0.1:%PORT%
echo Deja esta ventana abierta mientras uses la landing.
echo Para detener el servidor, cierra esta ventana o pulsa Ctrl+C.
echo.

start "" "http://127.0.0.1:%PORT%/"
python -m http.server %PORT%
