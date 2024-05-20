import React from 'react';
import { categories } from './Data/Data';

const Category = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-green-600 font-bold text-4xl text-center">Eats Express: Your Culinary Companion</h1>
        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            {categories.map((item,index) =>(
                <div key={index} className="relative bg-gray-100 rounded-lg p-4 w-120 h-60">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg opacity-80" />
                <h2 className="absolute inset-0 flex items-center justify-center text-black font-bold sm:text-xl mx-6">{item.name}</h2>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Category