import React, { useState } from 'react';
import { Grid, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, IconButton, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import CloseIcon from '@mui/icons-material/Close';
import XIcon from '@mui/icons-material/X';
import './Footer.css';
import S_logo from '../../assets/S_logo.webp';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateEmail = (email) => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const validatePhone = (phone) => {
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone number must be 10 digits');
    } else {
      setPhoneError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    validatePhone(e.target.value);
  };

  const handleSubmit = () => {
    if (emailError || phoneError || !email || !phone) {
      return;
    }
    // Handle form submission
    handleClose();
  };

  const Navigate = () => {
    navigate('/contact-us');
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper
            sx={{
              backgroundColor: '#091A44',
              padding: '20px', // Add padding for content inside the footer
              width: '96vw', // Make the width match the screen width
            }}
          >
            <Grid container spacing={2}>
              {/* Left Div */}
              <Grid item xs={12} sm={6} container justifyContent="center">
                <Typography variant="h5" className="footer-heading" sx={{ color: 'white' }}>
                  Social Media
                </Typography>
                <Grid container spacing={1} justifyContent="center" sx={{ padding: '10px' }}>
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
                    <a href="https://x.com/swalookofficial" target='_blank'>
                      <XIcon sx={{ color: 'white' }} />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://www.youtube.com/channel/UCQj9_wk87-iDb9h9TdxjHYg" target='_blank'>
                      <YouTubeIcon sx={{ color: 'white' }} />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://in.pinterest.com/swalook/" target='_blank'>
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
                <Typography variant="h5" className="footer-heading" sx={{ color: 'white' , cursor:'pointer' , textDecoration:'underline' }} onClick={Navigate}>
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
                    <Typography variant="body2" component="span">Greater Noida (West), Uttar Pradesh 201009</Typography>
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
      <div className="call-icon-circle" onClick={handleClickOpen}>
        <CallIcon sx={{ color: 'white' }} />
      </div>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        PaperProps={{ 
          style: { 
            position: 'fixed', 
            bottom: 80, 
            right: 20,  
            margin: 0, 
            height: '500px', // Adjust the height
            width: '300px',  // Adjust the width
          } 
        }}
      >
        <DialogTitle sx={{ backgroundColor: '#091A44', color: 'white', textAlign: 'center' }}>
          <img src={S_logo} alt="Popup Image" style={{ width: '100px', height: 'auto', marginBottom: '10px' }} />
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" component="span" style={{ marginLeft: '10px' }}>
              Welcome to Swalook !
            </Typography>
            {/* <IconButton onClick={handleClose} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton> */}
          </Box>
          <Typography variant="body2" style={{ color: 'white', marginBottom: '10px', fontSize: '0.75rem' }}>
            What we can help you with today ?
          </Typography>
        </DialogTitle>
        <DialogContent sx={{backgroundColor:'#F1F1F1'}}>
          <TextField 
            autoFocus 
            margin="dense" 
            label="Name" 
            type="text" 
            fullWidth 
            variant="standard" 

            sx={{ marginTop: '20px' }}
          />
          <TextField 
            margin="dense" 
            label="Email" 
            type="email" 
            fullWidth 
            variant="standard" 
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
          />
       <TextField 
  margin="dense" 
  label="Phone Number" 
  type="number" 
  fullWidth 
  variant="standard" 
  value={phone}
  onChange={handlePhoneChange}
  error={!!phoneError}
  helperText={phoneError}
  InputProps={{
    inputProps: {
      style: {
        // Hide the default number input spinner
        appearance: 'textfield',
        MozAppearance: 'textfield',
        WebkitAppearance: 'none',
      },
    },
    // This will help hide the spinner in Firefox
    sx: {
      '& input[type=number]': {
        MozAppearance: 'textfield',
      },
      '& input[type=number]::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '& input[type=number]::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
    },
  }}
/>

        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', backgroundColor:'#F1F1F1' }}>
          <Button onClick={handleSubmit} sx={{ color: '#091A44', border: '1px solid #091A44',
    borderRadius: '8px' }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <style jsx>{`
        .call-icon-circle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #be8c39;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default Footer;
