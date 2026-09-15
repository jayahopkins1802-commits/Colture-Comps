export default function CartPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-12 px-6 sm:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
        Your Vault Cart
      </h1>
      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-xl text-center py-16">
        <p className="text-slate-400 text-lg">Your cart is currently empty.</p>
      </div>
    </div>
  );
}
