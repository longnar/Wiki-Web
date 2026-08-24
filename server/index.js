const express= require("express")
const PORT = process.env.PORT || 9000;
const app = express()

app.get('/api/get', (req, res) => {
    res.json({
        message: 'This is a GET request!'
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});