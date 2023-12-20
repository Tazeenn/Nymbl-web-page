import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function OurClients() {
    const clientImages = [
        'https://www.benymbl.co/img/clientlogos/legends.svg',
        'https://www.benymbl.co/img/clientlogos/citymax.svg',
        'https://www.benymbl.co/img/clientlogos/dunkin.svg',
        'https://www.benymbl.co/img/clientlogos/dubaiinvestments.svg',
        'https://www.benymbl.co/img/clientlogos/moy.svg',
        'https://www.benymbl.co/img/clientlogos/landmark.svg',
        'https://www.benymbl.co/img/clientlogos/strikeres.svg',
        'https://www.benymbl.co/img/clientlogos/sharjah.svg',
        'https://www.benymbl.co/img/clientlogos/mah.svg',
    ];

    const containerStyle = {
        backgroundColor: '#e8e8e8',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '200px',
        width: '100%',
        maxWidth: '100%',
    };

    return (
        <Container style={containerStyle}>
            <Row>
                <Col xs={12} md={6}>
                    <h6 style={{ textAlign: 'left' }}>Our Clients</h6>
                    <h1 style={{ color: '#a3a3a3', fontSize: '63px', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
                        Pleasure to <br />
                        work with.
                    </h1>
                </Col>

                <Col xs={12} md={6} className="text-right">
                    <Row>
                        {clientImages.map((imageUrl, index) => (
                            <Col key={index} xs={4} md={4} lg={4}>
                                <Image src={imageUrl} rounded style={{ width: '70%', height: 'auto', margin: '10px' }} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default OurClients;
