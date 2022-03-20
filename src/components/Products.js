import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import {url} from '../App'
import axios from 'axios'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom';

const AdminProducts=()=>{
    const navigate=useNavigate();
    const [products,setproducts]=useState([]);
    const getproducts=async()=>{
       let res=await axios.get(`${url}/getproducts`);
       setproducts(res.data.data);
           }
        return(
        <div>
           
<span style={{marginRight:"30px"}}>
<Button style={{color:"black"}} variant="primary" onClick={()=>navigate('/form')}>
               Add products
            </Button>
</span>
          
           
            <span style={{marginRight:"30px"}}>
            <Button  style={{color:"black"}} variant="primary" onClick={()=>navigate('/addservice')}>
               Add Service
            </Button>
            </span>
            <span style={{marginRight:"100px"}}>
            <Button  style={{color:"black"}}variant="primary" onClick={()=>getproducts()}>      
               Get products
            </Button>
            </span>
            <Button style={{color:"black"}} variant="primary" onClick={()=>navigate('/login')}>
          Logout
        </Button>
            <div>
                {
            products.length?
products.map((item)=>{
    return(
       <Card key={item.name} data={item}/>
    )
})
:<></>
            }
            </div>
            




            
        </div>
    )
}
export default AdminProducts;