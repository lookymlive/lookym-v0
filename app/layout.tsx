import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import AuthProvider from '../components/AuthProvider'
import ThemeProvider from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Video Upload App',
  description: 'Una aplicación moderna para subir videos de tiendas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}