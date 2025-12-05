import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category, setCategory }) => {
    const { food_list } = useContext(StoreContext)

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list && food_list
                    .filter((item) => category === "All" || item.category === category)
                    .map((item, index) => (
                        <div 
                            key={index} 
                            className='food-item'
                            onClick={() => setCategory(item.category)}
                        >
                            <div className="food-item-img-container">
                                <img 
                                    className={category === item.category ? "active" : ""} 
                                    src={item.image} 
                                    alt={item.name} 
                                />
                            </div>
                            <div className="food-item-info">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p className="food-item-price">${item.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FoodDisplay;