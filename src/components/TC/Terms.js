import React from 'react';
import { Container, Typography } from '@mui/material';

function Terms() {
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
          Terms and Conditions
        </Typography>
      </Container>

      {/* Content Container */}
      <Container
        sx={{
          marginTop: '20px',
          padding: '20px',
          maxWidth: '800px', // Added maximum width
          margin: '0 auto', // Center align horizontally
        }}
      >
        <Typography variant="body1" sx={{  textAlign: 'left' }}>
          <h2 style={{color: '#091A44'}}>1. Introduction</h2><br />
          These Website Standard Terms and Conditions (these “Terms” or these “Website Standard Terms and Conditions”) contained thus on this page, will administer your utilization of this site, including all pages within the site (all in all alluded to in this below as this “Website”). These Terms apply in full power and impact to your utilization of this website and by using this website, you explicitly acknowledge all terms and conditions contained thus in full. You should not utilize this website on the off chance that you have any issue with any of these Website Standard Terms and Conditions.
        </Typography>

        {/* 2. Intellectual Property Rights */}
        <Typography variant="body1" sx={{  textAlign: 'left', marginTop: '20px' }}>
          <h2 style={{color: '#091A44'}}>2. Intellectual Property Rights</h2><br />
          Other than the content you own, which you may have opted to include on this Website, under these Terms, [Swalook Global Pvt. Ltd.] and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved. You are allowed a constrained permit in particular, subject to the limitations given in these Terms, for motivations behind surveying the material contained on this Website.
        </Typography>

        {/* 3. Restrictions */}
        <Typography variant="body1" sx={{  textAlign: 'left', marginTop: '20px' }}>
          <h2 style={{color: '#091A44'}}>3. Restrictions</h2><br />
          You are explicitly and determinedly confined from the entirety of the accompanying:<br />
          1. reproducing any Website material in any media;<br />
          2. selling, sublicensing and additionally in any case commercializing any Website material;<br />
          3. publicly performing or potentially demonstrating any Website material;<br />
          4. using this Website in any way that is, or maybe, damaging to this Website;<br />
          5. utilizing this Website in any form that impacts client access to this Website;<br />
          6. using this Website despite pertinent laws and guidelines, or such that causes, or may cause, mischief to the Website, or any individual or business entity;<br />
          7. engaging in any data mining, data harvesting, data extracting or any other similar activity concerning this Website, or while using this Website;<br />
          8. utilizing this Website to participate in any promoting or advertising.<br />
          Certain areas of this Website are restricted from access by you and [Swalook Global Pvt. Ltd.] may further restrict access by you to any areas of this Website, at any time, in its sole and absolute discretion. Any client ID and secret key you may have for this Website are classified and you should keep up the classification of such data.
        </Typography>

        {/* 4. No warranties */}
        <Typography variant="body1" sx={{  textAlign: 'left', marginTop: '20px' }}>
          <h2 style={{color: '#091A44'}}>4. No warranties</h2><br />
          This Website is provided “as is,” with all faults, and [Swalook Global Pvt. Ltd.] makes no express or implied representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website will be interpreted as giving counsel or suggestions to you.
        </Typography>

        {/* 5. Limitation of liability */}
        <Typography variant="body1" sx={{  textAlign: 'left', marginTop: '20px' }}>
          <h2 style={{color: '#091A44'}}>5. Limitation of liability</h2><br />
          In no event shall [Swalook Global Pvt. Ltd.], nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort or otherwise, and [Swalook Global Pvt. Ltd.], counting its officials, executives, and workers will not be obligated for any roundabout, important, or uncommon risk emerging out of or in any capacity identified with your utilization of this Website.
        </Typography>

        {/* 6. Indemnification */}
        <Typography variant="body1" sx={{  textAlign: 'left', marginTop: '20px' }}>
          <h2 style={{color: '#091A44'}}>6. Indemnification</h2><br />
          You hereby indemnify to the fullest extent [Swalook Global Pvt. Ltd.] from and against any liabilities, costs, demands, causes of action, damages, and expenses (including reasonable attorney’s fees) arising out of or in any way related to your breach of any of the provisions of these Terms.
        </Typography>

        {/* 7. Severability */}
        <Typography variant="body1" sx={{  textAlign: 'left', marginTop: '20px' }}>
          <h2 style={{color: '#091A44'}}>7. Severability</h2><br />
          If any arrangement of these Terms is seen as unenforceable or invalid under any material law, such unenforceability or deficiency will not ruin these Terms unenforceable or all in all, and such arrangements will be deleted without influencing the rest of the arrangements thus.
        </Typography>

       
        {/* 8. Variation of Terms */}
        <Typography variant="body1" sx={{  textAlign: 'left', marginTop: '20px' }}>
          <h2 style={{color: '#091A44'}}>8. Variation of Terms</h2><br />
          [Swalook Global Pvt. Ltd.] is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review such Terms regularly to ensure you see all terms and conditions administering the utilization of this Website.
        </Typography>
            
            {/* 9. Assignment */}
        <Typography variant="body1" sx={{  textAlign: 'left', marginTop: '20px' }}>
            <h2 style={{color: '#091A44'}}>9. Entire Agreement</h2><br />
            These Terms, including any legal notices and disclaimers contained on this Website, constitute the entire agreement between [Swalook Global Pvt. Ltd.] and you about your use of this Website, and supersede all prior agreements and understandings concerning the same.
        </Typography>
            
            {/* 10. Entire Agreement */}
        <Typography variant="body1" sx={{  textAlign: 'left', marginTop: '20px' }}>
            <h2 style={{color: '#091A44'}}>10. Governing Law & Jurisdiction</h2><br />
            These Terms will be governed by and construed by the laws of the State of Delhi, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Delhi for the resolution of any disputes.
        </Typography>
            
          
      </Container>
    </>
  );
}

export default Terms;
