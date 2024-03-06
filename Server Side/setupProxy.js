const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {

    const userQuery = req.query.query;
    console.log("querry"+userQuery);
    const fetch = (await import('node-fetch')).default; // Dynamic import for node-fetch
    const response = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+userQuery);
    const data = await response.json(); // Parse JSON response
    res.json(data); // Send respons
    
});

app.listen(3000, () => {
    console.log("app is running on port 3000");
});
