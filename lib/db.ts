import { Shipment, WarehouseHub } from './types';

export const INITIAL_WAREHOUSES: WarehouseHub[] = [
  {
    id: 'wh-jkt',
    name: 'Hub Cakung Logistik Central',
    city: 'Jakarta Timur',
    capacityPallets: 4500,
    occupiedPallets: 3680,
    activeTrucks: 24,
    leadTimeHours: 6,
    status: 'Normal'
  },
  {
    id: 'wh-smg',
    name: 'Hub Genuk Pantura Distribution',
    city: 'Semarang',
    capacityPallets: 2800,
    occupiedPallets: 2520,
    activeTrucks: 16,
    leadTimeHours: 4,
    status: 'Near Capacity'
  },
  {
    id: 'wh-sby',
    name: 'Hub Rungkut Maritim Gateway',
    city: 'Surabaya',
    capacityPallets: 5200,
    occupiedPallets: 3950,
    activeTrucks: 32,
    leadTimeHours: 5,
    status: 'Normal'
  }
];

export const INITIAL_SHIPMENTS: Shipment[] = [
  {
    id: 'shp-801',
    manifestNumber: 'KA-JKT-SBY-801',
    originHub: 'Jakarta (Cakung)',
    destinationHub: 'Surabaya (Rungkut)',
    cargoDescription: 'Komponen Suku Cadang & Elektrikal',
    tonnageKg: 8500,
    fuelEfficiencyScore: 94,
    status: 'In Transit',
    departureTime: '08 Sept 2026 04:30 WIB',
    estimatedArrival: '08 Sept 2026 19:45 WIB',
    carrierVehicle: 'Fuso Heavy Duty B-9812-UX'
  },
  {
    id: 'shp-802',
    manifestNumber: 'KA-SMG-JKT-802',
    originHub: 'Semarang (Genuk)',
    destinationHub: 'Jakarta (Cakung)',
    cargoDescription: 'Bahan Baku Tekstil & Kemasan Ramah Lingkungan',
    tonnageKg: 5200,
    fuelEfficiencyScore: 89,
    status: 'In Transit',
    departureTime: '08 Sept 2026 06:15 WIB',
    estimatedArrival: '08 Sept 2026 14:00 WIB',
    carrierVehicle: 'Hino Wingbox H-8411-KP'
  },
  {
    id: 'shp-803',
    manifestNumber: 'KA-SBY-SMG-803',
    originHub: 'Surabaya (Rungkut)',
    destinationHub: 'Semarang (Genuk)',
    cargoDescription: 'Produk Minuman Kemasan Karton',
    tonnageKg: 12000,
    fuelEfficiencyScore: 97,
    status: 'Delivered',
    departureTime: '07 Sept 2026 21:00 WIB',
    estimatedArrival: '08 Sept 2026 05:30 WIB',
    carrierVehicle: 'Scania R500 L-9022-QW'
  },
  {
    id: 'shp-804',
    manifestNumber: 'KA-JKT-SMG-804',
    originHub: 'Jakarta (Cakung)',
    destinationHub: 'Semarang (Genuk)',
    cargoDescription: 'Bahan Makanan Beku Cold-Chain',
    tonnageKg: 6400,
    fuelEfficiencyScore: 91,
    status: 'Pending',
    departureTime: '08 Sept 2026 13:00 WIB',
    estimatedArrival: '08 Sept 2026 20:30 WIB',
    carrierVehicle: 'Isuzu Giga Thermo B-7719-EM'
  }
];
