import './globals.css'
import type { Metadata } from 'next'
import VerticalTimeline from './VerticalTimeline'

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'Your app description goes here.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white flex min-h-screen overflow-x-hidden">
        {/* Timeline */}
        <aside className="w-12 hidden sm:flex justify-center">
          <VerticalTimeline />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-32">
          {children}
        </main>
      </body>
    </html>
  )
}
