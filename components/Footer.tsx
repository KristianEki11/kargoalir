export default function Footer() {
  return (
    <footer className="border-t border-borderSubtle bg-carbon text-slate-400 py-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-white text-sm">KARGOALIR</span>
            <span className="px-1.5 py-0.5 text-[9px] rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-semibold">
              Live Sept 2026
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Platform SaaS optimasi rute armada logistik, penyelarasan multi-gudang regional, dan kalkulasi fuel surcharge bagi rantai pasok B2B Indonesia.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase text-[11px] mb-3 font-mono">Modul Solusi</h4>
          <ul className="space-y-2">
            <li><a href="/features" className="hover:text-white transition">Dynamic Route Batching</a></li>
            <li><a href="/features" className="hover:text-white transition">Multi-Hub Inventory Balancer</a></li>
            <li><a href="/features" className="hover:text-white transition">Fleet Surcharge Matrix</a></li>
            <li><a href="/dashboard" className="hover:text-white transition">Live Dispatch Monitor</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase text-[11px] mb-3 font-mono">Perusahaan & Legal</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white transition">Tentang KargoAlir</a></li>
            <li><a href="/pricing" className="hover:text-white transition">Paket Berlangganan</a></li>
            <li><a href="/contact" className="hover:text-white transition">Konsultasi Efisiensi Armada</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Ketentuan Layanan & SLA</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase text-[11px] mb-3 font-mono">Pusat Operasional</h4>
          <p className="leading-relaxed">Menara Logistik Pantura Lt. 14, Kawasan Industri Pulogadung, Jakarta Timur.</p>
          <p className="mt-2 text-brandCyan">support@kargoalir.id &bull; 021-8902-1144</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-borderSubtle text-center text-slate-500 text-[11px]">
        &copy; 2026 KargoAlir Technologies Indonesia. Seluruh hak cipta dilindungi. Mengacu pada regulasi logistik Kemenhub & ALI.
      </div>
    </footer>
  );
}
