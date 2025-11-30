import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductService from '../services/productService';
import ComboService from '../services/comboService';

// Mapeo de categorías a tenant_ids del backend
const MENU_CATEGORIES = [
  { id: 'combos', name: 'Combos', icon: '🍔', tenantId: 'Combos', type: 'combo' },
  { id: 'hamburguesas', name: 'Hamburguesas', icon: '🍔', tenantId: 'Hamburguesa', type: 'product' },
  { id: 'bebidas', name: 'Bebidas', icon: '🥤', tenantId: 'Bebidas', type: 'product' },
  { id: 'extras', name: 'Extras', icon: '🍟', tenantId: 'Extras', type: 'product' },
  { id: 'postres', name: 'Postres', icon: '🍦', tenantId: 'Postres', type: 'product' },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('hamburguesas');
  const [activeSubFilter, setActiveSubFilter] = useState('todos');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Cargar productos cuando cambia la categoría
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const currentCategory = MENU_CATEGORIES.find(cat => cat.id === activeCategory);
        
        if (!currentCategory) {
          setProducts([]);
          return;
        }

        let data = [];
        
        if (currentCategory.type === 'combo') {
          // Cargar combos
          data = await ComboService.getCombosByTenant(currentCategory.tenantId);
          // Mapear datos de combo al formato esperado por ProductCard
          data = data.map(combo => ({
            id: combo.nombre,
            name: combo.nombre.replace(/_/g, ' ').toUpperCase(),
            description: combo.descripcion,
            price: combo.precio,
            stock: combo.stock,
            imageUrl: combo.imagen,
            category: activeCategory,
            tenantId: 'Combos',
            type: 'combo'
          }));
        } else {
          // Cargar productos
          data = await ProductService.getProductsByTenant(currentCategory.tenantId);
          // Mapear datos de producto al formato esperado por ProductCard
          data = data.map(product => ({
            id: product.nombre_producto,
            name: product.nombre_producto.replace(/_/g, ' ').toUpperCase(),
            description: product.descripcion,
            price: product.precio,
            stock: product.stock,
            imageUrl: product.imagen,
            category: activeCategory,
            tenantId: currentCategory.tenantId,
            type: 'product'
          }));
        }
        
        setProducts(data);
      } catch (err) {
        console.error('Error al cargar productos:', err);
        setError('Error al cargar los productos. Por favor, intenta nuevamente.');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [activeCategory]);

  const currentCategory = MENU_CATEGORIES.find(cat => cat.id === activeCategory);
  const productsToShow = products;

  // Subfiltros deshabilitados por ahora (se pueden implementar con filtrado en el frontend)
  const subFilters = [];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Yellow CTA Bar */}
      <div className="bg-[#FFD11A] py-3 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
          <span className="text-[#193058] font-semibold">¡Comienza tu pedido! Elige tu dirección</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Navegación de categorías con iconos */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setActiveSubFilter('todos');
                }}
                className={`flex flex-col items-center min-w-[100px] p-3 rounded-lg transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#0033A0] text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2 border-2 border-gray-200">
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <span className="text-xs font-semibold text-center leading-tight">
                  {category.name}
                </span>
                {activeCategory === category.id && (
                  <div className="mt-2 w-full h-1 bg-[#E31E24] rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Título de la sección */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900 font-display uppercase">
            {currentCategory?.name}
          </h1>
          <a href="#" className="text-[#0033A0] hover:underline font-semibold text-sm">
            Ver todo
          </a>
        </div>

        {/* Sub-filtros (si existen) */}
        {subFilters.length > 0 && (
          <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
            {subFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveSubFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                  activeSubFilter === filter.id
                    ? 'bg-[#0033A0] text-white'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#0033A0]'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0033A0]"></div>
            <p className="text-gray-600 mt-4">Cargando productos...</p>
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-red-600 text-lg">{error}</p>
            <button 
              onClick={() => setActiveCategory(activeCategory)}
              className="mt-4 bg-[#0033A0] text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors"
            >
              Reintentar
            </button>
          </div>
        )}

        {/* Grid de productos */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsToShow.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Si no hay productos */}
        {!loading && !error && productsToShow.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay productos disponibles en esta categoría</p>
          </div>
        )}

        {/* Preguntas frecuentes */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display text-center">
            Preguntas frecuentes menú Bembos
          </h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <details className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-700 hover:text-[#0033A0]">
                <span>1. ¿Cuál es la carta de hamburguesas?</span>
                <span className="transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                Puedes encontrar la carta de hamburguesas y el menú en la página:{' '}
                <a href="https://www.bembos.com.pe/menu" className="text-[#0033A0] hover:underline">
                  https://www.bembos.com.pe/menu
                </a>
                , donde encontrarás las tiendas más cercanas para que disfrutes rápido de tus hamburguesas favoritas.
              </p>
            </details>

            <details className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-700 hover:text-[#0033A0]">
                <span>2. ¿Qué hamburguesa trae el menú de Bembos?</span>
                <span className="transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                El menú de Bembos incluye la Hamburguesa Clásica con frejoles, timolate y mayonesa, y la Cheese que añade queso.
              </p>
            </details>

            <details className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-700 hover:text-[#0033A0]">
                <span>3. ¿Qué trae el menú de Bembos?</span>
                <span className="transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                El menú de Bembos cuenta con siete categorías principales: hamburguesas (desde clásicas hasta especializadas peruanas como la Patriota y "A lo Pobre"), pollo (Chicken Grill, Bembroster, Pollo Parrillero), combos (hamburguesa + papas + bebida), promos exclusivas (ofertas con descuento), complementos (papas, nuggets, aros de cebolla), menús completos (desayuno y almuerzo) y loncheritas (opciones para niños con juguetes).
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
