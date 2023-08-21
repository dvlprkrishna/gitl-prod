'use client'
import Announcement from '@/components/announcement/Announcement'
import './globals.css'
import { Work_Sans } from 'next/font/google'
import Copyright from '@/components/copyright/Copyright'
import Footer from '@/components/footer/Footer' 
import BackToUp from "@uiw/react-back-to-top";

const worksans = Work_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={worksans.className}>
        <Announcement />
        {children}
        <Footer />
        <Copyright />
        <BackToUp className={`back-to-top`} style={{ zIndex: "9999" }}>
          <span>&#8593;</span>
        </BackToUp>
      </body>
    </html>
  )
}
