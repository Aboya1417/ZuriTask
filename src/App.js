 import Pic from './Aboya.jpg';
 import vector from './logo.png';
//  import text from './Footer_text.png';
 import I4G from './I4G.png';
import Git from './Icon.png';
import Slack from './slack.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Header />
        <WriteUps />
        <Buttons />
        <Social />
        <Footer />
    </div>
  );
}

function Header(){
  return(
      <header>
        <nav>
          <img src= {Pic} id="profile__img" alt="profile Pic" width= "90px"/>
         
        </nav>
      </header>
  )
}
function Social(){
  return(
      <div className='social'>
          <img src= {Git} id="git" alt="profile Pic" />
          <img src= {Slack} id="slack__img" alt="profile Pic" />
      </div>
  )
}

function Footer(){
  return(
      <footer>
        
        <div className='footer-image'><img src= {vector}  alt="profile Pic" /></div>
        {/* <div><img src= {text}  alt="profile Pic" /></div> */}
        <span>HNG Internship 9 Frontend Task</span>
        <div className='footer-image'><img src= {I4G}  alt="profile Pic" /></div>

      </footer>
  )
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
  return(
        <div className='link-buttons'>
           <a id='btn__zuri' href="https://training.zuri.team/" target="_blank" rel="noreferrer">
          Zuri Team
        </a>
        <a id='books' href="http://books.zuri.team" target="_blank" rel="noreferrer">
        Zuri Books
        </a>
        <a id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=UdoB_Bassey" target="_blank" rel="noreferrer">
        Python Books
        </a>
        <a id='pitch' href="https://background.zuri.team" target="_blank" rel="noreferrer">
        Background Check For Coders
        </a>
        <a id='book__design' href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer">
        Design Books
        </a>

        </div>
  )
}

export default App;
