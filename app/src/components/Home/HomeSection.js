import React from 'react'

import '../../css/hybrid.css'

const HomeSection = (props) => {  
    return (
        <>
            {props.type ==='big-slideshow'?
            // banner-slider
                <section className='homeSection-big-slideshow-outer-layer'>
                    <div className='homeSection-big-slideshow-container'>
                        {props.children}
                    </div>
                </section>
            :props.type ==='banner-slider'?
            // banner-slider
                <section className='homeSection-banner-slider-outer-layer'>
                    <div className='homeSection-banner-slider-container'>
                        {props.children}
                    </div>
                </section>
            :props.type === 'button-row'?
            // button-row
                <section className='homeSection-button-row'>
                    <div className='homeSection-button-row-item btn-1'>Black Friday Sales</div>
                    <div className='homeSection-button-row-item btn-2'>Early Christmas Deals</div>
                    <div className='homeSection-button-row-item btn-3'>Hybrid Fast Food</div>
                    <div className='homeSection-button-row-item btn-4'>Thansgiving Specials</div>
                    <div className='homeSection-button-row-item btn-5'>Hot Offers</div>
                </section>
            :props.type === 'double-banner'?
            // button-row
                <section className='homeSection-double-banner'>
                    {props.children}
                </section>
            :props.type === 'item-row'?
            // button-row
                <section className='homeSection-item-row'>
                    {props.children}
                </section>
            :
                <section className='homeSection'>
                    {props.children}
                </section>
            }
        </>
    )
}

export default HomeSection
