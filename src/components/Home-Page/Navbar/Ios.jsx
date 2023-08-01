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
        With our iOS application development services, we take care of your project from the outset to create a seamless app built with user experience, top-level performance, and scalability in mind.


        </p>
      </div>
    </div>
  );
}

export default Ios;
