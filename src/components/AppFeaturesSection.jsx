import React from 'react';
import Card from 'react-bootstrap/Card';

export default function AppFeaturesSection() {
    const headingStyle = {
        color: 'white',
        textAlign: 'center',
        paddingTop: '80px', 
        fontSize: '4rem',
        fontWeight: 'bold',
    };

    const containerStyle = {
        background: 'linear-gradient(to bottom, #ff4900, #ff0100)',
        height: '800px',
        borderBottomLeftRadius: '500px',
        borderBottomRightRadius: '500px',
        position: 'relative',
    };

    const imgStyle = {
        position: 'absolute',
        bottom: 0,
        top: 250,
        left: '35%',
        width: '33%',
        zIndex: 1,
    };
    const imglogoStyle = {
        position: 'relative',
        bottom: 0,
        top: '-1%',
        width: '22%',
        zIndex: 2,
        right: '-17%',
    };
    const imgScanStyle = {
        position: 'relative',
        zIndex: 3,
        width: '13%',
        top: 300,
        right: '-10%',
    };

    const imgScanStyle1 = {
        position: 'relative',
        zIndex: 3,
        width: '10%',
        top: 200,
        right: '24%',
    }

    const imgScanStyle2 = {
        position: 'relative',
        zIndex: 3,
        width: '13%',
        top: 400,
        right: '35%',
    }

    const cardStyle = {
        width: '18rem',
        marginTop: '-170px', 
        marginLeft: '200px',
        marginBottom: '80px',
        backgroundColor: 'transparent',
        color: 'white',
        border: 'none',
    };
    const mainCardStyle = {
        marginTop: '-80px',
    };

    return (
        <section className='container-block' style={containerStyle}>
            <h1 style={headingStyle}>
                Everything you need
                <br />
                to succeed in one place.
            </h1>

            <section>
            <p style={{ color: 'black', zIndex: '3', marginTop: '-50px'}}>
                 <br /> 
                </p>
                <img src='https://www.benymbl.co/img/home/benifits/pay.svg' alt='Mobile' style={imgStyle} />
                
            </section>
            <img src='https://www.benymbl.co/img/home/benifits/nymbl_pay.svg' alt='Pay' style={imglogoStyle} />
            <img src='https://media.tenor.com/ExQxWI9uIQoAAAAi/iphone-iphone-emoji.gif' alt='Pay' style={imgScanStyle} />
            <img src='https://media1.tenor.com/m/DAzwk9MinX8AAAAC/ahtf.gif' alt='Scan' style={imgScanStyle1} />
            <img src='https://media.tenor.com/b791B77TToMAAAAi/black-money.gif' alt='Card' style={imgScanStyle2} />



            <div className="row mt-5" style={mainCardStyle}>
                <div className="col-md-6 order-md-1">
                    <Card style={{ ...cardStyle, position: 'relative', top: '-20px', right: '20px' }}>
                        <Card.Img variant="top" src="https://drive.google.com/file/d/1fizqfMatSj7KFneqCQzqH6fjBZfWaj1N/view?usp=sharing" />
                        <Card.Body>
                            <Card.Title style={{textAlign: 'left'}}>Security</Card.Title>
                            <Card.Text style={{textAlign: 'left'}}>
                            Bleeding-edge security standards and certifications, with rolling upgradation to deliver secure performance.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-6 order-md-2">
                    <Card style={{ ...cardStyle, position: 'relative', top: '-20px', right: '20px' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title style={{textAlign: 'right'}}>Better Operations</Card.Title>
                            <Card.Text style={{textAlign: 'right'}}>
                            Be it any business, run all orders through a single, easy to use point of sale and access 24/7 support.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-6 order-md-3">
                    <Card style={{ ...cardStyle, position: 'relative', top: '100px', right: '20px' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title style={{textAlign: 'left'}}>Better Innovation</Card.Title>
                            <Card.Text style={{textAlign: 'left'}}>
                            Delight your employees and your customers with a clean, simple user experience and improve regular spending.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-6 order-md-4">
                    <Card style={{ ...cardStyle, position: 'relative', top: '100px', right: '20px' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title style={{textAlign: 'right'}}>Better Control</Card.Title>
                            <Card.Text style={{textAlign: 'right'}}>
                            The objective of our products is always at the end of the day to deliver control to the business owner. Our products generate actionable intelligence that helps in delivering the control.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    );
}
