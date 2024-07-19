'use client'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useStore } from 'zustand'
import utilityStorePersist from '@/utilities/store/utilityStorePersist'
import CheckoutForm from './CheckoutForm'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const CheckoutPage = () => {
  const { selectedProducts } = useStore(utilityStorePersist)
  const [clientSecret, setclientSecret] = useState(null)

  useEffect(() => {
    if (selectedProducts.length > 0) {
      const createIntent = async () => {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/stripe/payment-intents/create-test`,
            {
              data: selectedProducts,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )

          if (response) {
            setclientSecret(response.data)
          }
        } catch (error) {
          console.error('Error during checkout:', error)
        }
      }
      createIntent()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProducts])

  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div className="items-center flex-col gap-2 px-10">
      <h2>Checkout Pages</h2>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default CheckoutPage
