import { Open_Sans, Roboto } from 'next/font/google'
export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--openSans',
})
export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--roboto',
})
