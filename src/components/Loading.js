import React from 'react';
import Lottie from 'lottie-react';
import myAnimation from '../assets/loading-api.json'

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh'
      }}>
      <Lottie
        animationData={myAnimation} // Replace animationData with your own Lottie animation data
        loop
        autoplay
        style={{ height: '200px', width: '200px' }} />
    </div>
  );
};

export default Loading;