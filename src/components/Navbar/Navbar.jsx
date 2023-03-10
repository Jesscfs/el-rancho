import React,{useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import{FiFacebook} from 'react-icons/fi';
import {FaYelp} from 'react-icons/fa';
import rancho_logo from "../../assets/rancho_logo.jpg";
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return(
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={rancho_logo} alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#specialmenu">Weekly AD</a></li>
      <li className="p__opensans"><a href="#location">Location / Contact</a></li>
    </ul>
     <div className="app__navbar-login "> 
      
      {/* <a href="#login" className="p__opensans">Log In / Register</a> */}
      <a href="https://www.facebook.com/people/El-Rancho-Foods-Supermarket/100083129807084/" className='p__opensans'><FiFacebook /></a>
      
      <div />
      <a href="https://www.yelp.com/biz/el-rancho-foods-gilroy" className='p__opensans'><FaYelp/></a>
    </div>

    {/* for small screens */ }
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>setToggleMenu(true)}/>


      {toggleMenu && (     /* if true then render */
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)} />
        <ul className="app__navbar-smallscreen_links">
          <li className="p__opensans"><a href="#home" onClick={()=>setToggleMenu(false)}>Home</a></li>
          <li className="p__opensans"><a href="#specialmenu" onClick={()=>setToggleMenu(false)}>Weekly AD</a></li>
          <li className="p__opensans"><a href="#location" onClick={()=>setToggleMenu(false)}>Location / Contact</a></li>
        </ul>
        </div> 
      )}
    </div>
  </nav>
  )
};

export default Navbar;




// import React from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { MdOutlineRestaurantMenu } from 'react-icons/md';
// import images from '../../constants/images';
// import './Navbar.css';

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = React.useState(false);
//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={images.gericht} alt="app__logo" />
//       </div>
//       <ul className="app__navbar-links">
//         <li className="p__opensans"><a href="#home">Home</a></li>
//         <li className="p__opensans"><a href="#about">About</a></li>
//         <li className="p__opensans"><a href="#menu">Menu</a></li>
//         <li className="p__opensans"><a href="#awards">Awards</a></li>
//         <li className="p__opensans"><a href="#contact">Contact</a></li>
//       </ul>
//       <div className="app__navbar-login">
//         <a href="#login" className="p__opensans">Log In / Registration</a>
//         <div />
//         <a href="/" className="p__opensans">Book Table</a>
//       </div>
//       <div className="app__navbar-smallscreen">
//         <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
//         {toggleMenu && (
//           <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
//             <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
//             <ul className="app__navbar-smallscreen_links">
//               <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
//               <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
//               <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
//               <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
//               <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
