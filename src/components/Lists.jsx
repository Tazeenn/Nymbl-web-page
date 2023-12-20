import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Lists() {
    const containerStyle = {
        backgroundColor: '#ff2a00',
        padding: '20px',
    };

    const headingStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '10px',
    };

    const listGroupStyle = {
        border: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    };

    const listContainerStyleLeft = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        color: 'white',
        textAlign: 'left',
    };

    const listContainerStyleRight = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'right',
        textAlign: 'right',
        color: 'white',
    };

    const transparentItemStyle = {
        background: 'transparent',
        border: 'none',
        color: 'white',
        cursor: 'pointer', 
    };

    const transparentItemStyle1 = {
        background: 'transparent',
        border: 'none',
        color: 'white',
        cursor: 'pointer', 
        fontSize: '13px'
    }

    return (
        <div style={containerStyle}>
            <ListGroup horizontal style={listGroupStyle}>
                <div style={listContainerStyleLeft}>
                    <h5 style={headingStyle}>Nymbl</h5>
                    <ListGroup.Item style={transparentItemStyle} action>
                        Home
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle} action>
                        Company
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle} action>
                        Careers
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle} action>
                        Blogs
                    </ListGroup.Item>
                </div>

                <div style={listContainerStyleLeft}>
                    <h5 style={headingStyle}>Point Of Sale</h5>
                    <ListGroup.Item style={transparentItemStyle} action>
                        Nymbl POS
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle} action>
                        Restaurants
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle} action>
                        Retail
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle} action>
                        Nymbl Van Sales
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle} action>
                        Pricing
                    </ListGroup.Item>
                </div>

                <div style={listContainerStyleLeft}>
                    <h5 style={headingStyle}>Payments</h5>
                    <ListGroup.Item style={transparentItemStyle} action>
                        Nymbl PAY Terminal
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle} action>
                        Nymbl PAY Application
                    </ListGroup.Item>
                </div>

                <div style={listContainerStyleLeft}>
                    <h5 style={headingStyle}>ERP</h5>
                    <ListGroup.Item style={transparentItemStyle} action>
                        ERP
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle} action>
                        Business Intelligence
                    </ListGroup.Item>
                </div>

                
                <div style={listContainerStyleRight}>
                    <h5 style={headingStyle}>Contact Us</h5>
                    <ListGroup.Item style={transparentItemStyle1} action>
                        106, SunTech Tower, Dubai Silicon Oasis, Dubai | United Arab Emirates.
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle1} action>
                        Office : +971 4 884 9751. Sales : +971-56 505 0456
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle1} action>
                        <h5>Support</h5>
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle1} action>
                        Email : support@benymbl.co
                    </ListGroup.Item>
                    <ListGroup.Item style={transparentItemStyle1} action>
                        Call:+971 4 884 9751
                    </ListGroup.Item>
                </div>
            </ListGroup>
        </div>
    );
}

export default Lists;
