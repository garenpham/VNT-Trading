import HomeBanner from '@/components/Banners/Home/HomeBanner'
import Header from '@/components/Header/Header'
import { inter } from '@/constants/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VNT Trading - Vancouver-based international Import/Export Company',
  description:
    'VNT is a general trading company specialized in food ingredients/products trade and distribution with 15+ years of experience in this field.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='https://res.cloudinary.com/dli8bhz3z/image/upload/v1693020810/shared/attro4fvhuzovcagcp9k.svg'
          sizes='any'
        />
      </head>
      <body className={inter.className}>
        <Header />
        <HomeBanner />
        {children}
      </body>
    </html>
  )
}
