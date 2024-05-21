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
        //   Food modal display
  return (
    <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
    <div className="bg-white w-full md:w-[46rem] max-w-lg h-auto rounded-lg m-4 p-4 relative overflow-auto">
        <div className="flex justify-end">
            <IoIosCloseCircleOutline
                className="text-2xl text-red-600 cursor-pointer"
                onClick={closeModal}
            />
        </div>
        <div className="text-center my-4">
            <h1 className="text-lg font-bold">{modalFood.name}</h1>
        </div>
        <div className="w-full flex justify-center mb-4">
            <img src={modalFood.image} className="w-full h-[200px] md:h-[300px] object-cover rounded-lg" alt="modal" />
        </div>
        <div className="mb-4">
            <h1 className="text-lg font-bold">Description:</h1>
            <p>{modalFood.description}</p>
        </div>
        <div className="mb-4">
            <h1 className="text-lg font-bold">Extras:</h1>
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
        </div>
        <div className="mb-4">
            <textarea className="w-full h-32 border-2 border-green-500 rounded-lg p-2" placeholder="Additional notes"></textarea>
        </div>
        <div className="flex justify-center">
            <button className="px-4 py-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg">Add To Cart</button>
        </div>
    </div>
</div>
  )
}

export default FoodModal