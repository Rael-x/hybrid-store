import React from 'react'
import {Link} from 'react-router-dom'
import '../css/hybrid.css'
const Footer = () => {
    return (
        <footer className='hybridFooter'>
            <div className='email-newsletter-prompt'>
                <div className="newslet-1">
                    SUBSCRIBE TO NEWSLETTER
                </div>
                <div className="newslet-2">
                    Sign up to our weekly newsletter to receive the latest updates.
                </div>
                <form>
                    <input type="email" name="email" id="newsletter-email" />
                    <input type="submit" value="SUBSCRIBE" />
                </form>
            </div>
            <div className='footer-options'>
            <ul>
                <h3>Get to Know Us</h3>
                <li><Link to=''>Careers</Link></li>
                <li><Link to="">Blog</Link></li>
                <li><Link to="">About Hybrid</Link></li>
                <li><Link to="">Investor Relations</Link></li>
                <li><Link to="">Hybrid Devices</Link></li>
            </ul>
            <ul>
                <h3>Help &amp; Info</h3>
                <li><Link to="/track-order">Track An Order</Link></li>
                <li><Link to="/delivery-returns">Delivery &amp; Returns</Link></li>
                <li><Link to="/pro-deliveries">Express Deliveries</Link></li>
            </ul>
            <ul>
                <h3>Your Account</h3>
                <li><Link to="#">Orders</Link></li>
                <li><Link to="#">Purchase History</Link></li>
                <li><Link to="#">Wishlist</Link></li>
                <li><Link to="#">Cart</Link></li>
                <li><Link to="#">Personal Info</Link></li>
            </ul>
            <ul>
                <h3>Language</h3>
            </ul>
            </div>
            <div className='copyright'>Copyright © 2021 Hybrid.com. All rights reserved.</div>
        </footer>
    )
}

export default Footer
