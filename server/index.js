const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json())

app.get('/api/weather', async (req, res) => {
    const { city } = req.query;

    try {
        const response =await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=7`
        );

        if (!response.ok){
            console.error('Weather API responsed with status', response.status);
            return res.status(response.status).json({error: 'Failed to fectch'})
        }

        if (!city) {
            return res.status(400).json({ error: 'City parameter is required' });
        }

        const data = await response.json();
        res.json(data);

    } catch (e) {
        console.error("Weather API error: ", e) ;
        res.status(500).json({error: 'Error fetching weather data.'});
    }
})

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
})