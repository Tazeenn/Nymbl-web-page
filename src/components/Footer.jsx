import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#ff2a00', 
    color: 'white',
    padding: '20px',
    cursor: 'pointer'
  };

  const copyrightStyle = {
    textAlign: 'left',
  };

  const socialMediaStyle = {
    textAlign: 'right',
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <hr style={{ borderColor: 'white' }} /> 
        <Row>
          <Col xs={12} md={6} style={copyrightStyle}>
            &copy; nymbl 2023. All Rights Reserved.
          </Col>
          <Col xs={12} md={6} style={socialMediaStyle}>
            <div>
              <span style={{ marginRight: '20px' }}>Privacy</span>
              <span>Terms and Conditions</span>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src="../../assets/images/linkedin.png" alt="LinkedIn" style={{ marginRight: '10px' }} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src="../../assets/images/facebook.png" alt="Facebook" style={{ marginRight: '10px' }} />
              </a>
              <a href="../../assets/images/lyoutube.png" target="_blank" rel="noopener noreferrer">
                <img src="youtube-logo.png" alt="YouTube" style={{ marginRight: '10px' }} />
              </a>
              <a href="../../assets/images/instagram.png" target="_blank" rel="noopener noreferrer">
                <img src="instagram-logo.png" alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
