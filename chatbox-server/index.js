const express = require('express');
const port = 3200;
const app = express();

app.get('/test', (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.send({data: 'Hello World'});
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})