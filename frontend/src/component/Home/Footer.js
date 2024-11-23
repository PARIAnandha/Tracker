import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Instagram, WhatsApp, Telegram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#19ae92',
        color: '#fff',
        py: { xs: 3, sm: 4 }, // Adjust padding for smaller screens
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, sm: 4 }} // Adjust spacing for mobile and larger screens
          justifyContent="center"
        >
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '18px', sm: '20px' }, // Adjust font size for mobile
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                fontSize: { xs: '14px', sm: '16px' }, // Adjust font size for mobile
              }}
            >
              Intercourse is a 100% Genuine Dating Site. Join us and meet interesting singles for meaningful connections.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '18px', sm: '20px' },
              }}
            >
              Quick Links
            </Typography>
            <Box>
              <Link
                href="/home"
                underline="none"
                sx={{
                  color: '#fff',
                  display: 'block',
                  mb: 1,
                  fontSize: { xs: '14px', sm: '16px' },
                }}
              >
                Home
              </Link>
              <Link
                href="/about"
                underline="none"
                sx={{
                  color: '#fff',
                  display: 'block',
                  mb: 1,
                  fontSize: { xs: '14px', sm: '16px' },
                }}
              >
                About
              </Link>
              <Link
                href="/contact"
                underline="none"
                sx={{
                  color: '#fff',
                  display: 'block',
                  mb: 1,
                  fontSize: { xs: '14px', sm: '16px' },
                }}
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                underline="none"
                sx={{
                  color: '#fff',
                  display: 'block',
                  mb: 1,
                  fontSize: { xs: '14px', sm: '16px' },
                }}
              >
                Privacy Policy
              </Link>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '18px', sm: '20px' },
              }}
            >
              Follow Us
            </Typography>
            <Box>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{
                  color: '#fff',
                  fontSize: { xs: '20px', sm: '24px' },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://wa.me/1234567890"
                target="_blank"
                sx={{
                  color: '#fff',
                  fontSize: { xs: '20px', sm: '24px' },
                }}
              >
                <WhatsApp />
              </IconButton>
              <IconButton
                href="https://t.me/yourTelegramHandle"
                target="_blank"
                sx={{
                  color: '#fff',
                  fontSize: { xs: '20px', sm: '24px' },
                }}
              >
                <Telegram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 4,
            fontSize: { xs: '12px', sm: '14px' }, // Adjust font size for footer text
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Intercourse. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
