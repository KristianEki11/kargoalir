import { NextResponse } from 'next/server';
import { INITIAL_WAREHOUSES } from '@/lib/db';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: INITIAL_WAREHOUSES,
    asOf: '08 September 2026'
  });
}
