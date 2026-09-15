export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Moody background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-950/30 rounded-full blur-[120px] pointer-events-none"></div>

      {/* App-style Card Container */}
      <div className="relative z-10 max-w-xl w-full bg-slate-900/95 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-2xl text-center space-y-8">
        
        {/* Status / App Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
          ✦ Premium TCG Vault & Marketplace ✦
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            COLTURE COMPS
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            The ultimate ecosystem for rare trading cards and graded collectibles.
          </p>
        </div>

        {/* App-like Action Buttons with Proper Spacing */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a
            href="/shop"
            className="flex-1 inline-flex items-center justify-center py-4 px-6 text-sm font-bold text-slate-950 bg-indigo-400 hover:bg-indigo-300 transition-all rounded-2xl shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Open Shop
          </a>
          <a
            href="/consignments"
            className="flex-1 inline-flex items-center justify-center py-4 px-6 text-sm font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-all rounded-2xl active:scale-95"
          >
            Consignments
          </a>
        </div>

        {/* Feature Grid with App-like Aesthetic */}
        <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-left">
          <div className="bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/50">
            <div className="text-indigo-400 font-bold text-xs uppercase tracking-wider">Vault</div>
            <p className="text-slate-400 text-[11px] mt-1 leading-tight">Secure grading & storage</p>
          </div>
          <div className="bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/50">
            <div className="text-indigo-400 font-bold text-xs uppercase tracking-wider">Verify</div>
            <p className="text-slate-400 text-[11px] mt-1 leading-tight">100% authentic stock</p>
          </div>
          <div className="bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/50">
            <div className="text-indigo-400 font-bold text-xs uppercase tracking-wider">Trade</div>
            <p className="text-slate-400 text-[11px] mt-1 leading-tight">Instant market liquidity</p>
          </div>
        </div>

      </div>
    </main>
  );
}
