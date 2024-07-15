import React, { useEffect, useState } from 'react';
import { Box, IconButton, Button, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import image1 from "../assets/About_Points.webp";
import image2 from "../assets/test.png";

const images = [image1, image2];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
  hover: {
    scale: 1.2,
    transition: { duration: 0.3 },
  },
};

const Test = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const navigate = useNavigate();

  const imageIndex = page % images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => clearInterval(timer);
  }, [page]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleButtonClick = () => {
    navigate('/contact-us');
  };

  const handleClick = () => {
    navigate('/contact-us');
  };

  return (
    <>
      <Box position="relative" width="100%" height="300px" overflow="hidden" sx={{ marginTop: "20px" }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <img
              src={images[imageIndex]}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto', // Increase width to 100%
                height: '100vh'
              }}
              alt={`slide-${imageIndex}`}
            />
          </motion.div>
        </AnimatePresence>
        <IconButton
          onClick={() => paginate(-1)}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            color: 'white',
            zIndex: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={() => paginate(1)}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            color: 'white',
            zIndex: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
      <Typography variant="h5" sx={{textAlign:'center', marginTop:'20px' , color:'#091a44'}}>Swalook CRM</Typography>
      <Box display="flex" alignItems="center" flex='wrap'>
        <Box flex="1" sx={{padding:'20px' , textAlign:'center'}}>
          <p>
            Are you looking for ways to manage customer relationships using multiple tools and spreadsheets? Do you find it challenging to keep track of customer interactions and sales opportunities? <br/> Then, look no further than our CRM system! Swalook is designed to be user-friendly, so you and your team can use it immediately. <br/>
            <Typography variant="contained" color="primary" onClick={handleButtonClick} sx={{cursor:'pointer'}}>Try Swalook today</Typography> to take your customer relationships to the next level!
          </p>
        </Box>
        <Box display="flex" flex='1' alignItems="center" justifyContent="center" flexWrap="wrap">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: '200px',
                height: 'auto',
                margin: '10px',
              }}
              alt={`slide-${index}`}
              whileHover="hover"
              variants={variants}
              onClick={() => console.log(`Clicked image ${index}`)}
            />
          ))}
        </Box>
      </Box>
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
          onClick={handleClick}
        >
          Request a Demo
        </Button>
      </div>
    </>
  );
};

export default Test;
