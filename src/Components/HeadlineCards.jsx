import React from 'react'

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* Cards */}
        <div className="rounded-xl relative hover:scale-105 duration-300">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">Sun's out,BoGo's out</p>
                <p className="px-2">Through 8/76</p>
                <button className="m-1 border-green-600 text-black font-semibold bg-white hover:bg-green-600 hover:text-white absolute bottom-4">Order Now</button>
                </div>
            <img 
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
           
        </div>

         {/* Cards */}
         <div className="rounded-xl relative hover:scale-105 duration-300">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">Most ordered</p>
                <p className="px-2">dsdsd fgfgfgfg</p>
                <button className="m-1 border-green-600 text-black font-semibold bg-white hover:bg-green-600 hover:text-white absolute bottom-4">Order Now</button>
            </div>
            <img 
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
           
        </div>

         {/* Cards */}
         <div className="rounded-xl relative hover:scale-105 duration-300">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
                <p className="font-bold text-2xl px-2 pt-4">Sun's out,BoGo's out</p>
                <p className="px-2">Lesego Mhlongo</p>
                <button className="m-1 border-green-600 text-black font-semibold bg-white hover:bg-green-600 hover:text-white absolute bottom-4">Order Now</button>
            </div>
            <img 
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          
        </div>
    </div>
  )
}

export default HeadlineCards