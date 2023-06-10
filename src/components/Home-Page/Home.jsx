import React from 'react';
import {slides} from '../Home-Page/Hero-section/ImgSlider/SliderData.json'
import TopImgSlider from './Hero-section/ImgSlider/TopImgSlider'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div>
      <TopImgSlider data={slides} />
      <Footer/>
    </div>
  )
}

export default Home
