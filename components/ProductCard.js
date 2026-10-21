import Image from 'next/image';

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <Image 
        src={product.imageUrl} 
        alt={product.name} 
        width={300} 
        height={300} 
        className="rounded-md object-cover" 
      />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="font-bold text-xl">${product.price}</span>
        <button 
          onClick={() => addToCart(product)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
