import React from 'react';
import './Android.css'; // Import the CSS file for styling

// Import the dummy image
import dummyImage from '../../../assets/ios.png';

function Ios() {
  return (
    <div className='android-container'>
      <img src={dummyImage} alt='Dummy' className='android-image' />

      <div className='android-content'>
        <h1 className='android-title'>Ios Development</h1>
        <p className='android-description'>
          Get guaranteed scalability with expertise in everything related to Android app development.
          Our team of Android developers will deliver high-performance, user-centric, and reliable
          custom Android apps that work seamlessly across Android devices.
        </p>
      </div>
    </div>
  );
}

export default Ios;
