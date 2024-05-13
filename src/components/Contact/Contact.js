import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

function Contact() {
  return (
    <>
      <Container style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <div style={{ backgroundColor: '#f1f1f1', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
          <Typography variant="h4" style={{ color: '#091a44' }}>
            Contact Customer Support
          </Typography>
        </div>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <div style={{ border: '2px solid #091a44', padding: '20px', borderRadius: '5px' }}>
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
