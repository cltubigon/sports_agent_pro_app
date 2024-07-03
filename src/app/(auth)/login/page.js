import { Suspense } from 'react'
import ClientLogin from './ClientLogin'
import ClientLoginFallback from './ClientLoginFallback'

const LoginPage = () => {
  return (
    <>
      <Suspense fallback={<ClientLoginFallback />}>
        <ClientLogin />
      </Suspense>
    </>
  )
}

export default LoginPage
