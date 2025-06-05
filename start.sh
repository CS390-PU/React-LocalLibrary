#!/bin/bash

echo "🚀 Installing backend dependencies..."

cd server
npm install

# Start backend in background
echo "🟢 Starting Express backend on port 3000..."
npm start &

echo "🚀 Installing frontend dependencies..."
cd ../local-library
npm install

# Start frontend dev server
echo "🟣 Starting Vite frontend on port 5173..."
npm run dev -- --host
