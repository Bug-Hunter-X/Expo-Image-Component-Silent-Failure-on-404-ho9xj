import React from 'react';
import { Image } from 'expo-image';

const MyImage = () => {
  const handleError = (error) => {
    console.error('Error loading image:', error);
    // Optionally, display a placeholder image here
  };

  return (
    <Image
      source={{ uri: 'https://invalid-image-url.com/image.jpg' }}
      style={{ width: 200, height: 200 }}
      onError={handleError}
    />
  );
};

export default MyImage;