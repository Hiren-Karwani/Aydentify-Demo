import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aydentify — Demo',
  description: 'Find brands buying your ingredients or packaging and get verified contacts of the people in charge.',
  openGraph: {
    title: 'Aydentify — Demo',
    description: 'Find brands buying your ingredients or packaging and get verified contacts of the people in charge.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aydentify',
    description: 'Lead generation for ingredient and packaging businesses.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;1,14..32,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
