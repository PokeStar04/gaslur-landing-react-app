

import "./style/reset.css";
import "./style/general-style.css";
import "./style/App.css";
import React from "react";
import { BrowserRouter as Router, Link, Route , Routes} from 'react-router-dom';
import Homepage from "./pages/homepage";



function App() {
  return (
    <Router>

   
   <div className="wrapper ">

    {/* Barre de navigation  */}
    <header className="flex poppins space-between gray medieum fs-12 align-center">
      
      
      <div className="gradient-1 fs-32 bold">
        <Link to='/' > GASLUR  </Link>
      </div>
  
      <nav >
        <ul className="flex flex-gap  ">
        <li className="bold gradient-1">HOME</li>
        <li>MY PROFILE</li>
        <li>ACTIVITY</li>
        <li>HOW IT WORKS</li>
        </ul>
       
      </nav>
      <div className="flex flex-gap align-center">
        <div className="btn-create ">CREATE</div>
        <div>SIGN IN</div>
      </div>
    </header>

   
    {<Homepage/>}
    <Routes>
      <Route path="home" element={<Homepage/>}/>
  </Routes>
</div>  


 </Router>
  );
}

export default App;
