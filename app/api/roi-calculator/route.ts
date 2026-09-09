import { NextResponse } from 'next/server';
import { RoiSimulationInput, RoiSimulationResult } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const input: RoiSimulationInput = await request.json();

    const fleet = input.fleetSize || 10;
    const dispatches = input.monthlyDispatches || 120;
    const distance = input.avgDistanceKm || 450;
    const fuelPrice = input.avgFuelPricePerLiter || 16800; // Diesel industri per Sept 2026

    // Baseline fuel calculation (e.g. 1 liter per 4 km)
    const totalKm = dispatches * distance;
    const baseLiters = totalKm / 4.0;
    const currentFuelCost = baseLiters * fuelPrice;

    // Optimized by KargoAlir batching & empty-miles reduction (18.5% average efficiency)
    const optimizedLiters = baseLiters * 0.815;
    const optimizedCost = optimizedLiters * fuelPrice;
    const monthlySavings = currentFuelCost - optimizedCost;
    const reducedEmptyKm = Math.round(totalKm * 0.16);

    const result: RoiSimulationResult = {
      currentMonthlyFuelCost: Math.round(currentFuelCost),
      optimizedMonthlyFuelCost: Math.round(optimizedCost),
      monthlyFuelSavings: Math.round(monthlySavings),
      reducedEmptyKm,
      annualRoiPercentage: 340
    };

    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Invalid payload' }, { status: 400 });
  }
}
