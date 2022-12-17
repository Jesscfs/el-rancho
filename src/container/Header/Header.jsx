import React from 'react';
import {images} from "../../constants";
import './Header.css';


const Header = () => (
  <div className="app__header app__bg app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/* <SubHeading title="Chase the new flavor"/> */}
      <h1 className="app__header-h1">Welcome To<br/> 
                                    El Rancho Foods</h1>
      <p className="app__header-p" style={{margin:"2rem 0",color:"darkgreen"}}>Local Gilroy Mexican style supermarket with fresh meat, produce and grocery. Bakery and restaurant.</p>
      {/* <button type='button' className="custom__button">Explore Menu</button> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.el_rancho_logo} alt="header img" />
    </div>
  </div>
);

export default Header;
