'use client'
import Popup from '@/app/components/Popup'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import LoadingComponent from '@/app/components/LoadingComponent'
import Button from '@/app/components/Button'
const ResetPasswordForm = dynamic(() => import('./ResetPasswordForm'), {
  loading: () => <LoadingComponent className={'min-h-[342px]'} />,
})

const ResetPassword = () => {
  const [popup, setpopup] = useState(null)

  const handleReset = () => {
    setpopup(true)
  }
  return (
    <>
      <Button onClick={handleReset} className="mt-10">
        Reset Password
      </Button>
      <div className="relative">
        {popup && (
          <Popup data={{ setpopup, bgNotClickable: true, noScrollbar: true }}>
            <ResetPasswordForm />
          </Popup>
        )}
      </div>
    </>
  )
}

export default ResetPassword
