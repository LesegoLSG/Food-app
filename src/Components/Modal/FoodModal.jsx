import React,{useState} from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const FoodModal = ({modalFood, closeModal}) => {

    const handleOnClose = (e) => {
        if (e.target.id === "container")
        closeModal();
    }

  // Split extras string into an array
  const extrasArray = modalFood.extras ? modalFood.extras.split(",") : [];

  // State to keep track of selected extras
  const [selectedExtras, setSelectedExtras] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
      const extra = e.target.value;
      // Check if extra is already selected
      if (selectedExtras.includes(extra)) {
          // If already selected, remove it from the list
          setSelectedExtras(selectedExtras.filter(item => item !== extra));
      } else {
          // If not selected, add it to the list if less than 3 selected
          if (selectedExtras.length < 3) {
              setSelectedExtras([...selectedExtras, extra]);
          }
      }
  };

  return (
    <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white w-full md:w-[46rem] h-auto rounded-lg m-4 p-2 ">
                <div className="flex justify-end items-center">
                <IoIosCloseCircleOutline
                className="text-2xl text-red-600 cursor-pointer"
                 onClick={() =>closeModal()}
                 />
                </div>
                <div className="flex justify-center items-center">
                    <h1 className="text-lg font-bold">{modalFood.name}</h1>
                </div>
                <div >
                    <img src={modalFood.image} className="w-full h-[300px] object-cover rounded-lg"/>
                </div>
                
                <div className="flex justify-start items-center">
                    <h1 className="text-lg font-bold">Description:</h1>
                </div>
                <div className="py-2">
                    <p>{modalFood.description}</p>
                </div>
                   {/* Display radio buttons for extras */}
                   {extrasArray.map((extra, index) => (
                     <div key={index} className="flex items-center">
                     <input 
                         type="checkbox" 
                         id={extra} 
                         name={extra} 
                         value={extra} 
                         checked={selectedExtras.includes(extra)}
                         onChange={handleCheckboxChange}
                         className="rounded-xl mr-2"
                     />
                     <label htmlFor={extra}>{extra}</label>
                 </div>
                ))}
                <div>
                    <textarea className="w-full h-32 border-4 border-green-500" ></textarea>
                </div>
                <div className="flex justify-center items-center">
                    <button className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Add To Cart</button>
                </div>
                
            </div>
    </div>
  )
}

export default FoodModal