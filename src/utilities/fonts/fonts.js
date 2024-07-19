import { Open_Sans, Oswald, Roboto, Urbanist } from 'next/font/google'
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
export const oswald = Oswald({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--oswald',
})
export const urbanist = Urbanist({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--urbanist',
})
