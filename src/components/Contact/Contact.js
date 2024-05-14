import React from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import ContactImage from '../../assets/contact.jpg'; // Import your image

function Contact() {
  return (
    <>
    <Container sx={{display:'flex' , justifyContent:' center' , alignItems:'center'}}>
      <Container style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' ,}}>
        <Grid container justifyContent="center" spacing={4} style={{ marginBottom: '30px' }}>
          
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" justifyContent="center">
              <img src={ContactImage} alt="Contact" style={{ width: 'auto', borderRadius: '5px', height:'400px'  }} />
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={8}>
            <div style={{ border: '2px solid #091a44', padding: '20px', borderRadius: '5px', maxWidth: '400px' }}>
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
      </Container>
    </>
  );
}

export default Contact;
