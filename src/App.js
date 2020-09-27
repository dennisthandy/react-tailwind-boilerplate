import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { Pages } from "./Pages";

function App() {
 return (
  <Router>
   <div className="bg-gray-600 min-h-screen">
    <nav className="mb-5">
     <ul className="flex justify-center items-center gap-5">
      <li>
       <Link to="/" className="hover:text-teal-400">
        Home
       </Link>
      </li>
      <li>
       <Link to="/about" className="hover:text-teal-400">
        About
       </Link>
      </li>
     </ul>
    </nav>
    <Pages />
   </div>
  </Router>
 );
}

export default App;
