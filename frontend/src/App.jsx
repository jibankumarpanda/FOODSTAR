import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/loginpopup/loginpopup';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      </div>
      <Footer />
    </>
  );
}

export default App;