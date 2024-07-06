import TanstackProvider from '@/config/providers/TanstackProvider'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: 'Sports Agent Pro',
  title: {
    default: `Sports Agent Pro`,
    template: `%s - Sports Agent Pro`,
  },
  // description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TW4HH9J8" />
      <body>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  )
}
