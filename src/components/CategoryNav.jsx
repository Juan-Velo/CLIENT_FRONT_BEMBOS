import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Semana Bravaza',
    image: 'https://www.bembos.com.pe/media/wysiwyg/bembos/semana-bravaza.png',
    link: '/promociones'
  },
  {
    id: 2,
    name: 'Promos Exclusivas',
    image: 'https://www.bembos.com.pe/media/catalog/category/promos-exclusivas.png',
    link: '/promociones'
  },
  {
    id: 3,
    name: 'Combos',
    image: 'https://www.bembos.com.pe/media/catalog/category/combos.png',
    link: '/menu'
  },
  {
    id: 4,
    name: 'Hamburguesas',
    image: 'https://www.bembos.com.pe/media/catalog/category/hamburguesas.png',
    link: '/menu'
  },
  {
    id: 5,
    name: 'Bembos Menús',
    image: 'https://www.bembos.com.pe/media/catalog/category/bembos-menus.png',
    link: '/menu'
  },
  {
    id: 6,
    name: 'Pollo',
    image: 'https://www.bembos.com.pe/media/catalog/category/pollo.png',
    link: '/menu'
  },
  {
    id: 7,
    name: 'Loncheritas',
    image: 'https://www.bembos.com.pe/media/catalog/category/loncheritas.png',
    link: '/menu'
  }
];

const CategoryNav = () => {
  return (
    <div className="bg-white py-6 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="flex flex-col items-center min-w-[120px] group"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#0033A0] transition-all mb-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/80x80?text=' + category.name.charAt(0);
                  }}
                />
              </div>
              <span className="text-xs font-semibold text-gray-800 text-center group-hover:text-[#0033A0] transition-colors">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
