import ButtonWA from './components/ButtonWA'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jasa Rental Mobil dan Kendaraan | Rental Sumber Semarang',
  description: 'Jasa Rental Mobil Semarang dan juga menyewa jasa supir antar jemput ',
  keywords: 'rental, rental mobil, jasa supir, jasa rental mobil, sewa mobil, mobil, mobil semarang, rental mobil semarang, jasa supir semarang, supir mobil, antar jemput mobil, rental semarang, semarang, toko mobil semarang, toko rental mobil semarang',
  openGraph: {
    images: 'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705137554/ow1zpr04xnrxqfrbics4.jpg',
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="id">
        <body className={inter.className}>{children}</body>
        <ButtonWA/>
    </html>
  )
}
