import { NextResponse } from 'next/server'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY_TEST)

export const POST = async (request) => {
  const { data } = await request.json()
  const {
    pIntentId,
    donationAmount,
    donorFirst_name,
    donorLast_name,
    donorEmailAddress,
    description,
  } = data

  const paymentIntent = await stripe.paymentIntents.update(pIntentId, {
    amount: donationAmount * 100,
    currency: 'usd',
    description,
    receipt_email: donorEmailAddress,
    metadata: {
      owner_first_name: donorFirst_name,
      owner_last_name: donorLast_name,
      owner_email: donorEmailAddress,
    },
  })

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
  })
}
