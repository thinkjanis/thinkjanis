import './globals.css'
import { GeistSans } from 'geist/font/sans'
import FaviconLinks from '../components/FaviconLinks'
import { GoogleAnalytics } from '@next/third-parties/google'

const app_font = GeistSans

export const metadata = {
  title: 'Janis Solks - Infrastructure Engineer',
  description: 'Results-driven Infrastructure Engineer specializing in IT support, automation, and impactful cloud solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`light ${app_font.className}`}>
      <head>
        <FaviconLinks />
      </head>
      <body>{children}</body>
      {process.env.APP_ENV === 'production' && (
        <GoogleAnalytics gaId={process.env.GA_ID || ''} />
      )}
    </html>
  )
}