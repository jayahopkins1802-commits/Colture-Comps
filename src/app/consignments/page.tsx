export default function ConsignmentsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-12 px-6 sm:px-12 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Vault Consignments
        </h1>
        <p className="text-slate-400 mt-2">
          Send your raw or graded cards to our secure vault for authentication, grading assistance, and global sales.
        </p>
      </div>

      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-6">
        <h3 className="text-xl font-bold text-slate-100">Submit a Card for Consignment</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Card Name & Set</label>
            <input type="text" placeholder="e.g. Charizard Base Set Holo" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-slate-100 focus:outline-none focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Grading Status</label>
            <input type="text" placeholder="e.g. PSA 10, Raw, BGS 9" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-slate-100 focus:outline-none focus:border-indigo-500" />
          </div>
        </div>
        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-600/20">
          Request Vault Appraisal
        </button>
      </div>
    </div>
  );
}
