import React from 'react'
import './Section1.css'

const Section1 = ({ header, designs }) => {
    return (
        <div className='section-1'>
            <div className='header-div'>
                <h3>{header}</h3>
            </div>

            <div className='section-items'>
                {designs.map((design) => (
                    <div className='section-item'>
                        <div className='grid-title'>{design.title}</div>
                        <div className='grid-description'>
                            {design.description}
                        </div>
                        <a href='/'>
                            <span>{design.linkName}</span> -{'>'}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section1
