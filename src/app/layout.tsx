import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Colture Comps | Rare TCG Vault & Marketplace",
  description: "The ultimate ecosystem for rare trading cards and graded collectibles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className="bg-slate-950 text-slate-50 min-h-screen antialiased selection:bg-indigo-500 selection:text-white">
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
