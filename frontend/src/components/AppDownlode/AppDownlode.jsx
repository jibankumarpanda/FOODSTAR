import React from 'react'
import './AppDownlode.css'
import { assets } from '../../assets/assets'

const AppDownlode = () => {
    return (
        <div className='app-downlode' id='app-downlode'>
            <p>For Better Expeience Downlode<br /> CampusFood App</p>
                <div className="app-downlode-platfor">
                    <img src={assets.play_store} alt="" />
                    <img src={assets.app_store} alt="" />
                </div>
        </div>
    )
}

export default AppDownlode