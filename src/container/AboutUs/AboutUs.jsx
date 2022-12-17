import React from 'react';
import spoon from "../../assets/spoon.png";
import knife from "../../assets/knife.png";

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Placeat maxime perferendis culpa consectetur. Autem adipisci cum sequi, 
          id iusto doloribus temporibus quia voluptas molestias aliquam. Tempora aliquam quia cumque officiis?</p>
          <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Placeat maxime perferendis culpa consectetur. Autem adipisci cum sequi, 
          id iusto doloribus temporibus quia voluptas molestias aliquam. Tempora aliquam quia cumque officiis?</p>
          <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
