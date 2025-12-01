import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Semana Bravaza',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
    link: '/promociones'
  },
  {
    id: 2,
    name: 'Promos Exclusivas',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80',
    link: '/promociones'
  },
  {
    id: 3,
    name: 'Combos',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80',
    link: '/menu'
  },
  {
    id: 4,
    name: 'Hamburguesas',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80',
    link: '/menu'
  },
  {
    id: 5,
    name: 'Bembos Menús',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80',
    link: '/menu'
  },
  {
    id: 6,
    name: 'Pollo',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80',
    link: '/menu'
  },
  {
    id: 7,
    name: 'Loncheritas',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=80',
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
