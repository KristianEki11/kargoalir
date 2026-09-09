'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    fleetSize: '15-50 Unit',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-mono">
          Konsultasi & Uji Coba KargoAlir Enterprise
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Diskusikan tantangan rute dan kalkulasi ROI armada logistik Anda dengan tim spesialis rantai pasok kami.
        </p>
      </div>

      <div className="bg-surface border border-borderSubtle rounded-3xl p-6 sm:p-10 shadow-xl">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center text-3xl mx-auto border border-emerald-500/40">
              ✓
            </div>
            <h2 className="text-xl font-bold text-white font-mono">Permintaan Demo Berhasil Terkirim!</h2>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Tim spesialis logistik B2B KargoAlir akan menghubungi <b>{formData.email}</b> dalam waktu 1x24 jam kerja untuk menyusun jadwal simulasi langsung.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Nama Lengkap:</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Bpk. Aditya Pratama"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-carbon border border-borderSubtle text-slate-100 focus:outline-none focus:border-brandBlue"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Nama Perusahaan / Usaha:</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="PT Sinar Logistik Nusantara"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-carbon border border-borderSubtle text-slate-100 focus:outline-none focus:border-brandBlue"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Email Perusahaan:</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="aditya@sinarlogistik.co.id"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-carbon border border-borderSubtle text-slate-100 focus:outline-none focus:border-brandBlue"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Nomor Telepon / WhatsApp:</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0812-3456-7890"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-carbon border border-borderSubtle text-slate-100 focus:outline-none focus:border-brandBlue"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Estimasi Skala Armada Truk:</label>
              <select
                value={formData.fleetSize}
                onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-carbon border border-borderSubtle text-slate-200 focus:outline-none focus:border-brandBlue cursor-pointer"
              >
                <option value="1-15 Unit">1 - 15 Unit Truk</option>
                <option value="15-50 Unit">15 - 50 Unit Truk</option>
                <option value="50+ Unit">Lebih dari 50 Unit Truk (Enterprise Fleet)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Pesan / Kebutuhan Khusus:</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Jelaskan rute distribusi utama Anda atau integrasi sistem yang diinginkan..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-carbon border border-borderSubtle text-slate-100 focus:outline-none focus:border-brandBlue"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-brandBlue hover:bg-blue-600 text-white font-bold text-xs shadow-lg shadow-brandBlue/30 transition"
            >
              Kirim Permintaan Demo & Konsultasi
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
