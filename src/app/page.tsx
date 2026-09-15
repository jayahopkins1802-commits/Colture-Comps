export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-extrabold tracking-wider text-amber-400">WELCOME TO COLTURE COMPS</h1>
        <p className="text-slate-300 text-lg">
          Your premier destination for exclusive streetwear and competitions.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a href="/shop" className="bg-amber-500 text-black px-6 py-3 rounded font-semibold hover:bg-amber-400 transition">
            Browse Shop
          </a>
          <a href="/consignments" className="border border-slate-700 px-6 py-3 rounded font-semibold hover:bg-slate-900 transition">
            Consignments
          </a>
        </div>
      </div>
    </main>
  );
}
