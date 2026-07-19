#!/bin/bash
# Move to the script's directory and then into the Game folder
cd "$(dirname "$0")/Game" || exit 1

echo "----------------------------------------"
echo "Super Saiyan 999 V1 - Created by maanop"
echo "----------------------------------------"

# 1. Try starting with Node/NPX
if command -v npx &> /dev/null; then
  echo "Node.js environment detected. Starting server..."
  npx -y live-server --port=53091
  exit 0
fi

# 2. Try starting with Python 3
if command -v python3 &> /dev/null; then
  echo "Python 3 detected. Starting server..."
  (sleep 1 && open "http://localhost:53091") &
  python3 -m http.server 53091
  exit 0
fi

# 3. Try starting with Python 2
if command -v python &> /dev/null; then
  echo "Python 2 detected. Starting server..."
  (sleep 1 && open "http://localhost:53091") &
  python -m SimpleHTTPServer 53091
  exit 0
fi

echo "ERROR: Neither Node.js nor Python was found on your system."
echo "Please install Google Chrome and run a local web server to play."
read -p "Press Enter to exit..."
