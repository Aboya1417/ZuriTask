import React from "react";
import Pic from '../Icons/Aboya.jpg';
import avatar from '../Icons/_Avatar.png';

function Header(){
    return(
            <div>
            <img src= {Pic} id="profile__img" alt="profile Pic" width= "90px"/>
            <img src= {avatar} id="avatar__img" alt="profile Pic" />
            </div>
           
  
    )
  }

  export default Header;