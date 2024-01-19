import { NextResponse } from 'next/server'

export async function GET(req, res) {
  return NextResponse.json([
    {
      id:1,
      title:'Jasa Rental Mobil',
      description: `
      <p>Global Transport juga menyediakan berbagai merek mobil terbaru, mulai dari MPV, SUV, sedan, city car, hatchback, hingga minibus dan bus yang semuanya ditujukan untuk memenuhi semuat jenis kebutuhan transportasi anda. Unit kendaraan perusahaan kami juga tersedia dalam beragam kapasitas penumpang, sehingga anda dapat memilih mobil sesuai dengan kebutuhan dan jumlah orang yang akan berpergian bersama anda.</p>
      `,
      imageUrl:[
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705416323/12rs_bkql7a.png',
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705418510/16529289191-all-new-avanza_yyuhib.png',
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705418771/1-super-white_thl7lu.png',
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705419297/padang-honda-h-rv-abu-metallic-500_n9imh3.png',
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705419867/1.-alphard-colors-white-pearl_lc4c5z.png',
      ]
    },
    {
      id:2,
      title:'Jasa Supir Mobil Semarang',
      description: `
      <p>Jasa supir mobil lintas Semarang yang andal untuk perjalanan aman dan nyaman. Dengan tim berpengalaman dan armada terawat, kami siap membawa Anda ke tujuan tepat waktu. Percayakan perjalanan Anda kepada kami untuk pengalaman berkendara tanpa khawatir dan memuaskan.</p>
      `,
      imageUrl:[
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705656873/sewa-mobil-di-jakarta_xznpjt.png',
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705657054/sewa-xenia-jogja_aojzvm.png',
      ]
    },
  ])
}
