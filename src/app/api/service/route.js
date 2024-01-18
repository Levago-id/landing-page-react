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
      title:'Jasa Pemasangan Plafon PVC',
      description: `
      <p>Kami telah meyelesaikan proyek plafon PVC seperti plafon Masjid, proyek rumah tinggal, serta berbagai proyek lainnya </p>
      <p>Pemasangan plafon PVC sesuai lengkap mulai dari rangka plafon, plafon PVC, lis profil, ornamen hingga lampu Strip. Kami mampu mengerjakan proyek plafon PVC berbagai model dan variasi dengan jaminan kualitas pemasangan dan keamanan.</p>
      <p>Dengan harga mulai dari 150rb/m Anda sudah dapat plafon PVC komplit dengan rangka dan lis profil. Anda dapat menyesuaikan kebutukan plafon dengan kami. Mari konsultasikan kebutuhanmu gratis</p>
      `,
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700890301/sga/products/mn0kgdreqf2p0rncbdew.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700889222/sga/products/ktphf0nay0pg2qpe9j7o.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700889226/sga/products/ej3x0x2khf0k638hgt0o.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700889825/sga/products/mrmxqsh0csc7i0ivy92y.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700890365/sga/products/v17jqscqjoki9pm6yvdi.jpg',
      ]
    },
  ])
}
