import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Base URL
const COCKTAIL_API_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

// API Routes
app.get('/api/ingredients', async (req, res) => {
    try {
        const response = await axios.get(`${COCKTAIL_API_URL}list.php?i=list`);
        const ingredientsArray = response.data.drinks.map(drink => drink.strIngredient1);
        res.json({
            success: true,
            ingredients: ingredientsArray
        });
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching ingredients'
        });
    }
});

app.get('/api/cocktails/by-ingredient/:ingredient', async (req, res) => {
    try {
        const { ingredient } = req.params;
        const response = await axios.get(`${COCKTAIL_API_URL}filter.php?i=${ingredient}`);
        res.json({
            success: true,
            drinks: response.data.drinks || []
        });
    } catch (error) {
        console.error('Error fetching cocktails:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching cocktails'
        });
    }
});

app.get('/api/cocktails/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${COCKTAIL_API_URL}lookup.php?i=${id}`);
        const cocktail = response.data.drinks?.[0] || null;
        
        if (!cocktail) {
            return res.status(404).json({
                success: false,
                message: 'Cocktail not found'
            });
        }
        
        res.json({
            success: true,
            cocktail: cocktail
        });
    } catch (error) {
        console.error('Error fetching cocktail details:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching cocktail details'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});