import React, { useEffect, useRef, useState } from 'react';
import { Typography, Grid , Button } from '@mui/material'; // Import Grid from MUI
import Lottie from 'lottie-react';
import homeani from '../../assets/home.json'; 
import loading from '../../assets/loading.json';
import question from '../../assets/question.json';
import mission from '../../assets/mission.webp';
import vision from '../../assets/vision.webp';
import useMediaQuery from '@mui/material/useMediaQuery'; // Import useMediaQuery
import { useNavigate } from 'react-router-dom';

import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [reveal, setReveal] = useState(false);
  const ref = useRef(null);
  const isMobile = useMediaQuery('(max-width:600px)'); // Define a breakpoint for mobile view

  const handleScroll = () => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top;
      setReveal(top < window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    navigate('/contact-us');
  };

  return (
    <div className={`home-container ${reveal ? 'reveal' : ''}`} ref={ref}>
      <div className='effect'>
      <Typography variant="body1" align="center" sx={{ fontStyle: 'lighter', marginY: '15px', fontSize: '24px' }}>
        The Ultimate Salon Management Solution
      </Typography>
      <Grid container spacing={2} className="content-container">
        <Grid item xs={12} md={6} className="left-content">
          <div className="text-content">
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Look Your Best.<br />
              Feel Your Best.<br />
              <span>Manage Your Best!</span>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="right-content">
          <div className="lottie-animation">
            <Lottie animationData={homeani} />
          </div>
        </Grid>
      </Grid>
      </div>

     <div className="button-container">
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            color: '#fff',
            fontWeight: 'bold',
            padding: '15px 30px',
            margin: '20px auto',
            display: 'block',
            fontSize: '18px',
            borderRadius: '50px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            transition: 'transform 0.2s',
            '&:hover': {
              backgroundColor: '#FF8E53',
              transform: 'scale(1.05)',
            },
            '@media (max-width: 600px)': {
              fontSize: '16px',
              padding: '10px 20px',
            },
          }}
          onClick={handleButtonClick}
        >
          Request a Demo
        </Button>
      </div>
      
      <div className="additional-content">
        <Grid container spacing={2} className="inner-content animated fadeIn" sx={{ padding: '10px' }}>
          <Grid item xs={12} md={6} className="image-content">
            <div className="lottie-container">
              <Lottie animationData={question} />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="text1" sx={{ padding: '10px' }}>
            <Typography variant="body1" sx={{ textAlign: isMobile ? 'center' : 'right', marginRight: isMobile ? '0' : '3rem' }}>
              Are you looking for ways to manage customer relationships using multiple tools and spreadsheets? Do you
              find it challenging to keep track of customer interactions and sales opportunities? Then, look no further
              than our CRM system!
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="body1"
          align="center"
          sx={{ marginX: 'auto', maxWidth: '80%', padding: '10px' }}
          className="animated fadeIn"
        >
          Our CRM system is a comprehensive solution that helps businesses streamline their sales, marketing, and
          customer service activities. With Swalook, you can easily manage customer interactions, track leads, and
          analyze sales performance. Our system also allows you to create and track marketing campaigns, manage customer
          support requests, and collaborate with your team members.
        </Typography>

        <Grid container className="inner-content animated fadeIn" sx={{ padding: '10px' }}>
          <Grid item xs={12} md={6} className="text1">
            <Typography variant="body1" sx={{ textAlign: isMobile ? 'center' : 'left', marginX: isMobile ? '0' : '3rem' }}>
              Our CRM system is designed to be user-friendly, so you and your team can start using it right away. It is
              also customizable, so you can tailor it to your business needs. With our system, you'll have all the tools
              to manage your customer relationships and grow your business.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="image-content">
            <div className="loading-container">
              <Lottie animationData={loading} />
            </div>
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginX: 'auto', maxWidth: '80%', color: '#091A44', fontWeight: 'bold' }}
          className="animated fadeIn"
        >
          So, if you want to take your customer relationships to the next level, try Swalook today!
        </Typography>
      </div>
      <Grid container spacing={2} className="content-container" sx={{ padding: '10px'}}>
        <Grid
          item
          xs={12}
          md={6}
          className="left-content animated fadeIn"
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <Typography variant="h4" sx={{ color: '#091A44', fontWeight: 'bold' }}>
            Mission
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Our mission is to be a force for positive change in the salon industry by leveraging technology to improve
            efficiency, enhance customer experience, and drive growth.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="right-content">
          <div className="mission-image">
            <img src={mission} alt="Mission" className="mission-image animated fadeIn" />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="content-container" sx={{ padding: '10px' }}>
        <Grid item xs={12} md={6} className="right-content">
          <div className="mission-image">
            <img src={vision} alt="Vision" className="mission-image animated fadeIn" />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="left-content animated fadeIn"
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <Typography variant="h4" sx={{ color: '#091A44', fontWeight: 'bold' }}>
            Vision
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Our vision is to provide a comprehensive, user-friendly, and efficient salon and customer management system
            that enhances the salon experience for customers and staff while driving long-term business growth.
          </Typography>
        </Grid>
      </Grid>
      <div className="button-container">
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            color: '#fff',
            fontWeight: 'bold',
            padding: '15px 30px',
            margin: '20px auto',
            display: 'block',
            fontSize: '18px',
            borderRadius: '50px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            transition: 'transform 0.2s',
            '&:hover': {
              backgroundColor: '#FF8E53',
              transform: 'scale(1.05)',
            },
            '@media (max-width: 600px)': {
              fontSize: '16px',
              padding: '10px 20px',
            },
          }}
          onClick={handleButtonClick}
        >
          Request a Demo
        </Button>
      </div>
    </div>
  );
}

export default Home;
