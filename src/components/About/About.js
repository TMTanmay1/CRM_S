import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import AboutImage from "../../assets/about.jpg";
import "./About.css";
import AboutPoint from "../../assets/About_Points.png";
import SalonPOSIcon from "@mui/icons-material/Receipt"; // Material-UI icons
import AppointmentsIcon from "@mui/icons-material/Schedule";
import MembershipIcon from "@mui/icons-material/People";
import FeedbackIcon from "@mui/icons-material/RateReview";
import CatalogIcon from "@mui/icons-material/ShoppingCart";
import RightArrowIcon from "@mui/icons-material/ChevronRight";
import { Link } from 'react-router-dom';

const ServiceItem = ({ icon, title, description }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className="service-item">
        {icon}
        <Typography variant="h6" component="div" color="textPrimary" fontWeight="bold" align="center" sx={{ color: "#091a44" }}>
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" align="center">
          {description}
        </Typography>
      </div>
    </Grid>
  );
};



function About() {
  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText((prev) => !prev);
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "40vh", // Reduced height to 40vh
          backgroundImage: `url(${AboutImage})`,
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
            About Us
          </Typography>
        </Paper>
      </Box>
      <Box
        sx={{
          padding: "20px",
          maxWidth: "80vw", // Set max width for Typography
          margin: "0 auto", // Center the Box horizontally
        }}
      >
        <Typography
          variant="body1"
          component="p"
          color="textPrimary"
          fontWeight="light"
          align="center"
          sx={{ marginTop: "10px", padding: "10px" }}
        >
          Welcome to Swalook, the ultimate solution for salons looking to
          streamline their operations and enhance customer experience. Swalook
          is an intuitive, user-friendly, cloud-based innovative software and
          mobile app that helps salons manage appointments, billing, inventory,
          and customer relationships. You can also use integrated marketing to
          reach out to your customers better. All this at the touch of a button,
          thus saving time and effort.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          color="textPrimary"
          fontWeight="light"
          align="center"
          sx={{ marginTop: "10px", padding: "10px" }}
        >
          Besides helping you streamline your salon business activities and grow
          your business by connecting companies with customers, Swalook also
          offers the following features:
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "20px" }}
      >
        {/* Left div with image */}
        <Grid
          item
          xs={12}
          md={6}
          textAlign="center"
          sx={{ paddingRight: "10px" }}
        >
          <img src={AboutPoint} alt="Salon" className="ap_image" />
        </Grid>
        {/* Right div with points */}
        <Grid item xs={12} md={6} >
          <Typography
            variant="h6"
            component="div"
            color="textPrimary"
            fontWeight="bold"
            fontSize={24}
            align="center"
            sx={{
              marginBottom: "20px",
              color: "#091a44",
              textDecoration: "underline",
            }}
          >
            Services Offered
          </Typography>
          {/* <ul>
            <li>
              <b style={{ color: "#091a44" }}>Salon POS:</b> You can create and
              manage bills for your customers and send them via WhatsApp.
            </li>
            <li>
              <b style={{ color: "#091a44" }}>Online Appointments:</b> Your
              customers can schedule appointments with a few clicks.
            </li>
            <li>
              <b style={{ color: "#091a44" }}>Membership:</b> We help you manage
              membership in your salon and provide customer loyalty benefits.
            </li>
            <li>
              <b style={{ color: "#091a44" }}>Reports & Feedback:</b> You can
              get feedback from your customers on how they felt about their
              visit with you.
            </li>
            <li>
              <b style={{ color: "#091a44" }}>Digital Catalog:</b> Customers can
              browse through the digital catalog of services provided by your
              salon.
            </li>
          </ul> */}

      <Grid container spacing={3} justifyContent="center" sx={{padding:"10px"}}>
        <ServiceItem
          icon={<SalonPOSIcon sx={{ color: "#091a44" }}/>}
          title="Salon POS"
          description="You can create and manage bills for your customers and send them via WhatsApp."
        />
        <ServiceItem
          icon={<AppointmentsIcon sx={{ color: "#091a44" }}/>}
          title="Online Appointments"
          description="Your customers can schedule appointments with a few clicks."
        />
        <ServiceItem
          icon={<MembershipIcon sx={{ color: "#091a44" }}/>}
          title="Membership"
          description="We help you manage membership in your salon and provide customer loyalty benefits."
        />
        <ServiceItem
          icon={<FeedbackIcon sx={{ color: "#091a44" }}/>}
          title="Reports & Feedback"
          description="You can get feedback from your customers on how they felt about their visit with you."
        />
        <ServiceItem
          icon={<CatalogIcon sx={{ color: "#091a44" }}/>}
          title="Digital Catalog"
          description="Customers can browse through the digital catalog of services provided by your salon."
        />
      </Grid>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", padding: "10px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#091a44",
            color: "white",
            marginTop: "20px",
            padding: "10px",
          }}
          onClick={handleButtonClick}
        >
          Learn More
        </Button>
        {showText && (
          <Typography
            variant="body1"
            component="p"
            color="textPrimary"
            fontWeight="light"
            align="center"
            sx={{ padding: "10px", maxWidth: "80vw", margin: "0 auto" }}
          >
            At Swalook, we believe that technology should be accessible and easy
            to use for everyone. That's why we've designed our software and app
            to be as user-friendly and intuitive as possible, with a sleek and
            modern interface that's easy to navigate. We’re committed to
            providing the best possible and striving to improve and innovate our
            software to meet customers’ evolving needs.
            <br />
            <br />
            We're dedicated to empowering salon owners to take their businesses
            to the next level. Whether you're a small independent salon or a
            large chain, we have the tools and expertise to help you succeed.
            <br />
            <br />
            But our mission continues after business operations. We also believe
            in serving our customers from acquisition to service. That's why our
            software includes features to help salon owners acquire new
            customers and keep them coming back, such as automated appointment
            reminders and targeted marketing campaigns.
            <br />
            <br />
            Swalook is a comprehensive salon and customer management system that
            aims to streamline and optimize the operations of a salon while also
            providing an exceptional customer experience.
            <ol>
              <li>
                <b style={{ color: "#091a44" }}>
                  Streamlined appointment scheduling -
                </b>{" "}
                Swalook lets customers easily book appointments online or
                through the app, allowing them to choose the service they need,
                the date and time that suits them, and the preferred stylist.
                This feature not only saves time for the customers but also
                allows the salon staff to manage appointments more efficiently.
              </li>
              <li>
                <b style={{ color: "#091a44" }}>
                  Customizable customer profiles -
                </b>{" "}
                Swalook allows customers to create profiles that contain their
                personal details, service preferences, and past appointment
                history. This feature enables the salon staff to tailor their
                services to each customer's unique needs and preferences,
                enhancing the overall customer experience.
              </li>
              <li>
                <b style={{ color: "#091a44" }}>
                  Marketing and loyalty programs -
                </b>{" "}
                Swalook includes marketing and loyalty features that allow salon
                owners to promote their services and reward loyal customers.
                This feature not only helps to attract new customers but also
                helps to retain existing ones, creating a loyal customer base
                that can drive long-term business growth.
              </li>
              <li>
                <b style={{ color: "#091a44" }}>Mobile accessibility -</b>{" "}
                Swalook is accessible via a mobile app, allowing customers to
                book appointments, manage their profiles, and access other
                features. This feature makes it easy for customers to stay
                connected with their favorite salons, even when they are on the
                move.
              </li>
            </ol>
          </Typography>
        )}
      </Box>
    </>
  );
}

export default About;
