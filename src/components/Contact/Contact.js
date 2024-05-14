import React from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import ContactImage from '../../assets/contact.png'; // Import your image

function Contact() {
  return (
    <>
      <Container style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <Grid container justifyContent="center" spacing={4}>
          {/* Left Side - Image */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100%' }}>
              <img src={ContactImage} alt="Contact" style={{ width: '100%', height: 'auto', maxHeight: '400px', borderRadius: '5px' }} />
            </Box>
          </Grid>
          {/* Right Side - Form */}
          <Grid item xs={12} sm={6}>
            <div style={{ border: '2px solid #091a44', padding: '20px', borderRadius: '5px' }}>
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
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Contact;
