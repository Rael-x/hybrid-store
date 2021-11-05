import React from 'react'
import {Link} from 'react-router-dom'
import SideBarButton from './Sidebar/SideBarButton'
import '../css/hybrid.css'
const Header = () => {
    return (
        <header className='hybridHeader'>
            <div className='header-left'>
                <SideBarButton></SideBarButton>
                <Link to={'/home'} className='comp-Name'>Hybrid</Link>
            </div>
            <form>
                <input type="text" name='search' placeholder='Search brands, products &amp; categories' />
                <input type="submit" value="SEARCH" />
            </form>
            <div className='header-right'>
                <Link className='cart-icon-container' to='/cart'>
                    <img src="../icons/cart-blue-s.png" alt="cart" className='cart-icon' />
                    <div className='cart-counter'>
                        <div className="cart-count">
                            
                        </div>
                    </div>
                </Link>
                <Link to='/login' className='login-btn'>Login</Link>            
            </div>
        </header>
    )
}

export default Header
