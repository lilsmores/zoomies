#!/bin/bash

# Build the React app
echo "Building React app..."
npm run build

# Copy the built files to the root for GitHub Pages
echo "Copying built files to root..."
cp -r dist/* ../

# Go to parent directory
cd ..

# Add all files
git add .

# Commit the changes
git commit -m "Deploy React app to GitHub Pages"

# Push to GitHub
git push origin main

echo "Deployment complete! Your site should be available at:"
echo "https://lilsmores.github.io/zoomies-demo/" 