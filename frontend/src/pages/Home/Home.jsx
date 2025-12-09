import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/Exploremenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownlode from '../../components/AppDownlode/AppDownlode';

const Home = () => {

    const [category,setCategory] = useState("All");
     return (
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <AppDownlode catagory={category}/>
        </div>
    )
}

export default Home