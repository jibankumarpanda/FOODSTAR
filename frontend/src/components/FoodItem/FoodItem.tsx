import React from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';

interface FoodItemProps {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

const FoodItem = ({ id, name, price, description, image }: FoodItemProps) => {
    return (
        <div className='food-item'>
           <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
           </div>
           <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
           </div>
        </div>
    );
}

export default FoodItem;  // Make sure this line is present