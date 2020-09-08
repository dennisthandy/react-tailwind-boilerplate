import React from "react";
import logo from "./logo.svg";
import tailwind from "./tailwindcss.svg";

function App() {
 return (
  <div className="App flex items-center justify-center min-h-screen bg-gray-600">
   <header className="App-header flex items-center justify-center flex-col">
    <img src={logo} className="App-logo" alt="logo" />
    <img src={tailwind} className="w-1/2" alt="logo" />
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
   </header>
  </div>
 );
}

export default App;
