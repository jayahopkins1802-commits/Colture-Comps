'use client';

import Link from 'next/link';

export default function ShopPage() {
  const products: { id: string; name: string; price: number; rarity: string; image: string }[] = [];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-12 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            The Vault Shop
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Explore authenticated, graded rare collectibles ready for instant secure checkout.
          </p>
        </div>
        <Link 
          href="/cart" 
          className="bg-slate-900 border border-slate-800 px-5 py-2.5 rounded-2xl font-medium text-sm hover:border-indigo-500 transition-all shadow-lg flex items-center gap-2"
        >
          <span>🛒 Cart</span>
          <span className="bg-indigo-600 text-xs px-2 py-0.5 rounded-full">0</span>
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-16 text-center shadow-xl">
          <p className="text-slate-400 text-lg">No active cards listed in the vault shop right now.</p>
          <p className="text-slate-500 text-sm mt-2">Check back soon or submit your cards via consignments.</p>
        </div>
      ) : null}
    </div>
  );
}
