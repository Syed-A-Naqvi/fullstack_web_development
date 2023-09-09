const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors package
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Enable CORS for your frontend origin
app.use(cors({
    origin: 'http://127.0.0.1:5500', // frontend URL
  }));

const API_KEY = 'f9d40e502f6e051fd1b2ebbbd27f8435'; // Replace with your actual API key

app.get('/api/movies', async (req, res) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: API_KEY,
        sort_by: 'popularity.desc',
        page: 1, // You can specify the page here if needed
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/search', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: API_KEY,
        query,
        page: 1, // You can specify the page here if needed
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

