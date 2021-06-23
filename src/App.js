import React,{useState} from 'react';
import './App.css';
import imgTop from './images/drawers.jpg'
import imgProfile from './images/avatar-michelle.jpg'
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'


function App() {
  const [clicked,setClicked] = useState(true)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div>
      <div className='mainContainer'>
        <div className='ImgContainer'><img src={imgTop} alt='drawer' /></div>
          <div className='middleContainer'>
            <div className='textContainer'>
              <h2>
                Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home
              </h2>

              <p>
                Ever been in a room and felt like something was missing? Perhaps 
                it felt slightly bare and uninviting. I’ve got some simple tips 
                to help you make any room feel complete.
              </p>
            </div>
          
          {clicked ? (
            <div className='profileContainer'>
              <img className='profilePic' src={imgProfile} alt='profile' />
                <div className='name'>
                  <h2>Michelle Appleton</h2>
                  <p className='date'>28 Jun 2020</p>
                </div>
            </div>
          ) : (
            <div className='mediaContainer'>
              <p>SHARE</p>
              <div className='iconContainer'>
                <img src={facebook} alt='facebook' />
                <img src={twitter} alt='twitter' />
                <img src={pinterest} alt='pinterest' />
              </div>
            </div> 
          )}
          {clicked ? null : (
            <div className='clickedDesktop'>
            <div className='triangle'></div>
            <div className='profileContainer'>
              <img className='profilePic' src={imgProfile} alt='profile' />
                <div className='name'>
                  <h2>Michelle Appleton</h2>
                  <p className='date'>28 Jun 2020</p>
                </div>
            </div>
            </div>
          )}
          {
            clicked ? (
            <svg className='iconShareUnclicked' xmlns="http://www.w3.org/2000/svg" width="15" height="13" onClick={handleClick}>
              <path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
            </svg>
            ) : (
            <svg className='iconShareClicked' xmlns="http://www.w3.org/2000/svg" width="15" height="13" onClick={handleClick}>
              <path fill="#fff" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
            </svg>
            )
          }
          
        </div>
          
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/azzykesuma">Azzy</a>.
      </div>
    </div>
  )
}


export default App;
