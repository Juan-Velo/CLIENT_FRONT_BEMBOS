import React from 'react';
import ProductCard from '../components/ProductCard';

const PROMOS = [
  {
    id: 'p1',
    name: 'Trio A lo Pobre',
    description: '3 A lo Pobre regulares, 3 papas regulares y 3 salsas a elección',
    price: 41.90,
    originalPrice: 80.40,
    discount: 47,
    imageUrl: 'https://www.bembos.com.pe/media/catalog/product/cache/1/small_image/295x/9df78eab33525d08d6e5fb8d27136e95/t/r/trio_a_lo_pobre_1.jpg'
  },
  {
    id: 'p2',
    name: 'Promo A lo Pobre',
    description: '1 A lo pobre regular, 1 papa regular, 1 gaseosa personal y 1 salsa',
    price: 19.90,
    originalPrice: 32.70,
    discount: 39,
    imageUrl: 'https://www.bembos.com.pe/media/catalog/product/cache/1/small_image/295x/9df78eab33525d08d6e5fb8d27136e95/p/r/promo_a_lo_pobre_1.jpg'
  },
  {
    id: 'p3',
    name: 'Combo Trío',
    description: '1 Royal regular, 2 Cheese regulares, 3 papas regulares',
    price: 39.90,
    originalPrice: 71.40,
    discount: 44,
    imageUrl: 'https://www.bembos.com.pe/media/catalog/product/cache/1/small_image/295x/9df78eab33525d08d6e5fb8d27136e95/c/o/combo_trio.jpg'
  },
  {
    id: 'p4',
    name: 'Dúo Bembos',
    description: '1 A lo Pobre regular, 1 Churrita regular, 2 papas regulares',
    price: 26.90,
    originalPrice: 60.40,
    discount: 55,
    imageUrl: 'https://www.bembos.com.pe/media/catalog/product/cache/1/small_image/295x/9df78eab33525d08d6e5fb8d27136e95/d/u/duo_bembos.jpg'
  }
];

const Promos = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#0033A0] mb-8 text-center uppercase font-display">
          Promociones Exclusivas
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROMOS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Duplicate for demo */}
          {PROMOS.map(product => (
            <ProductCard key={`${product.id}-copy`} product={{...product, id: `${product.id}-copy`}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promos;
