export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-12 px-6 sm:px-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
        Admin Control Center
      </h1>
      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-xl">
        <p className="text-slate-300">Welcome to the management portal. Use this area to review inventory, process consignments, and manage orders.</p>
      </div>
    </div>
  );
}
