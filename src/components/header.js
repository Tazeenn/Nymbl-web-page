import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function AppHeader() {
  const navbarStyle = {
    backgroundColor: '#ff2a00',
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: '23px',
    paddingRight: '34px',
    paddingTop: '25px',
    paddingBottom: '20px'
  };

  const linkStyle = {
    color: 'white',
  };

  const buttonStyle = {
    borderRadius: '30px',
    width: '200px',
    fontWeight: 'bold',
    color: 'black',
  };

  const logoStyle = {
    width: '170px', 
    height: 'auto', 
    paddingLeft: '20px'
  };

  return (
    <>
      <Navbar expand="lg" style={{ ...navbarStyle, position: 'fixed', width: '100%', zIndex: 1000 }}>
        <Container fluid className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#home">
            <Image
              src={`https://www.benymbl.co/img/logo.svg`}
              alt="Logo"
              fluid
              style={logoStyle}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#products" className="mx-3" style={linkStyle}>
                Products
              </Nav.Link>
              <Nav.Link href="#hardware" className="mx-3" style={linkStyle}>
                Hardware
              </Nav.Link>
              <Nav.Link href="#support" className="mx-3" style={linkStyle}>
                Support
              </Nav.Link>
              <Nav.Link href="#company" className="mx-3" style={linkStyle}>
                Company
              </Nav.Link>
              <Nav.Link href="#contact" className="mx-3" style={linkStyle}>
                Contact
              </Nav.Link>
              <Button variant="light" style={buttonStyle}>
                Request a Demo
              </Button>{' '}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
