import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/Exploremenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownlode from '../../components/AppDownlode/AppDownlode';
import Cart from '../Cart/Cart';

const Home = () => {

    const [category,setCategory] = useState("All");
    // In Home.jsx
return (
    <div id="home">  
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownlode id="app-download" category={category}/>
        <Cart id="cart-items" category={category}/>
    </div>

    )
}

export default Home