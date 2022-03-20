
import { useNavigate  } from "react-router-dom"

import Button from 'react-bootstrap/Button';

const Header = (props) => {
  
  const navigate=useNavigate();
  return (
    <div style={{"padding":"10px"}} >
     {/* //p-4 mb-3 flex justify-between bg-slate-600 text-slate-100" */}
     <Button  style={{"marginRight":"40px",color:"black"}} variant="primary" onClick={()=>navigate('/')}>
               Home
            </Button>
     <Button style={{"marginRight":"40px" ,color:"black"}} variant="primary" onClick={()=>navigate('/contact')}>
              Contact Us
            </Button>
            
        
      
       
        <Button style={{"marginRight":"40px",color:"black"}} variant="primary" onClick={()=>navigate('/login')}>
               Login
            </Button>
            <Button style={{color:"black"}} variant="primary" onClick={()=>navigate('/register')}>
               New User? Register
            </Button>
        
              
            
       
      
    </div>
  )
}

export default Header;