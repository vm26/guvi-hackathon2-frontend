import React,{useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const Card=(props)=>{
 
  const {addToCart}=useContext(GlobalContext);
   
    const navigate=useNavigate();
    return (
        <div style={{"border" :"1px solid black","margin":"20px","padding":"10px","display":"inline-block","height":"500px",
        "width":"500px","textOverflow":"ellipsis" }}>
             <img src={props.data.imageurl} style={{"height":"200px","width":"200px"}} alt='image'/>
            <p><b>Name:</b>{props.data.name}</p>
            <p><b>Description:</b>{props.data.desc}</p>
            <p><b>Category:</b>{props.data.category}</p>
            <p><b>Rent/hour:</b>{props.data.rent}</p>
           {
               props.role?
               <Button style={{color:"black"}} variant="primary" onClick={(event)=>
                {event.preventDefault();
                addToCart({name:props.data.name})
                }}>
              Add to Cart
            </Button>
            :
            <Button style={{color:"black"}} variant="primary" onClick={()=>{navigate(`/modifyform/${props.data.name}`)}}>
            Modify
         </Button>
           }
           
        </div>
    )
}
export default Card;