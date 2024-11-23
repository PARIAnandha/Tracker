import React, { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Box,
  Button,
  Grid,
  InputAdornment,
  Snackbar,
  Alert,
} from '@mui/material';
import { Person, Phone, LocationOn } from '@mui/icons-material';
import contactImage from '../Assets/image3.jpg'; // Replace with your image path
import {contactpostData} from '../../api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactpostData(formData);
      setSnackbar({
        open: true,
        message: 'Contact submitted successfully!',
        severity: 'success',
      });
      setFormData({ name: '', phone: '', location: '' });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error submitting contact. Please try again.',
        severity: 'error',
      });
    }
  };

  // Close snackbar
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        py: 4,
        px: 3,
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* Left Side: Form */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 3,
              textAlign: { xs: 'center', md: 'left' },
              color: '#19ae92',
              fontWeight: 'bold',
            }}
          >
            Contact Us
          </Typography>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{
              gap: 3,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                borderRadius: '0px 25px 0px 25px',
                color: '#fff',
                backgroundColor: '#19ae92',
                fontSize: '14px',
                padding: '10px 30px',
                margin: '3px 0',
                transition: '.5s ease',
                '&:hover': {
                  backgroundColor: '#17a77e',
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>

        {/* Right Side: Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={contactImage}
            alt="Contact Us"
            sx={{
              width: '100%',
              height: { xs: '200px', md: 'auto' },
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
          />
        </Grid>
      </Grid>

      {/* Snackbar Popup */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
