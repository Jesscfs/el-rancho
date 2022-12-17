import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FaYelp } from 'react-icons/fa';
import {SubHeading} from '../../components';
import rancho_store_1 from "../../assets/rancho_store_1.webp";
import rancho_store_2 from "../../assets/rancho_store_2.webp";
import rancho_store_3 from "../../assets/rancho_store_3.jpg";
import rancho_store_4 from "../../assets/rancho_store_4.jpg";
import './Gallery.css';

const galleryImages = [rancho_store_3, rancho_store_4, rancho_store_1, rancho_store_2,];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll=(direction) =>{
    const{current} = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -=300;
    }else{
      current.scrollLeft += 300;
    }
  }

  return(
  <div className="app__gallery flex__center" id="location">
    <div className="app__gallery-content">
      <SubHeading title="Contact"/>
      {/* <h1 className="headtext__cormorant">Photo Gallery</h1> */}
      <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className='p__opensans'>211 1ST ST, Gilroy, CA, United States, California</p>
        <p className="p__opensans">(669) 239-0857</p>
        <p className='p__cormorant' style={{color: "#DCCA87", margin: '2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>Monday - Sunday: 07:00 Am - 10:00 Pm</p>
      </div>
    </div>
    
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {galleryImages.map((image,index)=>(
          <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery" />
            <a href = "https://www.yelp.com/biz/el-rancho-foods-gilroy" className='gallery__image-icon'>
            <FaYelp />
            </a>
          </div>
        ))}
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/>
      </div>
    </div>
  </div>
  );
}
export default Gallery;
