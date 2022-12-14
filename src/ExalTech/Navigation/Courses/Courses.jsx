import React from 'react';
import {Card} from "react-bootstrap";
import { useSelector } from 'react-redux';

const Courses = () => {
    const selector = useSelector((state)=>state.CoursesReducer)
    return (
        <div>
            {selector.map((item)=>{
                return(
                    <Card stye={{width: "18rem", display: "inline-block"}}>
                     <Card.Img src={item.CourseImg} width= "16rem" height= "300rem" />
                     <Card.Title>{item.couseTitle}</Card.Title>  
                     <Card.Text>{item.couseDesc}</Card.Text>
                    <Card />
                    </Card>
                )
            })}
        </div>
    );
};

export default Courses;