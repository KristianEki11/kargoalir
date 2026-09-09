'use client';
import { useState, useEffect } from 'react';
import { Shipment, WarehouseHub } from '@/lib/types';
import { INITIAL_SHIPMENTS, INITIAL_WAREHOUSES } from '@/lib/db';

export default function DashboardPage() {
  const [shipments, setShipments] = useState<Shipment[]>(INITIAL_SHIPMENTS);
  const [warehouses, setWarehouses] = useState<WarehouseHub[]>(INITIAL_WAREHOUSES);
  const [statusFilter, setStatusFilter] = useState('All');

  // New Shipment Form State
  const [originHub, setOriginHub] = useState('Jakarta (Cakung)');
  const [destinationHub, setDestinationHub] = useState('Surabaya (Rungkut)');
  const [cargoDescription, setCargoDescription] = useState('');
  const [tonnageKg, setTonnageKg] = useState('6500');
  const [vehicle, setVehicle] = useState('Fuso Heavy Duty B-9122-KA');
  const [notification, setNotification] = useState('');

  const filteredShipments = statusFilter === 'All'
    ? shipments
    : shipments.filter(s => s.status.toLowerCase() === statusFilter.toLowerCase());

  const handleCreateShipment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cargoDescription) return;

    const newEntry: Shipment = {
      id: `shp-${Date.now().toString().slice(-4)}`,
      manifestNumber: `KA-MAN-${Math.floor(1000 + Math.random() * 9000)}`,
      originHub,
      destinationHub,
      cargoDescription,
      tonnageKg: Number(tonnageKg) || 5000,
      fuelEfficiencyScore: Math.floor(90 + Math.random() * 9),
      status: 'In Transit',
      departureTime: new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' }) + ' WIB',
      estimatedArrival: 'Estimasi 7-10 Jam',
      carrierVehicle: vehicle
    };

    setShipments([newEntry, ...shipments]);
    setCargoDescription('');
    setNotification('Manifes pengiriman baru berhasil didaftarkan ke sistem.');
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderSubtle pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-mono">DASHBOARD LOGISTIK B2B</h1>
          <p className="text-xs text-slate-400">Monitoring pengiriman antar-gudang dan status kapasitas palet regional</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          <span className="font-mono text-slate-300">Hub Server: Online &bull; Latency: 24ms</span>
        </div>
      </div>

      {notification && (
        <div className="bg-emerald-950/60 border border-emerald-500/50 p-3 rounded-xl text-xs text-emerald-300 font-semibold flex items-center gap-2">
          <span>✓</span>
          <span>{notification}</span>
        </div>
      )}

      {/* Bento KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-surface border border-borderSubtle rounded-2xl p-4">
          <span className="text-[11px] text-slate-400 uppercase font-semibold">Tingkat Ketepatan Rute (OTD)</span>
          <p className="text-2xl font-extrabold text-white font-mono mt-1">96.8%</p>
          <span className="text-[10px] text-emerald-400">+1.4% dari bulan lalu</span>
        </div>
        <div className="bg-surface border border-borderSubtle rounded-2xl p-4">
          <span className="text-[11px] text-slate-400 uppercase font-semibold">Total Muatan Aktif</span>
          <p className="text-2xl font-extrabold text-brandCyan font-mono mt-1">
            {shipments.reduce((acc, c) => acc + c.tonnageKg, 0).toLocaleString('id-ID')} kg
          </p>
          <span className="text-[10px] text-slate-400">Armada Trans-Jawa</span>
        </div>
        <div className="bg-surface border border-borderSubtle rounded-2xl p-4">
          <span className="text-[11px] text-slate-400 uppercase font-semibold">Rata-rata Skor Efisiensi</span>
          <p className="text-2xl font-extrabold text-emerald-400 font-mono mt-1">93.2 / 100</p>
          <span className="text-[10px] text-emerald-300">Minim empty miles</span>
        </div>
        <div className="bg-surface border border-borderSubtle rounded-2xl p-4">
          <span className="text-[11px] text-slate-400 uppercase font-semibold">Gudang Kritis</span>
          <p className="text-2xl font-extrabold text-warningAmber font-mono mt-1">1 Hub (Semarang)</p>
          <span className="text-[10px] text-warningAmber">Kapasitas 90%</span>
        </div>
      </div>

      {/* Main Layout: Shipments Table (Left 8 Cols) + Warehouse Status & Dispatch Form (Right 4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Shipment Manifest Table */}
        <div className="lg:col-span-8 bg-surface border border-borderSubtle rounded-2xl p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-base font-bold text-white font-mono">Daftar Manifes Surat Jalan Aktif</h2>
            <div className="flex gap-1.5 bg-carbon p-1 rounded-xl border border-borderSubtle text-xs">
              {['All', 'In Transit', 'Delivered', 'Pending'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1 rounded-lg font-semibold transition ${
                    statusFilter === st ? 'bg-brandBlue text-white shadow' : 'text-slate-400 hover:text-white'
                  }` }
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-borderSubtle text-slate-400 font-mono text-[11px]">
                <tr>
                  <th className="py-2.5">No. Manifes</th>
                  <th className="py-2.5">Rute Hub</th>
                  <th className="py-2.5">Muatan & Tonase</th>
                  <th className="py-2.5">Status</th>
                  <th className="py-2.5">Skor Efisiensi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-borderSubtle/60 text-slate-300">
                {filteredShipments.map((shp) => {
                  let statusBg = 'bg-blue-950 text-blue-300 border-blue-500/30';
                  if (shp.status === 'Delivered') statusBg = 'bg-emerald-950 text-emerald-300 border-emerald-500/30';
                  if (shp.status === 'Pending') statusBg = 'bg-slate-800 text-slate-300 border-slate-600';
                  return (
                    <tr key={shp.id} className="hover:bg-surfaceHover/50 transition">
                      <td className="py-3 font-mono font-bold text-white">{shp.manifestNumber}</td>
                      <td className="py-3">
                        <p className="font-semibold text-slate-200">{shp.originHub} &rarr; {shp.destinationHub}</p>
                        <span className="text-[10px] text-slate-500">{shp.carrierVehicle}</span>
                      </td>
                      <td className="py-3">
                        <p className="text-slate-200">{shp.cargoDescription}</p>
                        <span className="text-[10px] text-brandCyan font-mono">{shp.tonnageKg.toLocaleString('id-ID')} kg</span>
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${statusBg}`}>
                          {shp.status}
                        </span>
                      </td>
                      <td className="py-3 font-mono font-bold text-emerald-400">{shp.fuelEfficiencyScore}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: New Dispatch Form & Hub Capacity */}
        <div className="lg:col-span-4 space-y-6">
          {/* New Dispatch Form */}
          <div className="bg-surface border border-borderSubtle rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-bold text-white font-mono">➕ Terbitkan Surat Jalan Baru</h3>
            <form onSubmit={handleCreateShipment} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Gudang Asal:</label>
                <select
                  value={originHub}
                  onChange={(e) => setOriginHub(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-carbon border border-borderSubtle text-slate-200 focus:outline-none focus:border-brandBlue cursor-pointer"
                >
                  <option value="Jakarta (Cakung)">Jakarta (Cakung)</option>
                  <option value="Semarang (Genuk)">Semarang (Genuk)</option>
                  <option value="Surabaya (Rungkut)">Surabaya (Rungkut)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Gudang Tujuan:</label>
                <select
                  value={destinationHub}
                  onChange={(e) => setDestinationHub(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-carbon border border-borderSubtle text-slate-200 focus:outline-none focus:border-brandBlue cursor-pointer"
                >
                  <option value="Surabaya (Rungkut)">Surabaya (Rungkut)</option>
                  <option value="Semarang (Genuk)">Semarang (Genuk)</option>
                  <option value="Jakarta (Cakung)">Jakarta (Cakung)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Deskripsi Kargo / SKU:</label>
                <input
                  type="text"
                  required
                  placeholder="Misal: Suku Cadang Mesin Industri"
                  value={cargoDescription}
                  onChange={(e) => setCargoDescription(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-carbon border border-borderSubtle text-slate-100 focus:outline-none focus:border-brandBlue"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-400 mb-1">Tonase (kg):</label>
                  <input
                    type="number"
                    value={tonnageKg}
                    onChange={(e) => setTonnageKg(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-carbon border border-borderSubtle text-slate-100 font-mono focus:outline-none focus:border-brandBlue"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Armada Truk:</label>
                  <input
                    type="text"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-carbon border border-borderSubtle text-slate-100 focus:outline-none focus:border-brandBlue"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-brandBlue hover:bg-blue-600 text-white font-bold text-xs shadow-md transition"
              >
                Kirim Dispatch & Update Manifes
              </button>
            </form>
          </div>

          {/* Regional Hubs Capacity Monitor */}
          <div className="bg-surface border border-borderSubtle rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-bold text-white font-mono">🏢 Status Keterisian Gudang Regional</h3>
            <div className="space-y-3">
              {warehouses.map((wh) => {
                const pct = Math.round((wh.occupiedPallets / wh.capacityPallets) * 100);
                return (
                  <div key={wh.id} className="p-3 bg-carbon border border-borderSubtle rounded-xl space-y-1.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-200">{wh.city}</span>
                      <span className="font-mono text-[11px] text-slate-400">{wh.occupiedPallets} / {wh.capacityPallets} Palet</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${pct > 85 ? 'bg-warningAmber' : 'bg-brandCyan'}`}
                        style={{ width: `${pct}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>{wh.name}</span>
                      <span className="font-bold text-slate-300">{pct}% Terisi</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
