import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'KargoAlir - B2B Supply Chain & Fleet Cost Optimizer',
  description: 'Platform enterprise terpadu untuk efisiensi rute logistik antarkota, pengurangan empty return miles, dan pemantauan stok multi-gudang.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <body className="bg-carbon text-slate-100 min-h-screen flex flex-col font-sans selection:bg-brandBlue selection:text-white">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
