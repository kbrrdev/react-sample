import React from 'react'
import './Success.css'

const Success = () => {
    const setups = [
        'Professional Features',
        'Design Elements',
        'Advanced Functionality',
        'Built-In Tools',
        'Marketing and SEO',
        'Mobile Experience'
    ]

    return (
        <div className='success-container'>
            <h2 className='success-title'>Set Yourself Up for Success</h2>
            <div className='success-description'>
                Wix empowers you to bring your ideas to life. With our
                all-inclusive web builder you can design, manage and grow your
                online presence—all from one powerful platform.
            </div>
            <div className='setup-items'>
                {setups.map((setup) => (
                    <div className='setup-item'>{setup}</div>
                ))}
            </div>
        </div>
    )
}

export default Success
