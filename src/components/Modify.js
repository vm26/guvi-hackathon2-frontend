import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import {url} from '../App'


const AddForm=(props)=>{
    useEffect(async()=>{
        const data=params.data;
        await axios.get(`${url}/getproducts/${data}`).then(res=>{setdata(res.data.data2[0]);});
        
    },[])
    const params=useParams();  
    const [data1,setdata]=useState({});   
    const navigate=useNavigate(); 
 
    const handleSubmit=async()=>{
     let res=await axios.post(`${url}/addrmodifyproducts`,{name:data1.name,desc:data1.desc,category:data1.category,
        imageurl:data1.imageurl,rent:data1.rent});
     if(res.data.statusCode==201 || res.data.statusCode==401)
     {
         navigate('/products');
     }
    }
    const onInputChange = (e) => {
        setdata(oldvalue => {
            return {
                ...oldvalue,
                [e.target.name]: e.target.value
            }
        })

    } 
    return(
        <div style={{"margin":"100px","marginRight":"30%"}}>
        <Form>            
        <Form.Group className="mb-3" >
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" value={data1.name} name='name' placeholder="Enter product name" onChange={onInputChange}/>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Product Description</Form.Label>
            <Form.Control type="text" value={data1.desc} name='desc' placeholder="Enter product description"  onChange={onInputChange}/>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" value={data1.category} name='category' placeholder="Enter product category"  onChange={onInputChange}/>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="url" value={data1.imageurl} name='imageurl' placeholder="Provide image URL"  onChange={onInputChange}/>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Rent per hour</Form.Label>
            <Form.Control type="rent" value={data1.rent}  name='rent' placeholder="Enter Rent per hour"  onChange={onInputChange}/>
        </Form.Group>

        <Button style={{color:"black"}} variant="primary" onClick={()=>handleSubmit()}>
            Submit
        </Button>
      
    </Form>
    
        </div>
    )
}
export default AddForm;