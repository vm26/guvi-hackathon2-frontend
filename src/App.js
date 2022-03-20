import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import AddForm from './components/Form'
import Home from './components/Home'
import Contact from './components/Contact';
import AdminProducts from './components/Products';
import Login from './components/Login'
import Register from './components/Register';
import ServiceForm from './components/ServiceForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/RentalProducts';
import ModifyForm from './components/Modify'
import { GlobalProvider } from './context/GlobalContext'
import { useState } from 'react'

export const url = 'https://equipments-rental-service.herokuapp.com'



function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {

    setCartItems((oldvalue) => {
      let updated = false;
      const newList = oldvalue.map((d) => {
        let count = d.count || 1;
        if (d.title === item.title) {
          count++;
          updated = true;
        }
        return { ...d, count }
      })

      if (!updated) {
        newList.push({ ...item, count: 1 })
      }
      return newList;
    });
  }

    return (
      <GlobalProvider value={{cartItems,addToCart}}>
      <div>

        <h2 style={{ "textAlign": "Center", "color": "Red" }}>A1 Equipment Renting Services</h2>

        <Router>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<AdminProducts />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/form' element={<AddForm />} />
            <Route path='/rentalproducts' element={<Products />} />
            <Route path='/addservice' element={<ServiceForm />} />
            <Route path='/modifyform/:data' element={<ModifyForm />} />
            <Route path='/rentalproducts/:item' element={<Products />} />
          </Routes>

        </Router>

      </div>
      </GlobalProvider>
    );

    }

    export default App;

