import './css/App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer'
import DieuHuongURL from './component/DieuHuongURL';
import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
function App() {

  
  return (
    <Router>
      <div className="App">
        <Navbar/> 
          <DieuHuongURL/> 
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
