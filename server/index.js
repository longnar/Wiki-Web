const express = require("express")
const PORT = process.env.PORT || 9000;
const app = express()

app.use(express.json());

app.get('/api/get', (req, res) => {
    res.json({
        message: 'This is a GET request!'
    });
});

app.post('/api/post', (req, res) => {
    res.json({
        message: 'This is a POST request!',
        body: req.body
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});