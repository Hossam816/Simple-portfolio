import React from 'react'
import { CardItems } from './CardItems'
import '../styles/PriceStyle.css'
import {Link} from 'react-router-dom'

function PriceCard() {
    return (
        <div className='card'>
            <div className='card-container'>
                {CardItems.map((item, index)=> {
                    return(
                        <div className='card-text'>
                            <p>- {item.heading} -</p>
                            <span className='bar'></span>
                            <h1>${item.price}</h1>
                            <p>- {item.days} -</p>
                            <p>- {item.pages }-</p>
                            <p>- Featured -</p>
                            <p>- Responsive Design -</p>
                            <Link to="/contact" > <button className='btn btn-warning btn-lg btn-block'>PURCHASE NOW</button></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PriceCard