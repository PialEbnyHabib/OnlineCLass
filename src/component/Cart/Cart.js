import React from 'react';

const cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total , crc) => total + crc.Price,0)
    return (
        <div> 
            <h3>Billing Sumury</h3>
             <h4>Added COurses :{cart.length}</h4>
             <h4>Total :{total} ৳ </h4>
        </div>
    );
};

export default cart;