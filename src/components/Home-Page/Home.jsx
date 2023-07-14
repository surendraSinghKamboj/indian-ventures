import React from 'react';
import TopImgSlider from './Hero-section/ImgSlider/TopImgSlider'
import Footer from './Footer/Footer';
import Industries from '../IndustriesWeServe/Industries';
import '../../index.css';


const Home = () => {
  return (
    <div className='bgClr'>
      <TopImgSlider />
      <Industries/>
      <Footer/>
    </div>
  )
}

export default Home
