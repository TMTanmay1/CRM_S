import React from 'react';
import { Container, Typography } from '@mui/material';

function Privacy() {
  return (
    <>
    <Container
      sx={{
        marginTop: '20px',
        backgroundColor: '#f1f1f1',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ color: '#091A44', fontWeight: 'bold' }}>
        Privacy Policy
      </Typography>
      </Container>
      <Container
        sx={{
          marginTop: '20px',
          padding: '20px',
          maxWidth: '800px', // Added maximum width
          margin: '0 auto', // Center align horizontally
        }}
      >
      <Typography variant="body1" sx={{  marginTop: '20px', textAlign: 'left' }}>
        <b style={{color: '#091A44'}}>This Privacy Policy applies to Swalook Global Pvt. Ltd.</b>
        <br/>
        Swalook Global Pvt. Ltd. recognizes the importance of maintaining your privacy. We esteem your security and value your trust in us. This Policy describes how we treat user information we collect on https://www.swalook.com and other offline sources. This Privacy Policy applies to new and existing visitors to our site and our online clients. By visiting and/or utilizing our website, you consent to this Privacy Policy.
      </Typography>
      <Typography variant="body1" sx={{  marginTop: '20px', textAlign: 'left' }}>
        <h2 style={{color: '#091A44'}}>1. Information we collect</h2>
        <br />
        <b>Contact information:</b> We may collect your name, email, mobile/phone number, street, city, state, pin code, country, and IP address.
        <br />
        <b>Payment and billing information:</b> We may collect your billing name, billing address, and payment method when you register with us. We NEVER collect your credit card number or other details about your credit card on our website. Credit card statistics will be attained and administered by our online payment partner.
        <br />
        <b>Information you post:</b> We may collect the information you post in a public space on our website or a third-party social media site belonging to Swalook Global Pvt. Ltd.
        <br />
        <b>Demographic information:</b> We could collect demographic information about you, courses you like, universities, services you intend, or any other information provided by you during the use of our website. We can be collecting this too as a part of a survey.
        <br />
        <b>Other information:</b> If you use our website, we may also be collecting information about your IP address and the browser you are using. We may look at what site you came from, the duration of time spent on our website, pages accessed, or what site you visit when you leave us. We may also collect the type of mobile device you are using or the version of the operating system your computer or device is running. 
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'left' }}>
        <h2  style={{color: '#091A44'}}>2. We collect information in different ways</h2>
        <br />
        <b>We collect information directly from you:</b> We collect information directly from you when you register for the request of information on different services. We also collect information if you post a comment on our websites or ask us a question through the pop-up page, phone, or email.
        <br />
        <b>We collect information from you passively:</b> We use different kinds of tracking tools like Google Analytics, Google Webmaster, web beacons, and browser cookies for gathering statistics about your utilization of our website. 
        <br />
        <b>We get information about you from third parties:</b> For example, if you use a cohesive social media feature on our site. The social media site, which is usually a third-party, will give us specific information about you. This could include your name, email address, and your preference for abroad studies.
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'left' }}>
        <h2   style={{color: '#091A44'}}>3. Use of your personal information</h2>
        <br />
        <b>We use the information to contact you:</b> We may use the information you provide to contact you for other promotional purposes.
        <br />
        <b>We use the information to respond to your requests or questions:</b> We may use your data to approve your registration for a contest or an event. 
        <br />
        <b>We use the data to better our products and services:</b> We may use your data to tailor your experience with us. This can include demonstrating content based on your choices.
        <br />
        <b>We use the data to look at website trends and customer activities:</b> We may use your data to make our site and products better. We may also merge the data we receive from you with the information we get from third parties.
        <br />
        <b>We use the information for security purposes:</b> We may also use the data to guard our company, customers, and our websites.
        <br />
        <b>We use the information for marketing purposes:</b> We might send you information about special promotions or offers. We might also tell you about new business opportunities. These may be our offers, products, or third-party offers and products that we think you might find interesting. Or, for example, we might use your phone no or email address to enroll you in our newsletter or scientific articles. 
        <br />
        <b>We use the information to send you transactional communications:</b> We might send you emails or SMS about the status of your application or request. 
        <br />
        We use information as otherwise permitted by law.
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'left' }}>
        <h2  style={{color: '#091A44'}}>4. Sharing of information with third-parties</h2>
        <br />
        <b>We will also share the data with third parties who execute services on behalf of our company:</b> We share the data with vendors who help us in managing our online registration, payment, and transactional message processors. Some vendors are located outside of India.
        <br />
        <b>We will share information with our business partners:</b> This includes a third party who provide or sponsor an event, or who operates a venue where we hold events or those who handle certain processes on our behalf. Our associates use the data we provide them as described in their privacy policies. 
        <br />
        <b>We may share your data for reasons not defined in this procedure:</b> We will tell you before we do this.
      </Typography>
      <Typography variant="body1" sx={{  marginTop: '20px', textAlign: 'left' }}>
        <h2  style={{color: '#091A44'}}>5. Third-party sites</h2>
        <br />
        If you click on one of the links to any of the third-party websites, you will be taken to websites we do not control. This policy, however, does not apply to the privacy processes of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third-party sites.
        <br />
        If you have any questions about this Policy or other privacy concerns, you can also email us at <a href='mailto:info@swalook.com'>info@swalook.com</a>
      </Typography>
      <Typography variant="body1" sx={{  marginTop: '20px', textAlign: 'left' }}>
        <h2  style={{color: '#091A44'}}>6. Updates to this policy</h2>
        <br />
        This Privacy Policy was last updated on 29-04-2024 From time to time we may change our privacy practices. Furthermore, we also post a restructured copy on our website. Please check our site periodically for updates.
      </Typography>
      <Typography variant="body1" sx={{  marginTop: '20px', textAlign: 'left' }}>
        <h2  style={{color: '#091A44'}}>7. Jurisdiction</h2>
        <br />
        If you choose to visit the website, your visit and any dispute over privacy are subject to this Policy and the terms of use of the website. In addition to the preceding, any disagreements that arise under this policy shall be governed by the laws of India.
      </Typography>
      </Container>
      </>
  );
}

export default Privacy;
