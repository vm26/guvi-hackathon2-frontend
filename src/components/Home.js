import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { url } from '../App';
import Header from './Header'

import {useNavigate} from 'react-router-dom'

const Home=()=>{
    const[categories,setcategories]=useState([])   
    const[services,setservices]=useState([])  
    
    useEffect(async()=>{
        let res=await axios.get(`${url}/getcategories`);
        setcategories(res.data.data);
        let response=await axios.get(`${url}/getServices`);
        setservices(response.data.data);
        
    },[])
    return(
        
        <div style={{"padding":"50px"}}>
           
           
            
           <Header/> 
          <h4>Services provided by our company</h4>
          {
                services.length?
                    <div>
                        {
                        services.map((item,index)=>{
                            return(
                            <div>
                            <a style={{"color":"blue"}} key={index}>{item}</a>
                           </div>
                            )
                        })
                       }           
                    </div>
                :
                <></>
            }
          <h4>Categories of equipments available for rentals</h4>
            {
                categories.length?
                    <div>
                        {
                        categories.map((item,index)=>{
                            return(
                            <div>
                            <a style={{"color":"blue"}} key={index}>{item}</a>
                           </div>
                            )
                        })
                       }           
                    </div>
                :
                <></>
            }
        </div>
    )
}
export default Home;