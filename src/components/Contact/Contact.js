import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
import ContactImage from "../../assets/contact.webp";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    reason: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));

    if (id === "email") {
      validateEmail(value);
    }

    if (id === "phoneNumber") {
      validatePhoneNumber(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    if (phoneNumber.length !== 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone number must be exactly 10 digits long.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional form submission logic here
  };

  return (
    <Container
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)", // Wavy gradient background
      }}
    >
      <Grid container justifyContent="center" spacing={4}>
        {/* Left Side - Image */}
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <img
              src={ContactImage}
              alt="Contact"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "430px",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Grid>
        {/* Right Side - Form */}
        <Grid item xs={12} sm={6} style={{ zIndex: 1 }}>
          <div
            style={{
              border: "2px solid #091a44",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#ffffff", // White background for form
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h4"
              style={{ color: "#091a44", marginBottom: "20px" }}
            >
              Contact Customer Support
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="firstName"
                    type="text"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="lastName"
                    type="text"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="phoneNumber"
                    type="number"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    value={formData.phoneNumber}
                    required
                    onChange={handleInputChange}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber}
                    InputProps={{
                      inputProps: {
                        style: {
                          // Hide the default number input spinner
                          appearance: "textfield",
                          MozAppearance: "textfield",
                          WebkitAppearance: "none",
                        },
                      },
                      // This will help hide the spinner in Firefox
                      sx: {
                        "& input[type=number]": {
                          MozAppearance: "textfield",
                        },
                        "& input[type=number]::-webkit-outer-spin-button": {
                          WebkitAppearance: "none",
                          margin: 0,
                        },
                        "& input[type=number]::-webkit-inner-spin-button": {
                          WebkitAppearance: "none",
                          margin: 0,
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
  id="reason"
  type="text"
  label="How can we help you?"
  variant="outlined"
  fullWidth
  required
  value={formData.reason}
  onChange={handleInputChange}
/>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{ backgroundColor: "#091a44", color: "white" }}
                  >
                    Contact Us
                  </Button>
                </Grid>
              </Grid>
            </form>
            {/* Decorative Design */}
            <div
              style={{
                position: "absolute",
                bottom: "-20%",
                left: "-20%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle at bottom left, rgba(9, 26, 68, 0.1), transparent 70%)",
                transform: "rotate(45deg)",
                zIndex: -1,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-20%",
                right: "-20%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle at top right, rgba(9, 26, 68, 0.1), transparent 70%)",
                transform: "rotate(-45deg)",
                zIndex: -1,
              }}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
