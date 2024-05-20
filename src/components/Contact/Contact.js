  import React from 'react';
  import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
  import ContactImage from '../../assets/contact.png';

  function Contact() {
    return (
      <>
        <Container style={{ 
          marginTop: '50px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', // Wavy gradient background
        }}>
          <Grid container justifyContent="center" spacing={4}>
            {/* Left Side - Image */}
            <Grid item xs={12} sm={6}>
              <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                <img src={ContactImage} alt="Contact" style={{ width: '100%', height: 'auto', maxHeight: '430px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }} />
              </Box>
            </Grid>
            {/* Right Side - Form */}
            <Grid item xs={12} sm={6} style={{ zIndex: 1 }}>
              <div style={{ 
                border: '2px solid #091a44', 
                padding: '20px', 
                borderRadius: '10px', 
                backgroundColor: '#ffffff', // White background for form
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Typography variant="h4" style={{ color: '#091a44', marginBottom: '20px' }}>
                  Contact Customer Support
                </Typography>
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField id="firstName" label="First Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField id="lastName" label="Last Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField id="email" label="Email" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField id="phoneNumber" label="Phone Number" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField id="reason" label="Reason for Contact" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" fullWidth style={{ backgroundColor: '#091a44', color: 'white' }}>
                        Contact Us
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                {/* Decorative Design */}
                <div style={{
                  position: 'absolute',
                  bottom: '-20%',
                  left: '-20%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle at bottom left, rgba(9, 26, 68, 0.1), transparent 70%)',
                  transform: 'rotate(45deg)',
                  zIndex: -1,
                }} />
                <div style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-20%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle at top right, rgba(9, 26, 68, 0.1), transparent 70%)',
                  transform: 'rotate(-45deg)',
                  zIndex: -1,
                }} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }

  export default Contact;
