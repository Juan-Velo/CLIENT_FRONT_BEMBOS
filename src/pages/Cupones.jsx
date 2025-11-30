import React, { useState } from 'react';
import { Ticket, Tag, Gift } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const CUPONES_DATA = [
  {
    id: 'cupon1',
    code: 'YAPE',
    name: 'Familiar Yape',
    description: 'Con el código yape, por S/39.90 llévate 4 clásicas regulares y 4 papas regulares.',
    price: 81.20,
    originalPrice: 39.90,
    discount: null,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    badge: 'YAPE',
    category: 'cupones'
  },
  {
    id: 'cupon2',
    code: 'YAPE',
    name: 'Yape Dúo',
    description: 'Con el código yape, por S/20.90 llévate 1 clásica regular, 1 cheese regular y 2 papas regulares',
    price: 43.60,
    originalPrice: 20.90,
    discount: null,
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400',
    badge: 'YAPE',
    category: 'cupones'
  },
  {
    id: 'cupon3',
    code: 'YAPE',
    name: 'Yape Queso Tocino',
    description: 'Con el código yape, por S/18.90 llévate 1 queso tocino mediana, 1 papa regular y 1 gaseosa',
    price: 28.80,
    originalPrice: 18.90,
    discount: null,
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
    badge: 'YAPE',
    category: 'cupones'
  },
  {
    id: 'cupon4',
    code: 'ENTEL',
    name: 'Menú Tumbay Yape',
    description: 'Con el código yape, por S/15.90 llévate 1 menú Tumbay',
    price: 18.90,
    originalPrice: 15.90,
    discount: null,
    imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400',
    badge: 'ENTEL',
    category: 'cupones'
  },
  {
    id: 'cupon5',
    code: 'ENTEL',
    name: 'Entel 2x1 Parrilleras',
    description: '2 Parrilleras medianas, 2 papas medianas a S/30.80',
    price: 61.60,
    originalPrice: 30.80,
    discount: null,
    imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400',
    badge: 'ENTEL',
    category: 'cupones'
  },
  {
    id: 'cupon6',
    code: 'ENTEL',
    name: 'Entel 2x1 Royal',
    description: '2 Royal medianas, 2 papas',
    price: 0,
    originalPrice: 0,
    discount: null,
    imageUrl: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400',
    badge: 'ENTEL',
    category: 'cupones'
  },
  {
    id: 'cupon7',
    code: 'ENTEL',
    name: 'Entel 2x1 Carretillera',
    description: '2 Carretilleras medianas, 2 Papas',
    price: 0,
    originalPrice: 0,
    discount: null,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400',
    badge: 'ENTEL',
    category: 'cupones'
  }
];

const Cupones = () => {
  const [sortBy, setSortBy] = useState('relevantes');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0033A0] to-[#0055D4] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Ticket size={48} />
            <h1 className="text-4xl md:text-5xl font-bold font-display">
              ¿TIENES CUPONES?
            </h1>
          </div>
          <div className="max-w-2xl mx-auto bg-[#E31E24] rounded-full py-4 px-8 text-center">
            <p className="text-2xl font-bold">CANJÉALOS AQUÍ</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Ordenar por */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Cupones disponibles</h2>
          <div className="flex items-center gap-3">
            <label className="text-sm font-semibold text-gray-700">Ordenar por</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent"
            >
              <option value="relevantes">Más relevantes</option>
              <option value="precio-asc">Precio: Menor a Mayor</option>
              <option value="precio-desc">Precio: Mayor a Menor</option>
              <option value="descuento">Mayor Descuento</option>
            </select>
          </div>
        </div>

        {/* Grid de cupones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CUPONES_DATA.map((cupon) => (
            <div key={cupon.id} className="relative">
              {/* Badge */}
              {cupon.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-[#0033A0] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Tag size={14} />
                    {cupon.badge}
                  </div>
                </div>
              )}
              <ProductCard product={cupon} />
            </div>
          ))}
        </div>

        {/* Información sobre cupones */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Gift className="mx-auto mb-4 text-[#0033A0]" size={64} />
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                ¿Cómo usar tus cupones?
              </h2>
              <p className="text-gray-600 text-lg">
                Es muy fácil disfrutar de nuestras promociones exclusivas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Encuentra tu cupón</h3>
                <p className="text-gray-600 text-sm">
                  Busca el cupón que más te guste en esta página
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Agrega al carrito</h3>
                <p className="text-gray-600 text-sm">
                  Haz clic en "Agregar" y el cupón se aplicará automáticamente
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Disfruta tu pedido</h3>
                <p className="text-gray-600 text-sm">
                  Completa tu orden y recibe tu pedido con el descuento aplicado
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#FFF3CD] rounded-lg border-l-4 border-[#FFB500]">
              <h4 className="font-bold text-gray-900 mb-2">⚠️ Importante:</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Los cupones son válidos solo para delivery y recojo en tienda</li>
                <li>No acumulables con otras promociones</li>
                <li>Sujeto a disponibilidad de stock</li>
                <li>Consulta términos y condiciones de cada cupón</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Preguntas frecuentes */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display text-center">
            Preguntas frecuentes sobre cupones
          </h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <details className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-700 hover:text-[#0033A0]">
                <span>¿Puedo usar varios cupones en un mismo pedido?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                No, solo puedes usar un cupón por pedido. Los cupones no son acumulables con otras promociones.
              </p>
            </details>

            <details className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-700 hover:text-[#0033A0]">
                <span>¿Los cupones tienen fecha de vencimiento?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                Sí, cada cupón tiene su propia fecha de vencimiento. Puedes ver los detalles en la descripción de cada cupón.
              </p>
            </details>

            <details className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-700 hover:text-[#0033A0]">
                <span>¿Dónde consigo más cupones?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                Suscríbete a nuestro newsletter, síguenos en redes sociales y revisa las promociones de nuestros aliados como Yape, Entel y otros.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cupones;
