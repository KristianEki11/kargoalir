export default function FeaturesPage() {
  const features = [
    {
      title: 'Smart Route Batching & Empty-Miles Reduction',
      badge: 'Efisiensi BBM',
      description: 'Menghubungkan truk pengiriman yang telah selesai bongkar muat dengan permintaan angkutan barang arah balik (backhaul), mengeliminasi risiko truk berjalan kosong.',
      points: ['Prediksi rute tol Trans-Jawa', 'Kalkulasi tonase muatan aman', 'Peringatan titik macet & banjir rob pesisir']
    },
    {
      title: 'Multi-Warehouse Inventory Visibility',
      badge: 'Manajemen Stok',
      description: 'Memantau keterisian palet di seluruh pusat distribusi regional (Jakarta, Jawa Tengah, Jawa Timur) dengan pembaruan otomatis per pergantian shift.',
      points: ['Peringatan kapasitas kritis', 'Lead-time transfer antar-gudang', 'Pencocokan SKU prioritas pengiriman']
    },
    {
      title: 'Digital B2B Manifest & Invoicing',
      badge: 'Paperless Compliance',
      description: 'Penerbitan surat jalan digital yang dilengkapi QR kode verifikasi stempel serah terima barang di dermaga muat dan gudang tujuan.',
      points: ['Riwayat audit legalitas lengkap', 'Ekspor format CSV/PDF', 'Integrasi API ERP korporat']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-mono">
          Fitur Enterprise untuk Solusi Rantai Pasok Modern
        </h1>
        <p className="text-sm text-slate-400">
          Tingkatkan kendali atas biaya armada, kepatuhan manifes muatan, dan utilisasi gudang dalam satu ekosistem terpadu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="bg-surface border border-borderSubtle rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-brandCyan/40 transition shadow-xl">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-brandBlue/20 text-brandCyan border border-brandCyan/30 uppercase font-mono">
                {item.badge}
              </span>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </div>

            <div className="pt-4 border-t border-borderSubtle space-y-2">
              <span className="text-[11px] font-bold text-slate-300 block">Keunggulan Kunci:</span>
              <ul className="text-xs text-slate-400 space-y-1.5">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2">
                    <span className="text-emerald-400 text-sm">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
