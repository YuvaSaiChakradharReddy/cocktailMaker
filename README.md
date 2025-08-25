# Cocktail Maker

A full-stack application for discovering and learning how to make cocktails using available ingredients.

## Project Structure

This project is divided into two separately deployable parts:

```
cocktailMaker/
├── frontend/          # Next.js frontend application
│   ├── src/          # React components and pages
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
├── server/           # Express.js backend API
│   ├── index.js      # API server
│   └── package.json  # Server dependencies
└── README.md         # This file
```

## Architecture

- **Frontend**: Next.js application with TypeScript and Tailwind CSS
- **Backend**: Express.js API server with CORS support
- **Data Source**: TheCocktailDB API

## Quick Start

### Backend Server

1. Navigate to server directory:
```bash
cd server
npm install
npm run dev
```
Server runs on http://localhost:5000

### Frontend Application

2. In a new terminal, navigate to frontend directory:
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on http://localhost:3000

## Deployment

Both frontend and backend can be deployed independently:

### Backend Deployment Options:
- Heroku
- Railway
- Render
- AWS EC2
- Google Cloud Run
- Any Node.js hosting platform

### Frontend Deployment Options:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any static hosting after building

## Environment Configuration

### Backend (.env)
```
PORT=5000
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

For production, update `NEXT_PUBLIC_API_URL` to your deployed backend URL.

## Features

- 🍹 Browse cocktail ingredients
- 🔍 Search cocktails by ingredient
- 📖 View detailed recipes with instructions
- 📱 Responsive design for all devices
- ⚡ Fast API responses with caching
- 🔒 CORS-enabled for secure cross-origin requests

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Express.js
- CORS
- Axios
- ES6 Modules

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/ingredients` - Get all ingredients
- `GET /api/cocktails/by-ingredient/:ingredient` - Get cocktails by ingredient
- `GET /api/cocktails/:id` - Get cocktail details

## License
