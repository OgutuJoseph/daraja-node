const express = require('express');
const request = require('request');
const app = express();

// routes
app.get('/', (req, res) => {
    res.send('Hello world.')
})

app.get('/access-token', (req, res) => {
    // access token

    let url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    let auth = new Buffer('ITNqYY0yJE0qF1hVbug5PmD0y6MdFWBG:IzCv1CjMkrrYI3Py').toString('base64')

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
                res.status(200).json(body);
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