'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter Hub',
      desc: 'Cocok untuk distributor lokal dengan 1-2 gudang dan armada di bawah 10 truk.',
      monthlyPrice: 2499000,
      features: [
        'Maksimal 10 unit armada aktif',
        '2 Titik gudang terhubung',
        'Kalkulator rute & BBM standar',
        'Surat jalan digital (PDF)',
        'Dukungan email kerja'
      ],
      popular: false
    },
    {
      name: 'Business Fleet',
      desc: 'Pilihan utama distributor antarkota skala menengah dengan rute padat Jawa-Bali.',
      monthlyPrice: 6999000,
      features: [
        'Hingga 35 unit armada aktif',
        '5 Titik gudang multi-regional',
        'Algoritma optimasi empty-miles',
        'Fuel surcharge matrix dinamis',
        'Integrasi Webhook & REST API',
        'Dukungan prioritas 24/7'
      ],
      popular: true
    },
    {
      name: 'Enterprise Network',
      desc: 'Solusi korporasi logistik 3PL dengan puluhan cabang dan integrasi custom ERP.',
      monthlyPrice: 15999000,
      features: [
        'Armada truk tanpa batas',
        'Multi-hub nasional tak terbatas',
        'Dedicated server instance',
        'Kustomisasi SLA & On-premise deployment',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-mono">
          Investasi Transparan untuk Efisiensi Logistik
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Pilih paket yang selaras dengan skala distribusi Anda. Hemat hingga 20% dengan penagihan tahunan.
        </p>

        {/* Billing Switcher */}
        <div className="inline-flex items-center gap-3 p-1.5 rounded-2xl bg-surface border border-borderSubtle">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
              !isAnnual ? 'bg-brandBlue text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Penagihan Bulanan
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              isAnnual ? 'bg-brandBlue text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Tahunan</span>
            <span className="text-[10px] bg-emerald-500 text-slate-900 px-1.5 py-0.5 rounded-full font-bold">Hemat 20%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => {
          const finalPrice = isAnnual ? plan.monthlyPrice * 0.8 : plan.monthlyPrice;
          return (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between space-y-6 relative transition ${
                plan.popular
                  ? 'bg-surface border-2 border-brandBlue shadow-2xl shadow-brandBlue/20'
                  : 'bg-surface/80 border border-borderSubtle hover:border-slate-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brandBlue text-white text-[10px] font-extrabold uppercase font-mono tracking-wider">
                  Paling Banyak Dipilih
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white font-mono">{plan.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{plan.desc}</p>
                <div className="pt-2">
                  <span className="text-3xl font-extrabold text-white font-mono">
                    Rp {Math.round(finalPrice).toLocaleString('id-ID')}
                  </span>
                  <span className="text-xs text-slate-400"> / bulan</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-borderSubtle">
                <span className="text-xs font-bold text-slate-300 block">Fitur Termasuk:</span>
                <ul className="text-xs text-slate-300 space-y-2">
                  {plan.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="text-brandCyan font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`w-full py-3 rounded-xl text-xs font-bold text-center transition ${
                  plan.popular
                    ? 'bg-brandBlue hover:bg-blue-600 text-white shadow-lg shadow-brandBlue/30'
                    : 'bg-carbon hover:bg-surfaceHover border border-borderSubtle text-slate-200'
                }`}
              >
                Pilih Paket {plan.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
