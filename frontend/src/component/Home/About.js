import React from 'react';
import { Typography, Container, Box, Button, Grid } from '@mui/material';
import image3 from '../Assets/image3.jpg'; // Import the image correctly

const About = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        p: 2,
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          flexDirection: { xs: 'column-reverse', md: 'row' }, // Stack on mobile, row on desktop
        }}
      >
        {/* Left Side: Content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: '#19ae92',
              textAlign: { xs: 'center', md: 'left' }, // Center text on mobile
            }}
          >
            About
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: '#666',
              lineHeight: 1.8,
              textAlign: { xs: 'justify', md: 'left' }, // Adjust alignment for mobile and desktop
            }}
          >
            Intercourse is a 100% Genuine Dating Site. Meet thousands of fun,
            attractive women. No gimmicks, no tricks. Join our site and meet single &amp;
            interesting women looking to meet quality singles for fun and dating worldwide.
            Intercourse offers matchmaking services that include recommendations and
            ideas based on the requirements of the users. The best way to meet beautiful
            singles Women for dating from all over the world.
          </Typography>

          {/* Button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' }, // Center button on mobile
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: '0px 25px 0px 25px',
                color: '#fff',
                backgroundColor: '#19ae92',
                fontSize: '14px',
                fontWeight: 600,
                padding: '15px 30px',
                transition: '.5s ease',
                '&:hover': {
                  backgroundColor: '#17a77e',
                },
              }}
            >
              Read More
            </Button>
          </Box>
        </Grid>

        {/* Right Side: Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={image3}
            alt="About Us"
            sx={{
              width: '100%',
              height: { xs: '250px', md: 'auto' }, // Set height for smaller screens
              borderRadius: '15px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              objectFit: 'cover', // Ensure image looks good when resized
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
