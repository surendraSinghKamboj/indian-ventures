import React from 'react';
import './Android.css'; // Import the CSS file for styling

// Import the dummy image
import dummyImage from '../../../assets/ios.png';

function Webapp() {
  return (
    <div className='android-container'>
      <img src={dummyImage} alt='Dummy' className='android-image' />

      <div className='android-content'>
        <h1 className='android-title'>Webapp Development</h1>
        <p className='android-description'>
        Build industry-grade mobile apps that work seamlessly with various mobile operating systems. Our expertise and technology provide a good balance between appealing, single code-based development efficiency and the performance and feel of a native application, ensuring faster time-to-market.
        </p>
      </div>
    </div>
  );
}

export default Webapp;
