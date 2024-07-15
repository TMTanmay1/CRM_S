import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const ErrorPage = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="h1" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you are looking for might does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Go to Home
      </Button>
    </Container>
  );
};

export default ErrorPage;
