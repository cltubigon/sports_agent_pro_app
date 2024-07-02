'use client'
import React from 'react'

const VerificationPage = ({ searchParams }) => {
  return (
    <>
      <div className={'py-10'}>
        <div
          className={
            'max-w-[602px] text-center mx-auto px-3 md:px-6 lg:px-10 xl:px-0 flex flex-col gap-3'
          }
        >
          <h1 className="text-4xl font-demiCond">{`Great! You're almost in.`}</h1>
          <p className={'text-xl'}>
            {`We've sent a welcome email to ${
              searchParams?.email || 'your email'
            }. Be sure to check
          your inbox (including spam) to complete your signup.`}
          </p>
        </div>
      </div>
    </>
  )
}

export default VerificationPage
