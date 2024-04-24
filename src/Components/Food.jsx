import React, { useState } from 'react';
import {data} from './Data/Data';
import FoodModal from './Modal/FoodModal';

const Food = () => {
    const [food,setFood] = useState(data);
    const [modalFood, setModalFood] = useState({});
    const [isModal, setIsModal] = useState(false);

    // Filter by type
    const filterType = (category) =>{
        setFood(data.filter((item) =>{
                return item.category === category;
        }));
    }

    //Filter by price
    const filterPrice = (minPrice, maxPrice) => {
        setFood(data.filter((item) => {
          const price = parseFloat(item.price);
          return price >= minPrice && price <= maxPrice;
        }));
      };

    const openModal = (foodItem) =>{
        setIsModal(true);
        setModalFood(foodItem);
    }

    const closeModal = () =>{
        setIsModal(false);
    }
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-green-600 font-bold text-4xl text-center">Delicious Food</h1>
    {/* Filter row */}
        <div className="flex flex-col lg:flex-row justify-between">
            {/* Filter type */}
            <div >
                <p className="font-bold text-gray-700">Filter Type</p>
                <div className="flex justify-between flex-wrap">
                    <button onClick={() => setFood(data)} className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">All</button>
                    <button onClick={() =>filterType("burger")} className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Burgers</button>
                    <button onClick={() =>filterType("pizza")} className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Pizza</button>
                    <button onClick={() =>filterType("salad")} className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Salads</button>
                    <button onClick={() =>filterType("chicken")} className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Chicken</button>
                </div>

            </div>
            {/* Filter Price */}
            <div>
                <p className="font-bold text-gray-700">Filter Price</p>
                <div className="flex justify-between min-w-[400px] md:max-w-[400px] w-full">
                    <button onClick={() =>filterPrice(0,50)} className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">0-50</button>
                    <button onClick={() =>filterPrice(51,100)} className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">51-100</button>
                    <button onClick={() =>filterPrice(101,200)} className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">101-200</button>
                    <button onClick={() =>filterPrice(201,Infinity)} className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">201-500</button>

                </div>
            </div>
        </div>
        {/* Display food */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {food.map((item,index)=>(
                    <div key={index} className="border shadow-2xl rounded-lg hover:scale-105 duration-300 cursor-pointer" onClick={() => openModal(item)}>
                        <img src={item.image} alt={item.name}
                        className="w-full h-[200px] object-cover rounded-t-lg"
                        />
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{item.name}</p>
                            <p>
                                <span className="bg-green-500 text-white p-1 rounded-full">R{item.price}</span>
                            </p>
                         </div>
                    </div>
            ))}

        </div>
        {isModal &&
        <FoodModal modalFood={modalFood} closeModal={closeModal}/>
        }
    </div>
  )
}

export default Food