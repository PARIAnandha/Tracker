import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image3.jpg';
import Header from '../Home/Header';
import Home from '../Home/Home';

const BackGroundModel = () => {
  // Define the images
  const backgroundImages = [ image2, image3];
  
  // Use state to track the current background image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Change the background image every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 2 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  },[]);

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`, // Use the current image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <Header />
        <Home />
    </Box>
  );
};

export default BackGroundModel;
