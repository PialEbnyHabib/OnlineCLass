import React from 'react';
import './cart.css';

const cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total , crc) => total + crc.Price,0)
    return (
        <div className="Bill"> 
            <h3 style={{fontSize:'35px'}}>Billing Sumary </h3>

            <br></br>

             <h4>Added Courses :{cart.length}</h4>
            
             <h4>Total :{total} ৳ </h4>
             <button className='btn btn-success' >Enroll </button>
        </div>
    );
};

export default cart;