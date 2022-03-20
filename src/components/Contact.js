import React,{useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {url} from '../App'
import SpinnerShow from './Spinner';

const Contact=()=>{
const [name,setname]=useState('');
const [details,setdetails]=useState('');
const [message,setmessage]=useState('');
const [spinner,setspinner]=useState(false);
    const navigate=useNavigate();
    const savequeries=async()=>{
        let res=await axios.post(`${url}/addqueries`,{name,details});
        setspinner(true);
        if(res.data.statusCode===201)
        {   setspinner(false);
            setmessage(res.data.message)
            navigate('/');
       
       }
    }
    return(
        
        <div>
            
            <Button  style={{color:"black"}} variant="primary" onClick={()=>navigate('/')}>
               Home
            </Button>
               <div style={{"margin":"30px"}}>

               <div>
                   <h4>Location:</h4><br></br>
                   14,T.Nagar,Chennai-6000028
               </div>
               <br></br>
               <div>
               <h4>Phone:</h4><br></br>987654321,044-2345678
               </div>
               </div>
               <div style={{"marginLeft":"20%","marginRight":"20%"}}> 
        <Form>
            
            <Form.Group className="mb-3" >
                <Form.Label>Product</Form.Label>
                <Form.Control type="product" placeholder="Enter Product Name" onChange={(e)=>setname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Details</Form.Label>
                <Form.Control type="details" placeholder="please specify your queries here.." onChange={(e)=>setdetails(e.target.value)} />
            </Form.Group>

            <Button style={{color:"black"}} variant="primary" onClick={()=>savequeries()}>
                Submit
            </Button>
          
         {
                    spinner?
                    <SpinnerShow/>:
                    <></>
                }
        </Form>
        {
                message ?
    <div style={{textAlign:'center',color:'red'}}>{message}
        </div>                        
                    : <></>}
          
        </div>
               
        </div>
    )

}
export default Contact;