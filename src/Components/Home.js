import React from "react";
import Git from '../Icons/Icon.png';
import Slack from '../Icons/slack.png';
import Header from './Header';
import { Link} from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

function Home() {
 return (
   <div className="App">
     
       <Header />
       <WriteUps />
       <Buttons />
       <Social />
       {/* <Footer /> */}
   </div>
 );
}

function WriteUps(){
    return(
      <div>
      <h2 id='twitter'>BasCee</h2>
      <h2 id='slack' hidden>Aboya</h2>
      </div>
    )
  }
  function Buttons(){
    // let navigate = useNavigate();
    return(
          <div className='link-buttons'>
             <a id='btn__zuri' href="https://training.zuri.team/" target="_blank" rel="noopener noreferrer">
            Zuri Team
          </a>
          <a id='books' href="http://books.zuri.team" target="_blank" rel="noopener noreferrer">
          Zuri Books
          </a>
          <a  id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=UdoB_Bassey" target="_blank" rel="noopener noreferrer">
          Python Books
          </a>
          <a id='pitch' href="https://background.zuri.team" target="_blank" rel="noopener noreferrer">
          Background Check For Coders
          </a>
          <a id='book__design' href="https://books.zuri.team/design-rules" target="_blank" rel="noopener noreferrer">
          Design Books
          </a>
          <Link to="/contact" id='contact'  target="_blank" rel="noopener noreferrer">
          Contact Us
          </Link>
  
  
          </div>
    )
  }
  function Social(){
    return(
        <div className='social'>
           <img src= {Slack} id="slack__img" alt="profile Pic" />
            <img src= {Git} id="git" alt="profile Pic" />
        </div>
    )
  }


export default Home;