const express = require('express');
const app = express();

// routes
app.get('/', (req, res) => {
    res.send('Hello world.')
})

// listen
app.listen(8100);