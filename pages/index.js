import { useState } from 'react';
import Head from 'next/head';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  // Mock data to simulate fetching from the database
  const dummyProducts = [
    { _id: '1', name: 'Wireless Headphones', description: 'High quality noise-cancelling', price: 99, imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
    { _id: '2', name: 'Smart Watch', description: 'Fitness tracker and more', price: 149, imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
    { _id: '3', name: 'Mechanical Keyboard', description: 'RGB backlit with blue switches', price: 79, imageUrl: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500' },
    { _id: '4', name: 'Gaming Mouse', description: 'Ergonomic design with high DPI', price: 59, imageUrl: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500' }
  ];

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    // In a real app, this would dispatch to a global state (e.g., Redux/Zustand) and update the DB
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>NexusShop | Premium Tech Gear</title>
        <meta name="description" content="High-performance e-commerce platform" />
      </Head>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-black tracking-tight text-gray-900">NexusShop.</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 font-medium">Products</button>
              <button className="text-gray-600 hover:text-gray-900 font-medium">Orders</button>
              <div className="relative">
                <span className="text-gray-900 font-bold">Cart ({cartCount})</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Upgrade Your Setup.
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Premium tech gear curated for developers, designers, and creators. Built for performance.
          </p>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummyProducts.map((product) => (
            <ProductCard 
              key={product._id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} NexusShop. Built with Next.js and Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}
