import { prisma } from "@/lib/prisma";

export default async function ShopPage() {
  const shopItems = await prisma.shopItem.findMany();

  return (
    <div>
      <h1 className="text-3xl font-extrabold mb-6 text-amber-400">Official Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shopItems.map((item) => (
          <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-lg p-4 flex flex-col">
            <img src={item.imageUrl} alt={item.name} className="h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-sm text-slate-400">Set: {item.set} | Type: {item.type}</p>
            <p className="text-lg font-semibold text-emerald-400 mt-2">£{item.price.toFixed(2)}</p>
            <button className="mt-4 bg-amber-500 text-black font-bold py-2 rounded hover:bg-amber-400 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
