const functions = require('firebase-functions');
/* We are gonna build an express app and host it in a cloud function
 * This is a powerfull stuff we gonna do
 * Full Backend in a cloud function
*/
const express = require('express');
const cors = require('cors')//for the security
const stripe = require('stripe')('sk_test_51HyiggKjmECxXMJENp2CAczIulqzuPRCIBI4MkYZtVOTMuchxKNpi7Ir8uDCHPsJaM2pSa807liyzThUtJVGxYiu00CvfH2Ue1')
// - API

// - App config
const app = express()

// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json())//allows us to send data and passing it in the json format

// - API routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) => {
    const total = Math.round(req.query.total);

    console.log('Payment Request Received : FOR THIS AMOUNT >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    })

    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example of api endpoint
//http://localhost:5001/clone-76ac3/us-central1/api