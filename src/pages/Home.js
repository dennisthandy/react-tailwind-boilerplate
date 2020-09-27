import React from "react";
import logo from "../logo.svg";
import tailwind from "../tailwindcss.svg";

export const Home = () => {
 return (
  <div className="">
   <div className="flex justify-center items-center">
    <img src={logo} alt="logo" className="w-1/4" />
    <img src={tailwind} alt="logo" className="w-1/6" />
   </div>
   <div className="flex flex-col justfy-center items-center">
    <p>
     Edit <code>src/App.js</code> and save to reload.
    </p>
    <div className="link mt-5">
     <a
      className="App-link p-2 bg-teal-300 rounded mr-5 hover:bg-teal-400 hover:text-white"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
     >
      Learn React
     </a>
     <a
      className="App-link p-2 bg-teal-400 rounded hover:bg-teal-600 hover:text-white"
      href="https://tailwindcss.com"
      target="_blank"
      rel="noopener noreferrer"
     >
      Learn Tailwind
     </a>
    </div>
   </div>
  </div>
 );
};
