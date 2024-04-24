//Backend
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")("sk_test_51P52NNSJ50g020uXd4CvAU7822a17hsbnJnrnca2V2OfZOgQaRiNKooiPp8xY1hgUJZ5TjfuSiEiDTydV14GvgS000vLZEnFmU");



//API 



// -App configuration
const app = express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());


// -API Routes
app.get('/', (request, response) => response.status(200).send
('Hello World'));

app.post('/payments/create', async(request, response)=>{
    // const total = request.query.total;
    const total = 400;

    console.log("Payment Request Received !! For the amount >>>> ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,//subunits of currency {100piasa}
        currency: "inr",
    });

    //console.log(paymentIntent);

    //Ok- created
    response.status(201).json({
        clientSecret: paymentIntent.client_secret,
    });
});

app.post('/payments/create', async (req, res) => {
    const total = 500; // Assuming total amount is sent in the request body
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'usd',
    });
  
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
// -Listen Command
exports.api= functions.https.onRequest(app);

//Example endpoint
//http://127.0.0.1:5001/shopomania-78ceb/us-central1/api
//http://127.0.0.1:5001/shopomania-78ceb/us-central1/api

