import React from 'react'
import Blogs from '../../assets/blogs.webp'
import {
    Box,
    Typography,
    Paper,
    Grid,
    Button,
    IconButton,
  } from "@mui/material";

  import RightArrowIcon from "@mui/icons-material/ChevronRight";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function B_main() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/contact-us');
  };
  return (
    <>
    <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "40vh", // Reduced height to 40vh
          backgroundImage: `url(${Blogs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Black mask overlay */}
        <Paper
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Darker mask color (opacity 0.7)
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Text */}
          <Typography variant="h2" component="div" color="white" align="center">
            Blogs
          </Typography>
        </Paper>
      </Box>

       <Box sx={{ textAlign: 'center', padding: '20px' }}>
      {/* <Typography
        variant="h4"
        component="div"
        fontWeight="bold"
        sx={{ marginBottom: '10px', color: '#091a44' }}
      >
        Blogs
      </Typography> */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'fit-content',
          flexDirection: 'column',
        }}
      >
        <Box
          component={Link}
          to="/blogs/streamlining-your-salon-operations-with-swalook-a-comprehensive-guide"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '80%',
            border: '1px solid #091a44',
            padding: '10px',
            margin: '10px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              zIndex: 1,
            },
            textDecoration: 'none', // Ensure no default link styling
          }}
        >
          <Typography
            variant="body1"
            component="p"
            fontWeight="light"
            align="left"
            sx={{ flex: 1, color: '#091a44' }}
          >
            Streamlining your salon operations with Swalook: a comprehensive guide
          </Typography>
          <IconButton sx={{ color: '#091a44' }}>
            <RightArrowIcon />
          </IconButton>
          <Typography
            variant="body1"
            component="p"
            fontWeight="light"
            align="left"
            sx={{ cursor: 'pointer' }}
          >
            Click here to read
          </Typography>
        </Box>

        <Box
          component={Link}
          to="/blogs/benefits-of-using-a-cloud-based-salon-crm-software"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '80%',
            border: '1px solid #091a44',
            padding: '10px',
            margin: '10px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              zIndex: 1,
            },
            textDecoration: 'none', // Ensure no default link styling
          }}
        >
          <Typography
            variant="body1"
            component="p"
            fontWeight="light"
            align="left"
            sx={{ flex: 1, color: '#091a44' }}
          >
           Benefits of using a cloud-based salon customer relationship management software 
          </Typography>
          <IconButton sx={{ color: '#091a44' }}>
            <RightArrowIcon />
          </IconButton>
          <Typography
            variant="body1"
            component="p"
            fontWeight="light"
            align="left"
            sx={{ cursor: 'pointer' }}
          >
            Click here to read
          </Typography>
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
          onClick={handleButtonClick}
        >
          Request a Demo
        </Button>
      </div>
    </Box>

      </>
  )
}

export default B_main