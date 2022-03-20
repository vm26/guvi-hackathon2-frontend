import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import {url} from '../App'
import axios from 'axios'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react';


const RentalProducts=()=>{
      const {cartItems}=useContext(GlobalContext);
    const [val,setVal]=useState('');
    const navigate=useNavigate();
    const [products,setproducts]=useState([]);
    const[categories,setcategories]=useState([]) ;
    const [showModal,setShowModal]=useState(false);
    const [showCartModal,setShowCartModal]=useState(false);
    useEffect(async()=>{
       all();
       let res1=await axios.get(`${url}/getcategories`);
        setcategories(res1.data.data);
       
           },[]);
           const all=async()=>{
            let res=await axios.get(`${url}/getproducts`);
            setproducts(res.data.data);
           }

          const checkcategory=async(item)=>{
            let res=await axios.get(`${url}/getproductsbycategory/${item}`);
            setproducts(res.data.data2);
          }
        return(
            
        <div>
            <Button style={{marginRight:"1000px",color:"black"}} variant="primary" onClick={()=>navigate('/')}>
               Home
            </Button>
            <Button style={{color:"black"}}  onClick={()=>setShowCartModal(true)}>
            Cart {
                cartItems.length ? `(${cartItems.length})` : 0
              }
            </Button>
            <Modal title='Your Cart!' showFooter open={showCartModal} onClose={() => setShowCartModal(false)}>
              
          {
          cartItems.length ? (
                <div>
                  <h4>List of Products</h4>
                  <ul>
                   
                  </ul>
                </div>
              ) : (
                <div className='text-center p-4'>
                  <h1 className='text-lg'>Continue Shopping!</h1>
                </div>
              )

             
            
          }
        </Modal>
            <div>
                <span style={{marginRight:"100px"}}>
                <label>Search here:</label>
            <input style={{border:"1px solid black"}} type="text" onChange={(e)=>{setVal(e.target.value)}}/>
                </span>
                <span>
                <Button  style={{color:"black"}} onClick = {()=>{setShowModal(true)}}> Select the category to filter</Button>
                 </span>
            
              
                <Modal open={showModal} onClose={()=>{setShowModal(false)}} for='category'>  
                
         <div >
         <Button style={{margin:"5px",color:"black"}} onClick={()=>{all()}}>All</Button>
             {
                 categories.map((item,index)=>{
                     return(
                <Button  style={{margin:"5px",color:"black"}} onClick={()=>checkcategory(item)}>{item}</Button>
                     )
                 })
             }
            
            </div>
           

      </Modal>
               
                  
           
          
           </div>
            
                {
            products.length?
products.map((item)=>{
    if(item.name.toLowerCase().includes(val.toLowerCase()))
    return(
       <Card key={item.name} data={item} role='users'/>
    )
    else
    return null;
})
:<></>
            }
            
            

        </div>
    )
}
export default RentalProducts;