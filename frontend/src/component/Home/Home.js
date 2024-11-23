import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  MenuItem,
  IconButton,
  InputAdornment,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WcIcon from '@mui/icons-material/Wc';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import ShieldIcon from '@mui/icons-material/Shield';
import { postData } from '../../api';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    gender: '',
    location: '',
  });

  const handleSuccessClose = () => {
    setOpenSuccessDialog(false);
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await postData(formData);
      setOpenSuccessDialog(true);
      setOpen(false);
      setFormData({ name: '', number: '', gender: '', location: '' });
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 4 }}>
      <Box sx={{ color: 'white' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Dating for Grown Ups Make a
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
          Real Connection
        </Typography>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            borderRadius: '0px 25px 0px 25px',
            color: '#fff',
            backgroundColor: '#19ae92',
            fontSize: '14px',
            padding: '20px 30px',
            margin: '3px 0 0 15px',
            '&:hover': { backgroundColor: '#17a77e' },
          }}
        >
          Join Us Today
        </Button>
      </Box>

      {/* Join Us Form Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', backgroundColor: '#f5f5f5', fontWeight: 'bold', color: '#19ae92', borderBottom: '2px solid #19ae92' }}>
          <Typography variant="h6">Welcome Intercourse</Typography>
          <IconButton onClick={handleClose} sx={{ color: '#19ae92' }}><CloseIcon /></IconButton>
        </DialogTitle>

        <DialogContent>
          <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <TextField
              name="name"
              label="Full Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              sx={{ width: '100%', maxWidth: '300px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: '#19ae92' }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="number"
              label="Phone Number"
              type="tel"
              variant="outlined"
              value={formData.number}
              onChange={handleChange}
              sx={{ width: '100%', maxWidth: '300px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon sx={{ color: '#19ae92' }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="gender"
              label="Gender"
              select
              variant="outlined"
              value={formData.gender}
              onChange={handleChange}
              sx={{ width: '100%', maxWidth: '300px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WcIcon sx={{ color: '#19ae92' }} />
                  </InputAdornment>
                ),
              }}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
            <TextField
              name="location"
              label="Location"
              variant="outlined"
              value={formData.location}
              onChange={handleChange}
              sx={{ width: '100%', maxWidth: '300px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: '#19ae92' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleSubmit} sx={{ borderRadius: '0px 25px 0px 25px', color: '#fff', backgroundColor: '#19ae92', fontSize: '14px', padding: '10px 30px', '&:hover': { backgroundColor: '#17a77e' } }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      

      <Grid container spacing={2} sx={{ mt: 3 }} justifyContent="center">
  {/* Privacy Box */}
  <Grid item xs={12} sm={6} md={3}>
    <Box
      sx={{
        backgroundColor: '#fff',
        padding: '20px 30px',
        borderRadius: '0px 25px 0px 25px',
        color: '#19ae92',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        margin: '3px 0 0 15px',
      }}
    >
      <LockIcon sx={{ mr: 1 }} />
      <Typography variant="body1">Your Privacy is Our First Priority.</Typography>
    </Box>
  </Grid>

  {/* Security Box */}
  <Grid item xs={12} sm={6} md={3}>
    <Box
      sx={{
        backgroundColor: '#fff',
        padding: '20px 30px',
        borderRadius: '0px 25px 0px 25px',
        color: '#19ae92',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        margin: '3px 0 0 15px',
      }}
    >
      <ShieldIcon sx={{ mr: 1 }} />
      <Typography variant="body1">Your Data is Safe With Us.</Typography>
    </Box>
  </Grid>
</Grid>


      {/* Success Message Dialog */}
      <Dialog open={openSuccessDialog} onClose={handleSuccessClose} fullWidth sx={{ '& .MuiDialog-paper': { width: '400px', maxWidth: '400px' } }}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#f5f5f5', fontWeight: 'bold', color: '#19ae92', borderBottom: '2px solid #19ae92', p: 2 }}>
          <Typography variant="h6" sx={{ fontSize: 20 }}>Success!</Typography>
          <IconButton onClick={handleSuccessClose} sx={{ color: '#19ae92' }}><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
          <CheckCircleIcon sx={{ color: '#19ae92', fontSize: 40, mb: 2 }} />
          <Typography variant="body1" sx={{ color: '#19ae92', textAlign: 'center' }}>Your submission was successful!</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button onClick={handleSuccessClose} sx={{ borderRadius: '0px 25px 0px 25px', color: '#fff', backgroundColor: '#19ae92', fontSize: '14px', padding: '10px 30px', '&:hover': { backgroundColor: '#17a77e' } }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Home;
