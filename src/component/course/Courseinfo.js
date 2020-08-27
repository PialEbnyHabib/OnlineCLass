import React, { useState } from 'react';
import './Courseinfo.css';
import coursedata from '../../Coursedata/coursedata'
import Showcourse from '../Showcourse/Showcourse/Showcourse';
import Coursedata from '../../Coursedata/coursedata';
import Cart from '../Cart/Cart';

const Courseinfo = () => {
    // console.log(coursedata);
    const course = coursedata.slice(0,12); 
    const [courses,setcourses] = useState(course);
    const [cart,setCart] = useState([]);
    
    const totalPrice = cart.reduce((total,course) => total +course.price,0);
    
    const handleAddCourse= (Showcourse) =>{
        console.log(Showcourse.Price);
        const newCart = [...cart,Showcourse];
        setCart(newCart);
        
    }

    return (
            <div className="container-fluid d-flex"> 
                <div class='Info col-md-8'>
            <h1>Choose Your Course</h1>
            <ul>
                { courses.map(course => <Showcourse handleAddCourse ={handleAddCourse} Showcourse={course} ></Showcourse>  )} 
            </ul>
        </div>

            <div class='col-md-4 text-center cart-css'> 
                <Cart cart={cart}></Cart>
            </div> 
        </div>

              
               
    );
};

export default Courseinfo;