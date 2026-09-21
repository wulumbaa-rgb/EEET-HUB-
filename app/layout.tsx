import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata = { title: 'EEET HUB - Founder Wulumba Andrew', description: 'EEET Students Platform' }
export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en"><body><Navbar/><main className="min-h-[70vh]">{children}</main><Footer/></body></html>
  )
}
