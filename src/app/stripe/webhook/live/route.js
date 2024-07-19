import { headers } from 'next/headers'
import Stripe from 'stripe'
import { buffer } from 'node:stream/consumers'
import { createServer } from '@/config/supabase/supabaseServer'
import { formatDateToUTCString } from '@/utilities/date-and-time/formatDateToUTCString'

const endpointSecret = process.env.STRIPE_WEBHOOK_WHSEC_KEY_LIVE
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST_LIVE)

export const POST = async (req) => {
  const rawBody = await buffer(req.body)
  try {
    const sig = headers().get('stripe-signature')
    let event
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret)
    } catch (error) {
      return Response.json({ error: `Webhook Error ${error?.message}` })
    }

    switch (event.type) {
      case 'payment_intent.succeeded':
        const pi = event.data.object
        const {
          metadata: {
            owner_first_name,
            owner_email,
            owner_last_name,
            recipient,
            source,
          },
          created,
          id,
          amount_received,
        } = pi

        const amount = amount_received / 100
        const created_at = formatDateToUTCString(new Date(created * 1000))

        const supabase = createServer()

        const { data: donations, error } = await supabase
          .from('donations')
          .insert([
            {
              created_at: created_at,
              first_name: owner_first_name,
              last_name: owner_last_name,
              donor_email: owner_email,
              payment_intent_id: id,
              amount: amount,
              recipient: recipient,
              source: source,
            },
          ])
          .select()
        break
      default:
        console.log(`Unhandled event type ${event.type}`)
    }
    return Response.json({})
  } catch (error) {
    return Response.json({ error: `Webhook Error` })
  }
}
