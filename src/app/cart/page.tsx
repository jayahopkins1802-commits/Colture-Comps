export default function CartPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-black text-white tracking-tight">Your Cart</h1>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-4">
        <p className="text-slate-400">Your cart is currently empty.</p>
        <a href="/shop" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-500 transition">Browse Shop</a>
      </div>
    </main>
  );
}
