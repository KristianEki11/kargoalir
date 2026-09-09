import { NextResponse } from 'next/server';
import { INITIAL_SHIPMENTS } from '@/lib/db';
import { Shipment } from '@/lib/types';

// In-memory persistent state during server runtime
let shipmentsDb: Shipment[] = [...INITIAL_SHIPMENTS];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  let data = shipmentsDb;
  if (status && status !== 'All') {
    data = data.filter((s) => s.status.toLowerCase() === status.toLowerCase());
  }

  return NextResponse.json({
    success: true,
    totalCount: data.length,
    data
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.originHub || !body.destinationHub || !body.cargoDescription) {
      return NextResponse.json(
        { success: false, message: 'Harap lengkapi semua rincian rute pengiriman.' },
        { status: 400 }
      );
    }

    const newShipment: Shipment = {
      id: `shp-${Date.now().toString().slice(-4)}`,
      manifestNumber: `KA-DISP-${Math.floor(1000 + Math.random() * 9000)}`,
      originHub: body.originHub,
      destinationHub: body.destinationHub,
      cargoDescription: body.cargoDescription,
      tonnageKg: Number(body.tonnageKg) || 5000,
      fuelEfficiencyScore: Math.floor(88 + Math.random() * 11),
      status: 'In Transit',
      departureTime: new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' }) + ' WIB',
      estimatedArrival: 'Estimasi 8-12 Jam',
      carrierVehicle: body.carrierVehicle || 'Armada Fleet Reguler'
    };

    shipmentsDb.unshift(newShipment);

    return NextResponse.json({
      success: true,
      message: 'Surat jalan B2B berhasil diterbitkan dan masuk jadwal armada.',
      data: newShipment
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan pemrosesan server.' },
      { status: 500 }
    );
  }
}
