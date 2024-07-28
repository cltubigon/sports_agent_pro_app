import React, { Suspense } from 'react'
import ClientResetPassword from './ClientResetPassword'
import ResetPasswordFallback from './ResetPasswordFallback'

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<ResetPasswordFallback />}>
      <ClientResetPassword />
    </Suspense>
  )
}

export default ResetPasswordPage
