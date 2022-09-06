const express = require('express');
const request = require('request');
const app = express();
require("dotenv").config();

// routes
app.get('/', (req, res) => {
    res.send('Hello world.')
})

app.get('/access-token', (req, res) => {
    // access token

    let url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    let auth = new Buffer(`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`).toString('base64')

    request(
        {
            url: url,
            headers: {
                'Authorization': 'Basic ' + auth
            }
        },
        (error, response, body) => {
            if(error) {
                console.log(error);
            } 
            else {
                // res.status(200).json(body);
                res.json(JSON.parse(body))
            }
        }
    )
})

// listen
app.listen(8100, (err, live) => {
    if(err){
        console.error(err)
    }

    console.log('Server running on port 8100.');
});