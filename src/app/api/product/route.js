import { NextResponse } from 'next/server'

export async function GET(req, res) {
  return NextResponse.json([
    {
      id:1,
      title:'Honda New Brio 2023',
      description: `
      <ul>
      <li>Transmisi : Matic dan Manual</li>
      <li>Muat Mobil : 4 Orang</li>
      <li>Rental Lepas Kunci : Rp250.000,- / 24 Jam</li>
      <li>Rental Dengan Supir : Rp300.00,-/24 Jam</li>
      </ul>`,
      imageUrl:[
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705416323/12rs_bkql7a.png',
      ]
    },
    {
      id:2,
      title:'All New Toyota Avanza 2023',
      description: `
      <ul>
      <li>Transmisi : Matic</li>
      <li>Muat Mobil : 7-8 Orang</li>
      <li>Rental Lepas Kunci : Rp350.000,- / 24 Jam</li>
      <li>Rental Dengan Supir : Rp400.00,-/24 Jam</li>
      </ul>
      `,
      imageUrl:[
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705418455/16529289190-all-new-avanza_aacsqd.png',
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705418510/16529289191-all-new-avanza_yyuhib.png',
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705418565/Avanza-2022_oghasl.png',
      ]
    },
    {
      id:3,
      title:'Toyota Fortuner GR Sport 2023',
      description: `
      <ul>
      <li>Transmisi : Matic</li>
      <li>Muat Mobil : 7-8 Orang</li>
      <li>Rental Lepas Kunci : Rp750.000,- / 24 Jam</li>
      <li>Rental Dengan Supir : Rp800.00,-/24 Jam</li>
      </ul>
      `,
      imageUrl:[
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705418771/1-super-white_thl7lu.png',
      ]
    },
    {
      id:4,
      title:'HONDA HRV 2018',
      description: `
      <ul>
      <li>Transmisi : Matic</li>
      <li>Muat Mobil : 5 Orang</li>
      <li>Rental Lepas Kunci : Rp500.000,- / 24 Jam</li>
      <li>Rental Dengan Supir : Rp550.00,-/24 Jam</li>
      </ul>
      `,
      imageUrl:[
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705419297/padang-honda-h-rv-abu-metallic-500_n9imh3.png',
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705419429/padang-honda-h-rv-biru-500_e3wicg.png',
      ]
    },
    {
      id:5,
      title:'Toyota Alphard 2021',
      description: `
      <ul>
      <li>Transmisi : Matic</li>
      <li>Muat Mobil : 6 Orang</li>
      <li>Rental Lepas Kunci : Rp1.000.000,- / 24 Jam</li>
      <li>Rental Dengan Supir : Rp1.150.00,-/24 Jam</li>
      </ul>
      `,
      imageUrl:[
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705419853/4.-alphard-colors-black_abqbr7.png',
        'https://res.cloudinary.com/dgcedsrzf/image/upload/v1705419867/1.-alphard-colors-white-pearl_lc4c5z.png',
      ]
    },
  ])
}
