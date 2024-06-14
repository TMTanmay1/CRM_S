import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import './Footer.css';

function Footer() {
  return (
    <Grid container>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper
          sx={{
            backgroundColor: '#091A44',
            padding: '20px', // Add padding for content inside the footer
            width: '96.3vw', // Make the width match the screen width
          }}
        >
          <Grid container spacing={2}>
            {/* Left Div */}
            <Grid item xs={12} sm={6} container justifyContent="center">
              <Typography variant="h5" className="footer-heading" sx={{ color: 'white' }}>
                Social Media
              </Typography>
              <Grid container spacing={1} justifyContent="center" sx={{padding:'10px'}}>
                <Grid item>
                  <a href="https://www.linkedin.com/company/swalook/" target='_blank'>
                    <LinkedInIcon sx={{ color: 'white' }} />
                  </a>
                </Grid>
                <Grid item>
                  <a href="https://www.instagram.com/swalook_official/" target='_blank'>
                    <InstagramIcon sx={{ color: 'white' }} />
                  </a>
                </Grid>
                <Grid item>
                  <a href="https://www.facebook.com/people/SwaLook/100082780576167/" target='_blank'>
                    <FacebookIcon sx={{ color: 'white' }} />
                  </a>
                </Grid>
                <Grid item>
                  <a href="https://twitter.com/SwaLook" target='_blank'>
                    <TwitterIcon sx={{ color: 'white' }} />
                  </a>
                </Grid>
                <Grid item>
                  <a href="https://www.youtube.com/channel/UCQj9_wk87-iDb9h9TdxjHYg" target='_blank'>
                    <YouTubeIcon sx={{ color: 'white' }} />
                  </a>
                </Grid>
                <Grid item>
                  <a href="https://in.pinterest.com/" target='_blank'>
                    <PinterestIcon sx={{ color: 'white' }} />
                  </a>
                </Grid>
              </Grid>
              <Grid item xs={12} container justifyContent="center">
              <a href="/privacy-policy" style={{ textDecoration: 'underline', color: 'white', marginRight: '20px' }}>
                <Typography variant="body2" sx={{ color: 'white' }}>Privacy Policy</Typography>
              </a>
              <a href="/terms-conditions" style={{ textDecoration: 'underline', color: 'white' }}>
                <Typography variant="body2" sx={{ color: 'white' }}>Terms & Conditions</Typography>
              </a>
            </Grid>
            </Grid>
            
            {/* Right Div */}
            <Grid item xs={12} sm={6} container justifyContent="center">
              <Typography variant="h5" className="footer-heading" sx={{ color: 'white' }}>
                Contact Us
              </Typography>
              <Grid container direction="column" alignItems="center" sx={{ color: 'white', marginTop: '10px' }}>
                <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                  <MailIcon sx={{ marginRight: '5px' }} />
                  <a href="mailto:info@example.com" style={{ textDecoration: 'underline', color: 'white' }}>info@swalook.in</a>
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
      <PhoneIcon sx={{ marginRight: '5px' }} />
      <Typography variant="body2" component="span">
        <a href="tel:+919870103761" style={{ textDecoration: 'none', color: 'inherit' }}>
          +91 98701 03761
        </a>
      </Typography>
    </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                  <RoomIcon sx={{ marginRight: '5px' }} />
                  <Typography variant="body2" component="span">123 Street, City, Country</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} container justifyContent="center" sx={{ marginTop: '20px', borderTop: '1px solid white', paddingTop: '10px' }}>
              <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                © Copyright 2024 Swalook Global Pvt.Ltd.
              </Typography>
            </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Footer;
