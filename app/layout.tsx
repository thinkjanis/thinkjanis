import './globals.css'

export const metadata = {
  title: 'Your Name - Personal Card',
  description: 'A brief description about yourself',
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
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}