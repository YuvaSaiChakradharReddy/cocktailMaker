import express from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const url = "https://www.thecocktaildb.com/api/json/v1/1/";
app.get('/', async (req, res) => {
    try {
        const response = await axios.get(url + 'list.php?i=list');
        // ...existing code...
        const ingredientsArray = response.data.drinks.map(drink => drink.strIngredient1);
        console.log(ingredientsArray);
        // ...existing code...
        // console.log(response.data);
        // console.log('Response data:', response.data.drinks[0].strIngredient1);

        res.render('index', {
            content: JSON.stringify(response.data),
            ingredientsArray: ingredientsArray

        });

    } catch (error) {
        console.error('Error fetching secret:', error);
        res.status(500).send('Error fetching secret');
    }
});

app.post('/select', async (req, res) => {
    console.log("select route hit", req.body.dropdown);
    console.log("select route hit", req.body.ingredient);
    try {
        const response = await axios.get(url + 'filter.php?i=' + req.body.dropdown);
        // www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka
        console.log(response.data);
        res.render('select', {
            content: JSON.stringify(response.data.drinks),
            drinks: response.data.drinks,
        });
        console.log(response.data.drinks.length, "drinks found");
    } catch (error) {
        console.error('Error fetching cocktails:', error);
        return res.status(500).send('Error fetching cocktails');
    }


});

app.post('/making', async (req, res) => {
    console.log("making route hit", req.body);
    //www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
    try {
        const response = await axios.get(url + 'lookup.php?i=' + req.body.drink);
        console.log(response.data);
        console.log(response.data.drinks[0].strDrink);
        // console.log(response.data.drinks[0].strInstructions);
        // console.log(response.data.drinks[0].strIngredient1);
        res.render('making', {
            data: response.data.drinks[0],
        });

    } catch (error) {
        console.error('Error fetching cocktail details:', error);
        return res.status(500).send('Error fetching cocktail details');
    }
    
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});