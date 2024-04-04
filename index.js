const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { geos } = require('./getBarangay');
app.use(bodyParser.json());
const port = process.env.PORT || 3000;app.listen(port, () => {console.log(`Server is running on port ${port}`)});
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
  });


app.get('/api/getbarangay', (req, res) => {
    const { lat, long } = req.query;

    // Check if lat and long are provided
    if (!lat || !long) {
        return res.status(400).json({ error: 'Latitude and longitude are required.' });
    }

    // Convert lat and long to float
    const latitude = parseFloat(lat);
    const longitude = parseFloat(long);

    // Call the function to get barangay
    const barangay = geos(latitude, longitude);

    // Respond with the barangay information
    res.json({ barangay });
});
