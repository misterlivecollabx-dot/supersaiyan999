#!/bin/bash
cd "$(dirname "$0")" || exit 1

echo "----------------------------------------------------"
echo "Super Saiyan 999 V1 - Upload to GitHub"
echo "----------------------------------------------------"
echo ""

# Ensure git remote is set to the collaboration repo
git remote set-url origin https://github.com/misterlivecollabx-dot/supersaiyan999.git 2>/dev/null || git remote add origin https://github.com/misterlivecollabx-dot/supersaiyan999.git
git branch -M main

echo "Pushing project folder to https://github.com/misterlivecollabx-dot/supersaiyan999.git..."
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "----------------------------------------------------"
  echo " SUCCESS! Project uploaded to GitHub."
  echo "----------------------------------------------------"
else
  echo ""
  echo "----------------------------------------------------"
  echo " Note: If prompted, enter your GitHub Username"
  echo " (e.g. filecans) and Personal Access Token (PAT)."
  echo "----------------------------------------------------"
fi

echo ""
read -p "Press Enter to exit..."
