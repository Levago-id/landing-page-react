import { NextResponse } from "next/server"
export async function GET(req, res) {
  return NextResponse.json([
    {
      id:1,
      name: "Daniel",
      job: "Customer Sewa Mobil",
      message: "Rental Sumber Semarang selalu mensupply kebutuhan jasa sewa mobil dan mobilnya sangat beragam👍",
    },
    {
      id:2,
      name: "Budi Hartono",
      job: "Pengusaha",
      message: "Sewa mobil di RSS sangat worth it sekali dari segi harga dan kualitas yang sangat oke",
    },
    {
      id:3,
      name: "Lucky",
      job: "Pimpinan Proyek",
      message: "RSS bisa mensupply mobil mobil sewa yang sangat baru dan gress di semarang. Harga oke dan deliverynya cepat",
    },
    {
      id:4,
      name: "Devi",
      job: "Eksekutif",
      message: "Pertama kali sewa mobil RSS di Semarang. Mobilnya wangi dan bersih, supirnya ramah dan mengemudi dengan hati hati dan nyaman. Penjual Amanah👍",
    },
  ])
}
