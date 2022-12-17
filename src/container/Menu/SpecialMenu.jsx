import React from 'react';
import {images} from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="specialmenu">
    <div className="app__specialMenu-title">
      {/* <SubHeading title="Menu that fits your palatte"/> */}
      <h1 className="headtext__cormorant">Weekly Specials</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
      <img src={images.weekly} alt="menu img" />
      </div>

      {/* <div className="app__specialMenu-menu_img">
            <img src={images.weekly} alt="menu img" />
            <img src={images.weekly_2} alt="menu img" />
            
      </div> */}

      <div className="app__specialMenu-menu_cocktails flex__center">
      <img src={images.weekly_2} alt="menu img" />
      </div>
    </div>

    <div style={{marginTop: '15px'}}>
      <a className="button" href="https://www.facebook.com/people/El-Rancho-Foods-Supermarket/100083129807084/?sk=photos">View More</a>
    </div>
  </div>
);

export default SpecialMenu;

