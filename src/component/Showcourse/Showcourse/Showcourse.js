import React from 'react';
import './Showcourse.css';

const Showcourse = (props) => {


    return (
        
        <div class='info'>
        <div class='showcourse '>
             <h4> Course name : {props.Showcourse.name} </h4>
             <h3>Price : {props.Showcourse.Price} </h3>
             <button class="btn btn-success" onClick={()=> props.handleAddCourse(props.Showcourse)}>Add Course</button>
        </div>
        </div>
       
        
    );
};

export default Showcourse;