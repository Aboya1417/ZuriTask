import React from "react";
 import vector from './Icons/logo.png';
 import I4G from './Icons/I4G.png';
 import Home from './Components/Home'
//import Git from './Icons/Icon.png';
// import Slack from './Icons/slack.png';
 import Contact from './Components/Contact';
 import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    // <div className="App">
      
    //     <Header />
    //     <WriteUps />
    //     <Buttons />
    //     <Social />
    //     <Footer />
    // </div>
  );
}


function Footer(){
  return(
      <footer>
        <div className='footer-image'><img src= {vector}  alt="profile Pic" /></div>
        <span>HNG Internship 9 Frontend Task</span>
        <div className='footer-image'><img src= {I4G}  alt="profile Pic" /></div>

      </footer>
  )
}


export default App;
