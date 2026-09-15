import Link from "next/link";
import { UserButton, Show } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-lg font-black tracking-widest text-indigo-400">
        COLTURE<span className="text-white font-light">COMPS</span>
      </Link>
      
      {/* Clean spaced navigation items */}
      <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
        <Link href="/shop" className="hover:text-indigo-400 transition">Shop</Link>
        <Link href="/consignments" className="hover:text-indigo-400 transition">Consignments</Link>
        <Link href="/cart" className="hover:text-indigo-400 transition">Cart</Link>
        <Link href="/dashboard" className="hover:text-indigo-400 transition">Dashboard</Link>
      </div>

      <div className="flex gap-4 items-center">
        <Link href="/admin" className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hidden sm:block">
          Admin
        </Link>
        
        <Show when="signed-out">
          <Link href="/sign-in" className="bg-indigo-600 px-5 py-2 rounded-xl text-white text-sm font-semibold hover:bg-indigo-500 transition shadow-md shadow-indigo-600/20">
            Login
          </Link>
        </Show>
        
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
}
