import React from 'react';
import {slides} from '../Home-Page/Hero-section/ImgSlider/SliderData.json'
import TopImgSlider from './Hero-section/ImgSlider/TopImgSlider'
import Footer from './Footer/Footer';
import '../../index.css';


const Home = () => {
  return (
    <div className='bgClr'>
      <TopImgSlider data={slides} />
      <Footer/>
    </div>
  )
}

export default Home
