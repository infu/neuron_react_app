#!/bin/bash

# Create directory if it doesn't exist
rm -rf dist/web
mkdir -p dist/web

# Copy files
cp -r build/* dist/web/
