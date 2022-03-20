import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {url} from '../App'

const ServiceForm=(props)=>{
   
    const [service,setservice]=useState('');
    const navigate=useNavigate();
   
    const handleSubmit=async()=>{
     let res=await axios.post(`${url}/addservice`,{service});
     if(res.data.statusCode==201)
     {
         navigate('/products');
     }
    }
    return(

        <div style={{"margin":"100px","marginRight":"30%"}}>
            <Button style={{"marginBottom":"100px",color:"black"}} variant="primary" onClick={()=>navigate('/products')}>
           Back
        </Button>
                <Form>            
        <Form.Group className="mb-3" >
            <Form.Label>Service to add</Form.Label>
            <Form.Control type="text" placeholder="Enter a service" onChange={(e)=>setservice(e.target.value)}/>
        </Form.Group>
        

        <Button style={{color:"black"}}  variant="primary" onClick={()=>handleSubmit()}>
            Submit
        </Button>
      
    </Form>
    
        </div>
    )
}
export default ServiceForm;