import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[85vh] bg-slate-950 text-slate-50 flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <span className="bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full shadow-inner">
          ⚡ Premium TCG Vault & Marketplace
        </span>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-cyan-400 to-white bg-clip-text text-transparent">
          Collect, Vault & Trade Rare Cards
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl font-normal max-w-2xl mx-auto">
          The ultimate ecosystem for authenticated trading cards and graded collectibles with instant market liquidity.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link 
            href="/shop" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-indigo-600/30 transition-all text-base"
          >
            Explore Shop
          </Link>
          <Link 
            href="/consignments" 
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-bold px-8 py-4 rounded-2xl transition-all text-base"
          >
            Consign Cards
          </Link>
        </div>
      </div>
    </div>
  );
}
