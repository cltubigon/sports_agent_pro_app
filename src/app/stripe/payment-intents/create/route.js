import { NextResponse } from 'next/server'
import { v4 } from 'uuid'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY_LIVE)

export const POST = async (request) => {
  const { data } = await request.json()
  const {
    donationAmount,
    donorFirst_name,
    donorLast_name,
    donorEmailAddress,
    description,
    donee,
    source,
  } = data

  const empotencyKey = v4()

  const paymentIntent = await stripe.paymentIntents.create(
    {
      amount: donationAmount * 100,
      currency: 'usd',
      description,
      receipt_email: donorEmailAddress,
      metadata: {
        owner_first_name: donorFirst_name,
        owner_last_name: donorLast_name,
        owner_email: donorEmailAddress,
        recipient: donee || 'general',
        source: source,
      },
    },
    {
      idempotencyKey: empotencyKey,
    }
  )

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
    pIntentId: paymentIntent.id,
  })
}
