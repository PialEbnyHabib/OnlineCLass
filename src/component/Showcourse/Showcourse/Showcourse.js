import React from 'react';
import './Showcourse.css';

const Showcourse = (props) => {
   


    return (
        
        <div class='info '>
        <div class=' row showcourse d-flex justify-content-between '>

            <div className="col-md-6" >

            <img className="images" src={props.Showcourse.img}></img> 
            </div>

            <div className="col-md-6">
            <h4> Course name : {props.Showcourse.name} </h4>
             <h3>Price : {props.Showcourse.Price} ৳ </h3>
             <button class="btn btn-success" onClick={()=> props.handleAddCourse(props.Showcourse)}>Add Course</button>

            </div>
             
        </div>
        </div>
       
        
    );
};

export default Showcourse;