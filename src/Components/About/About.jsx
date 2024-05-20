import React from 'react';
import AboutImage from '../../Assets/AboutImage.png';
import './About.css';


const About = () => {

  // About us with image and text along with a button
  return (
    <div className="min-h-screen flex flex-col  justify-center items-center md:px-32 px-5">
        <div>
            <h1 className="text-green-600 font-bold text-4xl text-center">Get to Know Us</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center ">
          {/* Rotating image using css */}
        <img src={AboutImage} alt="img" className="rotate"/> 
        <div className="mt-10">
            <h1 className="text-center text-lg font-semibold md:text-start mb-2" >Why <span className="text-green-600">Choose Us</span> ?</h1>
       
        <p>
        Welcome to Less-Ego MealDash, where we bring your favorite local restaurant meals straight to your door. 
        We believe in making great food accessible anytime, anywhere, with a seamless ordering system and dedicated 
        delivery team. Whether you're craving a gourmet dinner or a quick snack, we've got you covered.
        </p>
        <br/>
        <p>
        At Less-Ego MealDash, we prioritize quality and customer satisfaction. Our partner restaurants
         offer a variety of cuisines prepared with fresh ingredients and high hygiene standards. We pride 
         ourselves on exceptional service, ensuring prompt and careful delivery. Join us to enjoy your favorite
          flavors whenever you want them.
        </p>
        <div className="flex justify-center md:justify-start mt-10">
            <button className=" border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Learn More</button>
        </div>
        
        </div>
        </div>
    </div>
  )
}

export default About