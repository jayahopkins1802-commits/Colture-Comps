import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#020617', borderBottom: '1px solid #1e293b', color: '#fff', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50 }}>
      <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.05em', color: '#818cf8', textDecoration: 'none' }}>
        COLTURE<span style={{ color: '#fff', fontWeight: 300 }}>COMPS</span>
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontWeight: 500 }}>
        <Link href="/shop" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Shop</Link>
        <Link href="/consignments" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Consignments</Link>
        <Link href="/cart" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Cart</Link>
        <Link href="/dashboard" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Dashboard</Link>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link href="/admin" style={{ fontSize: '0.75rem', color: '#94a3b8', padding: '0.375rem 0.75rem', borderRadius: '0.5rem', backgroundColor: '#0f172a', border: '1px solid #1e293b', textDecoration: 'none' }}>
          Admin
        </Link>
        
        <SignedOut>
          <Link href="/sign-in" style={{ backgroundColor: '#4f46e5', padding: '0.5rem 1.25rem', borderRadius: '0.75rem', color: '#fff', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.3)' }}>
            Login
          </Link>
        </SignedOut>
        
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
