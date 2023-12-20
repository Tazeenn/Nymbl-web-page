import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Industry() {
    const industryData = [
        {
            title: 'Food & Beverage',
            imageSrc: 'https://www.benymbl.co/img/home/food-and-beverage.avif',
            description: 'Intelligent and efficient management is the key to customer satisfaction and revenue for restaurants and cafes. Our system for food and beverage lets you manage all your tasks better, enhancing Customer service. Automate order management, payments, and inventory tracking with our integrated POS, payment and business solutions for food and beverage businesses.',
        },
        {
            title: 'Retails',
            imageSrc: 'https://www.benymbl.co/img/home/small-medium-enterprise.avif',
            description: 'An ecosystem of applications to manage your business. Whether you run a car wash, a flower shop, a clothing boutique or a grocery store, build it for success with a dedicated POS system. Grow your business and delight shoppers with Nymbl Retail. Our one-stop commerce platform enables you to sell everywhere and makes retail management a breeze.',
        },
        {
            title: 'Small & Medium Enterprise',
            imageSrc: 'https://www.benymbl.co/img/home/industry-retail.avif',
            description: 'Nymbl Suite offers powerful finance and business intelligence tools to streamline company-wide accounting processes. Track costs, control billing, and manage time/expenses with multi-currency support and powerful financial reports. With Nymbl reduce workloads, close the books faster, accelerate growth, and transform how you do business in the digital economy.',
        },
    ];

    const containerStyle = {
        marginTop: '50px',
    };

    const cardStyle = {
        width: '22rem',
        marginBottom: '20px',
        backgroundColor: '#fbe207', 
        border: '#fbe207',
        borderRadius: '20px',
        padding: '20px',
        textAlign: 'left',
    };

    const imageStyle = {
        width: '100%',
        height: '150px', 
        padding: '10px',
        objectFit: 'cover',
        borderRadius: '30px',
        marginBottom: '15px',
    };

    return (
        <Container style={containerStyle}>
            <Row>
                {industryData.map((industry, index) => (
                    <Col key={index} xs={12} md={4}>
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={industry.imageSrc} style={imageStyle} />
                            <Card.Body>
                                <Card.Title>{industry.title}</Card.Title>
                                <Card.Text>{industry.description}</Card.Text>
                                <Button variant="danger">Know more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Industry;
