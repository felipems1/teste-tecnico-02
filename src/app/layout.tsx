import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/ui/sidebar'
import { HeroesProvider } from '@/providers/heroes'
import { ReactQueryProvider } from '@/providers/react-query'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-zinc-50`}>
        <div className="flex max-h-screen">
          <ReactQueryProvider>
            <HeroesProvider>
              <Sidebar />
              <main className="ml-44 w-4/6 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                {children}
              </main>
            </HeroesProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  )
}
