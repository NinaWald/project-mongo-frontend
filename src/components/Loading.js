import React from 'react';
import Lottie from 'lottie-react';
import myAnimation from '../assets/loading-api.json'

const Loading = () => {
  return (
    <Lottie
      animationData={myAnimation} // Replace animationData with your own Lottie animation data
      loop
      autoplay
      style={{ height: '100px', width: '100px' }} />
  );
};

export default Loading;