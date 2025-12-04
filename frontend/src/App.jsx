import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
 
  const[showLogin,setShowLogin]=useState(false);
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
    </div>
  )
}

export default App
