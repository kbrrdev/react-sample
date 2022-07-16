import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-left'>
                <div className='banner-left-container'>
                    <div className='banner-title'>
                        Your Complete Website Design Solution
                    </div>
                    <div className='banner-description'>
                        With Wix’s intuitive technology and powerful built-in
                        features you’ll have the creative freedom to design a
                        website you’re proud of.
                    </div>
                    <div>
                        <button className='get-started'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
