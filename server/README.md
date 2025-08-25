# Cocktail Maker Server

Backend API server for the Cocktail Maker application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the server:
```bash
npm run dev   # Development mode with auto-reload
npm start     # Production mode
```

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/ingredients` - Get all available ingredients
- `GET /api/cocktails/by-ingredient/:ingredient` - Get cocktails by ingredient
- `GET /api/cocktails/:id` - Get cocktail details by ID

## Environment Variables

- `PORT` - Server port (default: 5000)

## Deployment

This server can be deployed independently to any Node.js hosting platform (Heroku, Railway, Render, etc.)