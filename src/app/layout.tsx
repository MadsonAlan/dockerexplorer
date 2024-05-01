import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { MenuNavigation } from '@/components/personal/navigationMenu'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
  title: 'Docker Explorer',
  description: 'Tire suas dúvidas sobre os comandos do Docker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:title" content="Conheça os comandos Docker" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_URL_BASE}og`}
        />
        <meta
          property="og:description"
          content="Tire suas dúvidas sobre os comandos do Docker"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen items-center justify-center">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
