import React from 'react';
import { FaYelp } from 'react-icons/fa';
import{FiFacebook } from 'react-icons/fi';
import {BiCopyright} from "react-icons/bi";
import {FooterOverlay, Newsletter} from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">211 1ST ST, Gilroy, CA, United States, California</p>
        <p className="p__opensans">(669) 239-0857</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.el_rancho_logo} alt="footer_logo" />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/people/El-Rancho-Foods-Supermarket/100083129807084/"><FiFacebook/></a>
          <a href="https://www.yelp.com/biz/el-rancho-foods-gilroy"><FaYelp/></a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Store Hours</h1>
        <p className="p__opensans">Monday-Sunday:</p>
        <p className="p__opensans">07:00 Am - 10:00 Pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans"><BiCopyright/> 2023 El Rancho Foods Supermarket. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
