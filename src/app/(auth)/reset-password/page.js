import React, { Suspense } from 'react'
import ClientResetPassword from './ClientResetPassword'

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ClientResetPassword />
    </Suspense>
  )
}

export default ResetPasswordPage
