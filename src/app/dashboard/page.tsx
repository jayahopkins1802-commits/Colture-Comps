export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-12 px-6 sm:px-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
        Collector Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-lg">
          <h3 className="text-slate-400 text-sm font-medium">Active Vault Items</h3>
          <p className="text-3xl font-black text-indigo-400 mt-2">0</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-lg">
          <h3 className="text-slate-400 text-sm font-medium">Pending Consignments</h3>
          <p className="text-3xl font-black text-cyan-400 mt-2">0</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-lg">
          <h3 className="text-slate-400 text-sm font-medium">Total Portfolio Value</h3>
          <p className="text-3xl font-black text-emerald-400 mt-2">£0.00</p>
        </div>
      </div>
    </div>
  );
}
