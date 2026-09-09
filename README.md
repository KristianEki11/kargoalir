# KargoAlir - B2B Supply Chain & Fleet Cost Optimizer 🚚⚡

> Daily Full-Stack Next.js Project — 8 September 2026 (Kategori: Ekonomi & Bisnis / SaaS)

KargoAlir adalah platform SaaS rantai pasok B2B terpadu yang dirancang untuk membantu perusahaan manufaktur, distributor B2B, dan pelaku logistik antarkota di Indonesia memangkas biaya operasional armada hingga 18.5%, mengurangi *empty return miles*, serta menyelaraskan inventaris multi-gudang (multi-hub warehouse).

## 🚀 Fitur Utama & Struktur Multi-Halaman
- **Halaman Beranda (`/`)**: Landing page profesional dengan simulator interaktif ROI efisiensi bahan bakar dan tiga pilar optimasi logistik.
- **Halaman Fitur (`/features`)**: Analisis mendalam modul *Smart Route Batching*, *Multi-Warehouse Inventory Visibility*, dan *Digital B2B Manifest & Invoicing*.
- **Halaman Harga (`/pricing`)**: Pilihan paket berlangganan (*Starter Hub*, *Business Fleet*, *Enterprise Network*) dengan kalkulasi otomatis diskon penagihan tahunan.
- **Halaman Dashboard B2B (`/dashboard`)**: Portal operasional interaktif mencakup KPI delivery rate, monitoring keterisian palet gudang regional (Jakarta, Semarang, Surabaya), serta formulir penerbitan manifes surat jalan baru.
- **Halaman Kontak (`/contact`)**: Formulir permohonan demo enterprise dan konsultasi rute langsung.

## 🛠️ Arsitektur Teknis
- **Framework**: Next.js 14 (App Router)
- **Bahasa**: TypeScript 5, React 18
- **Styling**: Tailwind CSS (Dark Enterprise Palette)
- **Backend API Routes**:
  - `GET /api/shipments`: Mengambil daftar manifes surat jalan terverifikasi.
  - `POST /api/shipments`: Menerbitkan dan memvalidasi manifes baru.
  - `GET /api/warehouses`: Pemantauan stok palet gudang waktu nyata.
  - `POST /api/roi-calculator`: Kalkulasi proyeksi efisiensi biaya armada.

## 📦 Cara Menjalankan Project
```bash
# 1. Masuk ke direktori proyek
cd kargoalir

# 2. Pasang dependensi
npm install

# 3. Jalankan server lokal
npm run dev
```
Buka peramban di `http://localhost:3000`.

## 📄 Dokumen PRD
Dokumen Product Requirements Document (PRD) lengkap dapat diakses pada [PRD - KargoAlir (Google Docs)](https://docs.google.com/document/d/1auBzmHi3JldoA6yEPdWDpmxK930qjFfd6B06hg_7Asw/edit).
