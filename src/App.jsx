
import './App.css'
import { Routes, Route as Router } from 'react-router-dom'
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import CartList from './Components/CartList';
import Home from './Components/Home';
import Register from './Components/Register';
import Profile from './Components/Profile/Profile';

function App() {
  

  return (
    <>
    <Routes>
      <Router path="/" element={<Home/>}/>
      <Router path="/cart" element={<CartList/>}/>
      <Router path="/productlist" element={<ProductList/>}/>
      <Router path="/productdetail/:id" element={<ProductDetail/>}/>
      <Router path="/register" element={<Register/>}/>
      <Router path="/profile" element={<Profile/>}/>


    </Routes>

    </>
  )
}

export default App
