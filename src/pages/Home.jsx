import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Banner from '../components/Banner';
import CategoryNav from '../components/CategoryNav';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

// Mock Data based on Bembos
const PROMOS = [
  {
    id: 'p1',
    name: 'Trio A lo Pobre',
    description: '3 A lo Pobre regulares, 3 papas regulares y 3 salsas a elección',
    price: 41.90,
    originalPrice: 80.40,
    discount: 47,
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400'
  },
  {
    id: 'p2',
    name: 'Promo A lo Pobre',
    description: '1 A lo pobre regular, 1 papa regular, 1 gaseosa personal y 1 salsa',
    price: 19.90,
    originalPrice: 32.70,
    discount: 39,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400'
  },
  {
    id: 'p3',
    name: 'Combo Trío',
    description: '1 Royal regular, 2 Cheese regulares, 3 papas regulares',
    price: 39.90,
    originalPrice: 71.40,
    discount: 44,
    imageUrl: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400'
  },
  {
    id: 'p4',
    name: 'Dúo Bembos',
    description: '1 A lo Pobre regular, 1 Churrita regular, 2 papas regulares',
    price: 26.90,
    originalPrice: 60.40,
    discount: 55,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400'
  }
];

const RECOMMENDED = [
  {
    id: 'r1',
    name: 'Dúo Queso Tocino',
    description: '2 Queso Tocino regulares, 2 papas medianas',
    price: 27.90,
    originalPrice: 49.60,
    discount: 43,
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'
  },
  {
    id: 'r2',
    name: 'Personal Churrita',
    description: '1 Churrita mediana, 1 papa regular',
    price: 16.90,
    originalPrice: 27.80,
    discount: 39,
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400'
  }
];

const LOS_MAS_VENDIDOS = [
  {
    id: 'mv1',
    name: 'Dúo Sabroso',
    description: '2 A lo Pobre regulares, 2 papas regulares, 2 gaseosas personales',
    price: 28.90,
    originalPrice: 60.40,
    discount: 57,
    imageUrl: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400'
  },
  {
    id: 'mv2',
    name: 'Promo Doble Queso Tocino',
    description: 'Doble hamburguesa a la parrilla, doble queso edam, doble tocino',
    price: 21.90,
    originalPrice: 37.70,
    discount: 44,
    imageUrl: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?w=400'
  },
  {
    id: 'mv3',
    name: 'Dúo Queso Tocino',
    description: '2 Queso Tocino regulares, 2 papas medianas',
    price: 27.90,
    originalPrice: 49.60,
    discount: 43,
    imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400'
  },
  {
    id: 'mv4',
    name: 'Dúo Imperdible',
    description: '1 Clásica regular, 1 Churrita regular, 2 papas regulares',
    price: 19.90,
    originalPrice: 49.60,
    discount: 60,
    imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400'
  },
  {
    id: 'mv5',
    name: 'Familiar Perfecto',
    description: '2 Clásicas regulares, 2 Cheese regulares, 4 papas regulares',
    price: 50.90,
    originalPrice: 112.00,
    discount: 54,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400'
  }
];

const ProductCarousel = ({ title, products, bgColor = 'bg-white' }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`${bgColor} py-8`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase">
            {title}
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex w-10 h-10 rounded-full border-2 border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white items-center justify-center transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex w-10 h-10 rounded-full border-2 border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white items-center justify-center transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map(product => (
            <div key={product.id} className="flex-none w-[280px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />
      <CategoryNav />
      
      {/* PROMOCIONES Section */}
      <ProductCarousel title="PROMOCIONES" products={PROMOS} />

      {/* RECOMENDADOS PARA TI Section */}
      <ProductCarousel title="RECOMENDADOS PARA TI" products={RECOMMENDED} bgColor="bg-gray-100" />

      {/* LOS MÁS VENDIDOS Section */}
      <ProductCarousel title="LOS MÁS VENDIDOS" products={LOS_MAS_VENDIDOS} />

      {/* Delivery Coverage Section */}
      <section className="bg-[#0033A0] py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">
              ¡BEMBOS AL RESCATE DE TU ANTOJO!
            </h2>
            <p className="text-lg mb-6">
              Descubre nuestras zonas de delivery y recibe tu pedido rapidito.
            </p>
            <a 
              href="https://mcprod.bembos.desarrollongr.com.pe/deliverycoverage" 
              className="inline-block bg-[#FFD11A] text-[#0033A0] font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors"
            >
              Encuéntralas aquí
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
             <img 
               src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500" 
               alt="Delivery Zone" 
               className="max-h-[300px] object-contain rounded-lg shadow-lg"
               onError={(e) => e.target.style.display = 'none'}
             />
          </div>
        </div>
      </section>

      {/* Loyalty Program Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0033A0] mb-4 italic">
              PROGRAMA DE LEALTAD
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              ¡Alcanza Destinados y que nadie te pare! Delivery Gratis + Nuggets x4 de regalo en tu pedido.
            </p>
            <a 
              href="https://www.bembos.com.pe/beneficios" 
              className="inline-block bg-[#0033A0] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors"
            >
              Descúbrelo aquí
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
             <img 
               src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=500" 
               alt="Loyalty Program" 
               className="max-h-[300px] object-contain rounded-lg shadow-lg"
               onError={(e) => e.target.style.display = 'none'}
             />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Preguntas frecuentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-[#0033A0] mb-2">1. Tiendas de hamburguesas cerca de ti</h3>
              <p className="text-gray-600">
                Solo ingresa tu ubicación en <a href="https://www.bembos.com.pe/locales" className="text-blue-600 underline">https://www.bembos.com.pe/locales</a> y encuentra las tiendas más cercanas para que disfrutes rápido de tus hamburguesas favoritas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-[#0033A0] mb-2">2. ¿Cuáles son las mejores hamburguesas de Perú?</h3>
              <p className="text-gray-600">
                ¡Las nuestras, obvio! Las que se hacen con calle y sabor. En Bembos, mezclamos lo criollo con lo que te provoca para que cada mordida grite ¡Qué rico ser peruano!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-[#0033A0] mb-2">3. ¿Dónde pedir hamburguesa por delivery?</h3>
              <p className="text-gray-600">
                ¡Fácil! Pide por nuestra web, la app o llama al 01419-1919. Tu Bembos llega directo a tu puerta, ¡Como debe ser!
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
             <p className="text-gray-600 max-w-2xl mx-auto">
               Pide las mejores hamburguesas en Bembos: disfruta de nuestras clásicas, prueba sabores peruanos como la A lo Pobre, y aprovecha nuestras ofertas como A la Parrilla, combos y más, ¡Todo a un clic de distancia!
             </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
