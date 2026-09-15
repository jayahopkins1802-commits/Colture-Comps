export default function ConsignmentsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-4xl mx-auto space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Consign Your Collectibles</h1>
          <p className="text-slate-400 text-sm mt-1">Send your graded cards and high-end items to our secure vault for listing.</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Item Name / Set</label>
            <input type="text" placeholder="e.g. Pikachu Illustrator PSA 8" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Grading Company & Score</label>
            <input type="text" placeholder="e.g. PSA 10" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500" />
          </div>
          <button type="button" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition shadow-lg shadow-indigo-600/20">Submit Consignment Request</button>
        </form>
      </div>
    </main>
  );
}
