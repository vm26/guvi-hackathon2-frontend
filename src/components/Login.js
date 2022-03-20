import React,{useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {useNavigate } from 'react-router-dom';
import axios from 'axios'
import Header from './Header'
import {url} from '../App'

const Login=()=>{
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [message,setmessage]=useState('');
    const navigate=useNavigate();
    const handleSubmit=async()=>{       
        let res= await axios.post(`${url}/login`,{email,password});     
        
        if(res.data.statusCode==200 && res.data.data=='Admin'){         
            navigate('/products');
        }
        else if(res.data.statusCode==200 && res.data.data!='Admin'){
            navigate('/rentalproducts');
        }
        else
        {
            setmessage(res.data.message);
        }
    }
    return(
        
        <div style={{"marginLeft":"30%","marginRight":"30%"}}> 
         <Button style={{color:"black"}} variant="primary" onClick={()=>navigate('/')}>
               Home
            </Button>
        <h3 style={{color:"blue","textAlign":"center",marginTop:"10%"}}>Login</h3>
        <Form>
            
            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  onChange={(e)=>setpassword(e.target.value)}/>
            </Form.Group>

            <Button  style={{color:"black"}}variant="primary" onClick={()=>handleSubmit()}>
                Submit
            </Button>
          
        </Form>
        {
            message?
            <div style={{"color":"red"}}>{message}</div>
            :
            <></>
        }
          
        </div>
    )
}
export default Login;