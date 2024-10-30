import './globals.css'
import FaviconLinks from '../components/FaviconLinks'

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
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=geist@400,700,600&display=swap"
          rel="stylesheet"
        />
        <FaviconLinks />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}