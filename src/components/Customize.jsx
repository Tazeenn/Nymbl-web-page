import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const customizeImages = {
  width: '100%',
  maxWidth: '100%',
};

function Customize() {
  return (
    <Container style={{ marginTop: '200px' }}>
      <Row>
        <Col xs={12} md={4}>
          <Card style={{ border: 'none' }}>
            <Card.Body style={{ textAlign: 'left' }}>
              <Card.Title style={{ fontSize: '40px', color: '#ff2a00', fontWeight: 'bolder' }}>
                Customizable solutions for every type of business.
              </Card.Title>
              <br />
              <Card.Text style={{ fontSize: '18px' }}>
                Nymbl PAY allows new and growing medium and small businesses to scale up faster by becoming a payment
                service provider with multiple benefits.
              </Card.Text>
              <Button
                variant="outline-danger"
                style={{
                  alignSelf: 'flex-start', 
                  border: 'solid 2px',
                  borderRadius: '30px',
                  fontWeight: 'bold',
                  width: '160px',
                  padding: '10px',
                }}
              >
                Know More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        
        <Col xs={12} md={8}>
          <Row className="d-flex justify-content-end">
            <Col xs={4}>
              <Image
                src="https://www.benymbl.co/img/home/advertisement/pay1.png"
                alt="Image 1"
                style={customizeImages}
                fluid
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://www.benymbl.co/img/home/advertisement/pay2.png"
                alt="Image 2"
                style={customizeImages}
                fluid
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://www.benymbl.co/img/home/advertisement/pay3.png"
                alt="Image 3"
                style={customizeImages}
                fluid
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Customize;
