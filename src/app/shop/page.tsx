'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample products list representing your TCG vault
const products = [
  { id: '1', name: 'Charizard VMAX - PSA 10', price: 850, rarity: 'Secret Rare', image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=500&auto=format&fit=crop&q=60' },
  { id: '2', name: 'Blue-Eyes White Dragon - BGS 9.5', price: 1200, rarity: 'Ultra Rare', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60' },
  { id: '3', name: 'Pikachu Illustrator Promo', price: 5000, rarity: 'Vintage Mint', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60' },
  { id: '4', name: 'Black Lotus - CGC 8.5', price: 15000, rarity: 'Legendary', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60' },
];

export default function ShopPage() {
  const [cart, setCart] = useState<string[]>([]);
  const [notification, setNotification] = useState('');

  const addToCart = (productName: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation when clicking button
    setCart([...cart, productName]);
    setNotification(`Added ${productName} to cart!`);
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-12 px-6 sm:px-12 max-w-7xl mx-auto">
      {notification && (
        <div className="fixed bottom-6 right-6 bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 transition-all duration-300 animate-bounce">
          {notification}
        </div>
      )}

      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            The Vault Shop
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Explore authenticated, graded rare collectibles ready for instant secure checkout.
          </p>
        </div>
        <Link 
          href="/cart" 
          className="bg-slate-900 border border-slate-800 px-5 py-2.5 rounded-2xl font-medium text-sm hover:border-indigo-500 transition-all shadow-lg flex items-center gap-2"
        >
          <span>🛒 Cart</span>
          <span className="bg-indigo-600 text-xs px-2 py-0.5 rounded-full">{cart.length}</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div 
            key={item.id}
            className="group bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-5 overflow-hidden shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-64 w-full mb-4 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/30">
                  {item.rarity}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                {item.name}
              </h3>
              <p className="text-xl font-black text-indigo-400 mt-2">
                £{item.price.toLocaleString()}
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <button 
                onClick={(e) => addToCart(item.name, e)}
                className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-2xl transition-all shadow-lg shadow-indigo-600/20 text-sm active:scale-95"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
