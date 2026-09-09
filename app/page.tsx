'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [fleetSize, setFleetSize] = useState(15);
  const [dispatches, setDispatches] = useState(140);
  const [distance, setDistance] = useState(480);

  // Live client-side calculation
  const totalKm = dispatches * distance;
  const fuelLiters = totalKm / 4.0;
  const currentCost = fuelLiters * 16800;
  const savings = currentCost * 0.185;
  const optimizedCost = currentCost - savings;

  return (
    <div className="space-y-16 py-10">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-borderSubtle text-xs text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Analisis ALI Sept 2026: Prospek Logistik Tumbuh 8% dengan Digitalisasi Rantai Pasok</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight font-mono">
          Pangkas 18.5% Biaya Armada & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandBlue to-brandCyan">Eliminasi Empty Miles</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          KargoAlir adalah platform orkestrasi rantai pasok B2B terpadu. Sinkronkan inventaris antar-gudang Jawa–Sumatera dan kendalikan lonjakan tarif bahan bakar armada secara presisi.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-xl text-sm font-bold bg-brandBlue hover:bg-blue-600 text-white shadow-xl shadow-brandBlue/30 transition"
          >
            Mulai Uji Coba Dashboard &rarr;
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl text-sm font-bold bg-surface hover:bg-surfaceHover border border-borderSubtle text-slate-200 transition"
          >
            Jadwalkan Konsultasi Rute
          </Link>
        </div>
      </section>

      {/* Interactive ROI Cost Simulator Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface border border-borderSubtle rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderSubtle pb-6">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-mono flex items-center gap-2">
                <span>🧮 SIMULATOR EFISIENSI BBM ARMADA LOGISTIK</span>
              </h2>
              <p className="text-xs text-slate-400">
                Hitung proyeksi penghematan operasional menggunakan algoritma rute dinamis KargoAlir
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/30">
              Benchmark Solar Industri: Rp 16.800/L
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Ukuran Armada Truk:</span>
                <span className="font-bold text-brandCyan font-mono">{fleetSize} Unit</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={fleetSize}
                onChange={(e) => setFleetSize(Number(e.target.value))}
                className="w-full accent-brandBlue bg-carbon h-2 rounded-lg cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Frekuensi Dispatch / Bulan:</span>
                <span className="font-bold text-brandCyan font-mono">{dispatches} Pengiriman</span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={dispatches}
                onChange={(e) => setDispatches(Number(e.target.value))}
                className="w-full accent-brandBlue bg-carbon h-2 rounded-lg cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Jarak Rata-rata Rute:</span>
                <span className="font-bold text-brandCyan font-mono">{distance} km</span>
              </div>
              <input
                type="range"
                min="100"
                max="1200"
                step="20"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full accent-brandBlue bg-carbon h-2 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Result Banner */}
          <div className="bg-carbon border border-borderSubtle rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3">
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Biaya Bahan Bakar Konvensional</span>
              <p className="text-xl font-bold text-slate-300 font-mono mt-1">
                Rp {Math.round(currentCost).toLocaleString('id-ID')}
              </p>
              <span className="text-[10px] text-slate-500">Estimasi bulanan</span>
            </div>

            <div className="p-3 border-y sm:border-y-0 sm:border-x border-borderSubtle bg-emerald-950/20 rounded-xl">
              <span className="text-[11px] text-emerald-400 uppercase font-semibold">Potensi Penghematan Bersih</span>
              <p className="text-2xl font-extrabold text-emerald-400 font-mono mt-1">
                Rp {Math.round(savings).toLocaleString('id-ID')}
              </p>
              <span className="text-[10px] text-emerald-300">Hemat ~18.5% per bulan</span>
            </div>

            <div className="p-3">
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Pengurangan Empty Kilometers</span>
              <p className="text-xl font-bold text-brandCyan font-mono mt-1">
                {Math.round(totalKm * 0.16).toLocaleString('id-ID')} km
              </p>
              <span className="text-[10px] text-slate-500">Kapasitas muatan terisi balik</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillar Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">Tiga Pilar Efisiensi Rantai Pasok</h2>
          <p className="text-xs sm:text-sm text-slate-400">Dirancang khusus menjawab realitas geografis dan biaya logistik Indonesia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface border border-borderSubtle rounded-2xl p-6 space-y-3 hover:border-brandBlue/50 transition">
            <div className="w-10 h-10 rounded-xl bg-blue-950 text-brandCyan flex items-center justify-center text-lg font-bold">
              🗺️
            </div>
            <h3 className="font-bold text-white text-base">Algoritma Batching Rute Pantura</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Secara otomatis menggabungkan paket muatan parsial (LTL) menjadi muatan penuh (FTL) di koridor Jakarta–Semarang–Surabaya untuk menekan biaya per tonase.
            </p>
          </div>

          <div className="bg-surface border border-borderSubtle rounded-2xl p-6 space-y-3 hover:border-brandBlue/50 transition">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center text-lg font-bold">
              🏢
            </div>
            <h3 className="font-bold text-white text-base">Multi-Hub Stock Balancing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Visibilitas kapasitas palet gudang secara waktu nyata. Mencegah penumpukan stok di satu titik dan menyarankan relokasi muatan sebelum terjadi kehabisan stok.
            </p>
          </div>

          <div className="bg-surface border border-borderSubtle rounded-2xl p-6 space-y-3 hover:border-brandBlue/50 transition">
            <div className="w-10 h-10 rounded-xl bg-amber-950 text-warningAmber flex items-center justify-center text-lg font-bold">
              ⚡
            </div>
            <h3 className="font-bold text-white text-base">Fuel Surcharge Matrix Otomatis</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Perhitungan penyesuaian tarif bahan bakar armada yang transparan dan otomatis tercetak pada manifes surat jalan B2B tanpa sengketa rekonsiliasi faktur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
