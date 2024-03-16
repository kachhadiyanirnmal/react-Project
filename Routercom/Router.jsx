import React from 'react'
import { BrowserRouter, Route, Routes , NavLink} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Error404 from './Error404'
import "./index.css";
import Car from './service/Car'
import Bike from './service/Bike'
import Service from './service/Service'
// import Product from './product/product'
import Productpage from './product/Productpage'

export default function Router() {
  return (
    <div className='mt-3'>
      <BrowserRouter>
      <div className='Navdiv d-flex justify-content-center align-items-center gap-5 list-unstyled'>
        <NavLink to={"/home"} className="text-decoration-none text-black h5">Home</NavLink>
        <NavLink to={"/about"} className="text-decoration-none text-black h5">About</NavLink>
        <NavLink to={"/service"} className="text-decoration-none text-black h5">Service</NavLink>
        <NavLink to={"/product"} className="text-decoration-none text-black h5">Product</NavLink>
      </div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:Productid" element={<Productpage/>}/>
        <Route path="/service">
          <Route index element={<Service/>}/>
          <Route path="car" element={<Car/>}/>
          <Route path="bike" element={<Bike/>}/>
        </Route>
          <Route path="*" element={<Error404/>}/>         
        </Routes>
      </BrowserRouter>
    </div>
  )
}
