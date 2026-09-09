export interface Shipment {
  id: string;
  manifestNumber: string;
  originHub: string;
  destinationHub: string;
  cargoDescription: string;
  tonnageKg: number;
  fuelEfficiencyScore: number;
  status: 'In Transit' | 'Delivered' | 'Pending' | 'Delayed';
  departureTime: string;
  estimatedArrival: string;
  carrierVehicle: string;
}

export interface WarehouseHub {
  id: string;
  name: string;
  city: string;
  capacityPallets: number;
  occupiedPallets: number;
  activeTrucks: number;
  leadTimeHours: number;
  status: 'Normal' | 'Near Capacity' | 'Critical';
}

export interface RoiSimulationInput {
  fleetSize: number;
  monthlyDispatches: number;
  avgDistanceKm: number;
  avgFuelPricePerLiter: number;
}

export interface RoiSimulationResult {
  currentMonthlyFuelCost: number;
  optimizedMonthlyFuelCost: number;
  monthlyFuelSavings: number;
  reducedEmptyKm: number;
  annualRoiPercentage: number;
}
