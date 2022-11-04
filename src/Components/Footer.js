import React from "react";
import vector from '../Icons/logo.png';
import I4G from '../Icons/I4G.png';

function Footer(){
    return(
        <footer>
          <div className='footer-image'><img src= {vector}  alt="profile Pic" /></div>
          <span>HNG Internship 9 Frontend Task</span>
          <div className='footer-image'><img src= {I4G}  alt="profile Pic" /></div>
  
        </footer>
    )
  }
  export default Footer;