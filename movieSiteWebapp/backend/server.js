import express from 'express';
import axios from 'axios';
import cors from 'cors'; // Import the cors package
// import reviews from './api/reviews.route.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Enable CORS for your frontend origin
app.use(
  cors({
    origin: 'http://127.0.0.1:5500', // Allow requests from your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow the specified HTTP methods
    optionsSuccessStatus: 204, // Respond with a 204 No Content status for preflight requests
  })
);
// app.use("/api/v1/reviews", reviews)


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

app.use('*', (req, res) => {
  res.status(404).json({error: "not found what"});
  console.log("not found what the hell are you trynna look at there big guy ;)");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

