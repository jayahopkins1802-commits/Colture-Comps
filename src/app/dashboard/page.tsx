export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-black text-white tracking-tight">Member Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-indigo-400">Active Orders</h2>
          <p className="text-slate-400 text-sm">You have no active orders in transit.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-indigo-400">Vault Holdings</h2>
          <p className="text-slate-400 text-sm">Your secure vault is currently empty.</p>
        </div>
      </div>
    </main>
  );
}
