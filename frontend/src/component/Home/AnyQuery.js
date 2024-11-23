import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const AnyQuery = () => {
  return (
    <Box
      sx={{
        padding: { xs: '1.5rem', md: '2rem' }, // Adjust padding for mobile and larger screens
        textAlign: 'center',
        backgroundColor: '#19ae92',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginTop: '20px',
        mx: { xs: '1rem', md: 'auto' }, // Add side margins on mobile
        maxWidth: { xs: '95%', md: '600px' }, // Limit width for smaller screens
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '16px', md: '18px' }, // Adjust font size for mobile
          lineHeight: '1.5',
          marginBottom: '1.5rem',
          color: '#333',
        }}
      >
        Sign up now to start your journey towards finding meaningful connections
        on Intercourse. Whether you're looking for love, friendship, or
        companionship, we're here to support you every step of the way.
      </Typography>
      <Button
        sx={{
          borderRadius: '0px 25px 0px 25px', // Rounded corners with the specified radius
          textAlign: 'center',
          color: '#19ae92', // Text color
          backgroundColor: 'white', // Background color
          border: '0px solid #fff', // No border
          fontSize: { xs: '12px', md: '14px' }, // Adjust font size for mobile
          fontWeight: 600, // Font weight for the button text
          padding: { xs: '10px 20px', md: '15px 30px' }, // Adjust padding for mobile
          transition: '.5s ease', // Smooth transition for hover effects
          '&:hover': {
            backgroundColor: '#f5f5f5', // Change background color on hover
          },
        }}
      >
        Any Query
      </Button>
    </Box>
  );
};

export default AnyQuery;
