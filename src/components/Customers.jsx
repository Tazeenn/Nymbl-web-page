import React from 'react';

function Customers() {
    const containerStyle = {
        backgroundColor: '#ff2a00',
        padding: '50px 20px',
        textAlign: 'center',
    };

    const figureContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
    };

    const figureStyle = {
        flexBasis: '45%',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',  
    };

    const imageStyle = {
        width: '45%',
        borderRadius: '10px',
        marginBottom: '10px',
        marginTop: '30px',
    };

    const figCaptionStyle = {
        marginLeft: '20px',
        textAlign: 'left',
        width: '250px',
        marginTop: '150px',
    };

    const figpara = {
        color: 'white',
        fontSize: '17px',
    };

    const custom = {
        position: 'absolute', 
        top: '60px',  
        left: '220px',  
        width: '50%',
        backgroundColor: '#fbe207',
        zIndex: 2,
        height: '22%',
        borderRadius: '20px',
        textAlign: 'left',
        paddingTop: '10px',
        paddingLeft: '30px',
        paddingRight: '30px',
        boxShadow: '5px 5px 5px '
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ color: 'white', fontSize: '25px', fontWeight: 'bold' }}>Customers speak</h2>
            <div style={figureContainerStyle}>
                {/* Figure 1 */}
                <span>
                    <figure style={figureStyle}>
                        <img
                            src="https://www.benymbl.co/img/home/the-legend.png"
                            alt="Customer 1"
                            style={imageStyle}
                        />
                        <div style={custom}>
                            <h3 style={{fontSize: '18px', fontWeight: 'bolder'}}>Assen Valev</h3>
                            <p style={{fontSize: '12px', fontWeight: 'bolder'}}> 
                                Director of Operations THE LEGENDS RESTAURANT & CAFE
                            </p>
        
                        </div>
                        <figcaption style={figCaptionStyle}>
                            <p style={figpara}>
                                Nymbl is the company that will exceed your expectations. As a new
                                business, we choose the company between the many companies in the
                                market, and the main reason is the professional way the company
                                treats their potential customers.
                            </p>
                        </figcaption>
                    </figure>
                </span>
                {/* Figure 2 */}
                <span>
                    <figure style={figureStyle}>
                        <img
                            src="https://www.benymbl.co/img/home/celebration-cafe.png"
                            alt="Customer 2"
                            style={imageStyle}
                        />
                        <div style={custom}>
                            <h3 style={{fontSize: '18px', fontWeight: 'bolder'}}>Sukhilesh Owner</h3>
                            <p style={{fontSize: '12px', fontWeight: 'bolder'}}> 
                                Celebrations Cafe
                            </p>
        
                        </div>
                        <figcaption style={figCaptionStyle}>
                            <p style={figpara}>
                                Choosing Nymbl POS for our restaurant is one of the best decisions
                                we made. We have their complete package of restaurant POS and
                                inventory management. The sale report for every shift closing
                                gives a complete understanding of sales per category.
                            </p>
                        </figcaption>
                    </figure>
                </span>
            </div>
        </div>
    );
}

export default Customers;
