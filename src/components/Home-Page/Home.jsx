import React from 'react';
import TopImgSlider from './Hero-section/ImgSlider/TopImgSlider'
import Footer from './Footer/Footer';
import Industries from '../IndustriesWeServe/Industries';
import '../../index.css';
import WhyChooseUs from './Whychooseus';

const Home = () => {
  return (
    <div className='bgClr'>
      <TopImgSlider />
      <Industries/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  )
}

export default Home
