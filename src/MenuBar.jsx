import React from 'react'
import wixImg from './img/wix.png'
import './MenuBar.css'

const MenuBar = () => {
    return (
        <div className='menuBar'>
            <div className='leftMenu'>
                <img className='logo' src={wixImg} alt='' />

                <div className='links'>
                    <a href='/'>Creation</a>
                    <a href='/'>Business</a>
                    <a href='/'>Growth</a>
                    <a href='/'>Resource</a>
                </div>
                <div className='line'></div>
                <div className='links'>
                    <a href='/'>Enterprise</a>
                    <a href='/'>Pricing</a>
                    <a href='/'>Support</a>
                </div>
            </div>

            <div className='rightMenu'>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default MenuBar
