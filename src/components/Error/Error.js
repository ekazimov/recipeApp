import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Error = () => {
  return (
    <AnimatedLottieView
      source={require('../../assets/loading.json')}
      autoPlay
    />
  );
};

export default Error;
