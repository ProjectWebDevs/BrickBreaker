const express = require('express');
const app = express();
const port = 8080;

//This is where we give home page
app.get('/', (req, res) => {
    res.send('Welcome to brick breaker!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});