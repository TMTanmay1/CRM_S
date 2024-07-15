import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon for the hamburger icon
// import logoImage from '../../assets/S_logo.webp'; 
// import logoImage from '../../assets/swalooklogo_2.webp'; 
import logoImage from '../../assets/logo_s.webp';
import './Navbar.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu open/close

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    handleMobileMenuClose();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#000' }}>
          {/* <img src={logoImage} alt="Logo" sx={{ width: 'auto', height: '60px', marginRight: '10px' }} /> */}
          <img src={logoImage} alt="Logo" sx={{ width: '50px', height:'30px' , marginRight: '10px' }} />
        </Typography>
        {/* Hamburger icon for mobile view */}
        <IconButton
          size="large"
          aria-label="menu"
          onClick={handleMobileMenuOpen}
          sx={{ display: { xs: 'block', md: 'none' }, color: '#091a44' }}
        >
          <MenuIcon />
        </IconButton>
        {/* Desktop view options */}
        <div className="options" sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }}}>
          <Button component={Link} to="/" sx={{ color: '#091a44', fontWeight: 'bold' }}>
            Home
          </Button>
          <Button component={Link} to="/about-us" sx={{ color: '#091a44', fontWeight: 'bold' }}>
            About Us
          </Button>
          <Button component={Link} to="/blogs" sx={{ color: '#091a44', fontWeight: 'bold' }}>
            Blogs
          </Button>
          <Button sx={{ color: '#091a44', position: 'relative', fontWeight: 'bold' }} aria-controls="product-menu" aria-haspopup="true" onClick={handleClick}>
            Product
            <div className="dropdown-arrow"></div>
          </Button>
          
          <Menu
            id="product-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            getContentAnchorEl={null}
            keepMounted
          >
            <MenuItem component={Link} to="/crm">
       CRM Website
</MenuItem>

          </Menu>
          {/* <Button component={Link} to="/blog" sx={{ color: '#091a44', fontWeight: 'bold' }}>
            Blog/News and Events
          </Button> */}
          <Button component={Link} to="/contact-us" sx={{ color: '#091a44', fontWeight: 'bold' }}>
            Contact Us
          </Button>
        </div>
        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={mobileMenuOpen}
          onClose={handleMobileMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          getContentAnchorEl={null}
          keepMounted
        >
          <MenuItem component={Link} to="/" onClick={handleMobileMenuClose}>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/about-us" onClick={handleMobileMenuClose}>
            About Us
          </MenuItem>
          <MenuItem component={Link} to="/blogs" onClick={handleMobileMenuClose}>
            Blogs
          </MenuItem>
    
          <MenuItem component={Link} to="/crm">
            CRM Website
          </MenuItem>

          
          {/* <MenuItem component={Link} to="/blog" onClick={handleMobileMenuClose}>
            Blog/News and Events
          </MenuItem> */}
          <MenuItem component={Link} to="/contact-us" onClick={handleMobileMenuClose}>
            Contact Us
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
