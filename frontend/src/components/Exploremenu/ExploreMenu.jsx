import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,SetCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
           <h1>Explore our menu</h1>
            <p className='explore_menue-text'>Explore a world of taste with our easy-to-navigate menu. Browse categories, discover daily specials, and filter by cuisine or diet to find your perfect meal. Your favorite dishes are just a few clicks away.</p>
            <div className="explore-menu-list">
                {menu_list && menu_list.map((item, index) => {
                    return (
                    <div onClick={()=>SetCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name}/>
                        <p>{item.menu_name}</p>
                    </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu