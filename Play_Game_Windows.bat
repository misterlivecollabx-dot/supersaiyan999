@echo off
cd /d "%~dp0Game"

echo ----------------------------------------
echo Super Saiyan 999 V1 - Created by maanop
echo ----------------------------------------

:: 1. Try starting with node/npx
where npx >nul 2>nul
if %errorlevel% equ 0 (
  echo Node.js environment detected. Starting server...
  npx -y live-server --port=53091
  exit /b 0
)

:: 2. Try starting with python
where python >nul 2>nul
if %errorlevel% equ 0 (
  echo Python environment detected. Starting server...
  start "" "http://localhost:53091"
  python -m http.server 53091
  exit /b 0
)

echo ERROR: Neither Node.js nor Python was found on your system.
echo Please install Google Chrome and run a local web server to play.
pause
