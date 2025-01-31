require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors({ origin: '*' }));

// API Route
app.get('/api/info', (req, res) => {
    res.json({
        email: process.env.EMAIL,
        timestamp: new Date().toISOString(),
        github_url: process.env.GITHUB_URL
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
