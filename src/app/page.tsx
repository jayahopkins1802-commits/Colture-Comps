export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decorative Glow Effects (Warm Invitation) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Hero Container styled like a premium TCG card frame */}
      <div className="relative z-10 max-w-3xl w-full bg-slate-900/80 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-10 shadow-[0_0_50px_rgba(245,158,11,0.15)] text-center space-y-8">
        
        {/* Badge / Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-widest uppercase">
          ✦ Exclusive TCG & Streetwear Competitions ✦
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 drop-shadow-sm">
          COLTURE COMPS
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Step into the arena. Collect rare cards, secure high-end streetwear, and enter elite competitions designed for true enthusiasts.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="/shop"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-300 hover:to-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:scale-[1.02]"
          >
            <span>Browse Shop</span>
          </a>

          <a
            href="/consignments"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-amber-400 transition-all duration-300 bg-slate-800/80 border border-amber-500/30 rounded-xl hover:bg-slate-800 hover:border-amber-500 hover:scale-[1.02]"
          >
            <span>Explore Consignments</span>
          </a>
        </div>
      </div>

      {/* Footer feature highlights bar */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full mt-12 text-center">
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
          <h3 className="text-amber-400 font-bold text-sm">Verified Authentic</h3>
          <p className="text-slate-400 text-xs mt-1">100% genuine TCG cards & streetwear items.</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
          <h3 className="text-amber-400 font-bold text-sm">Instant Entry</h3>
          <p className="text-slate-400 text-xs mt-1">Seamless checkout and automated draw system.</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
          <h3 className="text-amber-400 font-bold text-sm">Secure Vault</h3>
          <p className="text-slate-400 text-xs mt-1">Safe storage and tracked worldwide shipping.</p>
        </div>
      </div>
    </main>
  );
}
