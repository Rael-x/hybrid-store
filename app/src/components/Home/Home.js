import React from 'react'
import HomeSection from './HomeSection'
import Banner from '../Global/Banner'
import Slide from '../Global/Slide'
import Banner2 from '../Global/Banner2'
import Item from '../Global/Item'
import {items} from '../../data/items'
// CSS
import '../../css/hybrid.css'
import { slideInAnimation } from '../Global/func'

const Home = () => {
    React.useEffect(()=>{
        slideInAnimation('.home');
        document.title = 'Hybrid - The Best Prices On the Internet';
    }, [])
    return (
        <main className='home webpage-hidden'>
            <HomeSection type="big-slideshow">
                <Slide bgColor='blue' slide={1}/>
            </HomeSection>
            <HomeSection type='banner-slider'>
                <Banner banner={1} gradient='#4d4b47'>Laptops &amp; Gadgets</Banner>
                <Banner banner={2} gradient='#442921'>Shop for Pets</Banner>
                <Banner banner={3} gradient='#3c2729'>Furniture</Banner>
                <Banner banner={4} gradient='#0f0d0e'>Smart Accessories</Banner>
                <Banner banner={5} gradient='#33242e'>Home Design</Banner>
                <Banner banner={6} gradient='#4e400b'>Toys for Kids</Banner>
                <Banner banner={7} gradient='#483633'>Entertainment</Banner>
                <Banner banner={8} gradient='#1d1b0a'>Reading</Banner>
            </HomeSection>
            <HomeSection type='button-row'>
                
            </HomeSection>
            <h1 className='section-heading'>Trending Internationally</h1>
            <HomeSection type="item-row">
                <Item item={items[0]}/>
                <Item item={items[1]}/>
                <Item item={items[2]}/>
                <Item item={items[3]}/>
                <Item item={items[4]}/>
                <Item item={items[5]}/>
                <Item item={items[6]}/>
                <Item item={items[7]}/>
            </HomeSection>
            <HomeSection type="double-banner">
                <Banner2 banner={1}/>
                <Banner2 banner={2}/>
            </HomeSection>
        </main>
    )
}

export default Home
