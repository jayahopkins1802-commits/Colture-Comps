export default function ShopPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight">TCG & Collectibles Vault</h1>
        <p className="text-slate-400 text-sm mt-1">Browse verified rare cards, graded slabs, and exclusives.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="h-48 bg-slate-800/50 rounded-2xl flex items-center justify-center text-slate-500 font-medium">Card Image Placeholder</div>
          <h3 className="font-bold text-lg text-white">Charizard VMAX [Shiny]</h3>
          <p className="text-indigo-400 font-semibold text-sm">PSA 10 Gem Mint</p>
          <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition">View Details</button>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="h-48 bg-slate-800/50 rounded-2xl flex items-center justify-center text-slate-500 font-medium">Card Image Placeholder</div>
          <h3 className="font-bold text-lg text-white">Umbreon VMAX</h3>
          <p className="text-indigo-400 font-semibold text-sm">BGS 9.5 Pristine</p>
          <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition">View Details</button>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="h-48 bg-slate-800/50 rounded-2xl flex items-center justify-center text-slate-500 font-medium">Card Image Placeholder</div>
          <h3 className="font-bold text-lg text-white">Lugia Ex [Gold Star]</h3>
          <p className="text-indigo-400 font-semibold text-sm">PSA 9 Mint</p>
          <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition">View Details</button>
        </div>
      </div>
    </main>
  );
}
