import React from 'react'
import {Link} from 'react-router-dom'

import '../../css/hybrid.css'

const Slide = (props) => {
    return (
        <div style={{backgroundImage: `url(../img/slide-${props.slide}.jpg)`}} className='big-slide'>
            <div className="big-slide-inner">
                <span>Household Interiors, seliing for 15% off.</span>
                <Link to='/store' className="shop-prompt">Shop Now</Link>
            </div>
        </div>
    )
}

export default Slide
