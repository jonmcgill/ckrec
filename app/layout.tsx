import type { Metadata } from 'next'
import Nav from './_components/Nav'
import Footer from './_components/Footer'
import BodyWrap from './_components/BodyWrap'
import '@/app/_css/cssGlobals.css'

export const metadata: Metadata = {
  title: 'Christ the King Anglican Church',
  description: 'Website for Christ the King Anglican Church, Dayton OH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <BodyWrap>
        <Nav />
        {children}
        <Footer />
      </BodyWrap>
    </html>
  )
}
