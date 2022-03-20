import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import {url} from '../App'

const AddForm=(props)=>{
   const navigate=useNavigate();
    const [name,setname]=useState('');
    const [desc,setdesc]=useState('');
    const [category,setcategory]=useState('');
    const [imageurl,setimageurl]=useState('');
    const [rent,setrent]=useState('');
    const handleSubmit=async()=>{
     let res=await axios.post(`${url}/addrmodifyproducts`,{name,desc,category,imageurl,rent});
     if(res.data.statusCode===201)
     {
         navigate('/products');
     }
    }
    return(
        <div style={{"margin":"100px","marginRight":"30%"}}>
        <Form>            
        <Form.Group className="mb-3" >
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text"  placeholder="Enter product name" onChange={(e)=>setname(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Product Description</Form.Label>
            <Form.Control type="text"  placeholder="Enter product description"  onChange={(e)=>setdesc(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Category</Form.Label>
            <Form.Control type="text"  placeholder="Enter product category"  onChange={(e)=>setcategory(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="url"  placeholder="Provide image URL"  onChange={(e)=>setimageurl(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Rent per hour</Form.Label>
            <Form.Control type="rent"  placeholder="Enter Rent per hour"  onChange={(e)=>setrent(e.target.value)}/>
        </Form.Group>

        <Button style={{color:"black"}} variant="primary" onClick={()=>handleSubmit()}>
            Submit
        </Button>
      
    </Form>
    
        </div>
    )
}
export default AddForm;