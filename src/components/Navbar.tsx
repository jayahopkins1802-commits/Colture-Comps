import Link from "next/link";
import { UserButton, Show } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-md">
      <Link href="/" className="text-xl font-bold tracking-wider text-amber-400">COLTURE COMPS</Link>
      <div className="flex gap-6 items-center">
        <Link href="/shop" className="hover:text-amber-400 transition">Shop</Link>
        <Link href="/consignments" className="hover:text-amber-400 transition">Consignments</Link>
        <Link href="/cart" className="hover:text-amber-400 transition">Cart</Link>
        <Link href="/dashboard" className="hover:text-amber-400 transition">Dashboard</Link>
        <Link href="/admin" className="text-xs text-slate-400 hover:text-white">Admin</Link>
        
        <Show when="signed-out">
          <Link href="/sign-in" className="bg-amber-500 px-4 py-1.5 rounded text-black font-semibold hover:bg-amber-400">Login</Link>
        </Show>
        
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
}
