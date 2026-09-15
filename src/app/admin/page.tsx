"use client";
import { useState } from "react";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemSet, setItemSet] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemType, setItemType] = useState("CARD");
  const [imageUrl, setImageUrl] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Prismatic2026") {
      setAuthed(true);
    } else {
      alert("Invalid Admin Password");
    }
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: itemName, set: itemSet, price: parseFloat(itemPrice), type: itemType, imageUrl }),
    });
    if (res.ok) {
      alert("Item successfully added to official shop!");
      setItemName(""); setItemSet(""); setItemPrice(""); setImageUrl("");
    }
  };

  if (!authed) {
    return (
      <div className="max-w-md mx-auto mt-20 bg-slate-900 p-8 rounded-xl border border-slate-800">
        <h1 className="text-2xl font-bold mb-6 text-amber-400">Admin Authentication</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 bg-slate-950 border border-slate-800 rounded text-white"
          />
          <button type="submit" className="bg-amber-500 font-bold py-3 text-black rounded hover:bg-amber-400">Login to Admin</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-amber-400">Admin Dashboard</h1>
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 max-w-xl">
        <h2 className="text-xl font-bold mb-4">Add Item to Official Shop</h2>
        <form onSubmit={handleAddItem} className="flex flex-col gap-4">
          <input type="text" placeholder="Item Name" value={itemName} onChange={e => setItemName(e.target.value)} className="p-3 bg-slate-950 border border-slate-800 rounded" required />
          <input type="text" placeholder="Set Name" value={itemSet} onChange={e => setItemSet(e.target.value)} className="p-3 bg-slate-950 border border-slate-800 rounded" required />
          <select value={itemType} onChange={e => setItemType(e.target.value)} className="p-3 bg-slate-950 border border-slate-800 rounded">
            <option value="CARD">Card</option>
            <option value="SEALED">Sealed Product</option>
          </select>
          <input type="number" step="0.01" placeholder="Price (£)" value={itemPrice} onChange={e => setItemPrice(e.target.value)} className="p-3 bg-slate-950 border border-slate-800 rounded" required />
          <input type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="p-3 bg-slate-950 border border-slate-800 rounded" required />
          <button type="submit" className="bg-emerald-500 font-bold py-3 text-black rounded hover:bg-emerald-400">Publish Item</button>
        </form>
      </div>
    </div>
  );
}
