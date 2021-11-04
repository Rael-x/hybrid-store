import React from 'react'

import '../../css/hybrid.css'

const Banner = (props) => {
    return (
        <div style={{backgroundImage: `url(../img/ban-${props.banner}.jpg)`}} className='banner'>
            <div style={{backgroundImage: `linear-gradient(transparent, ${props.gradient})`}} className="banner-inner">
                <span>{props.children?props.children:'banner'}</span>
            </div>
        </div>
    )
}

export default Banner
