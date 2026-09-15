import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Colture Comps",
  description: "Trading Cards & Collectibles Marketplace",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-slate-950 text-slate-100 min-h-screen">
          <Navbar />
          <main className="max-w-7xl mx-auto p-6">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
