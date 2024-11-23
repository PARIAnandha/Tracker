import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Link,

} from '@mui/material';

import mainlogo from '../Assets/Main_logo.png';


const Header = () => {
  
  return (
    <>
      <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none', padding: '0.5rem 0' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            {/* Logo Box */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link
                href="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'white',
                  
                }}
              >
                <img 
                  src={mainlogo} 
                  alt="logo" 
                  style={{ height: '70px', marginRight: '15px' }} 
                />
              </Link>
            </Box>

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>

              <Link
                href="/login"
                sx={{
                  textDecoration: 'none',
                  marginLeft: 2,
                }}
              >
                <Button
                  sx={{
                    borderRadius: '0px 25px 0px 25px',
                    textAlign: 'center',
                    color: '#fff',
                    backgroundColor: '#19ae92',
                    border: '0px solid #fff',
                    fontSize: '14px',
                    fontWeight: 600,
                    padding: '5px 30px',
                    margin: '3px 0 0 15px',
                    transition: '.5s ease',
                    '&:hover': {
                      backgroundColor: '#17a77e',
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
            </Box>


          </Toolbar>
        </Container>
      </AppBar>

     
    </>
  );
};

export default Header;
