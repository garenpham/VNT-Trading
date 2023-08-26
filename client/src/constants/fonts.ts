import { Inter, Lato, Roboto } from 'next/font/google'

export const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
})
export const lato = Lato({
  weight: ['100', '300'],
  variable: '--font-lato',
  subsets: ['latin'],
})
export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  subsets: ['latin'],
})
