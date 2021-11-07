import React from 'react'
import StarRating from '../Global/StarRating';
import { items } from '../../data/items';
import { cart } from '../../data/cart';
import '../../css/hybrid.css'
import { slideInAnimation } from '../Global/func';

const ProductPage = ({match}) => {    
    let initialBtn = {prompt: 'ADD TO CART', color: 'blue', func: e =>{addtoCart(e)}};
    const [button, setButton] = React.useState(initialBtn);
    const [quantityError, setQuantityError] = React.useState('');
    let cancelBtn = {prompt: 'REMOVE FROM CART', color: 'red', func: e =>{removeFromCart(e)}};
    React.useEffect(()=>{
        document.querySelector('html').scrollTop = 0;
        slideInAnimation('.product-page');
    }, [match.params.id])
    function removeFromCart (e) {
        e.preventDefault();
        cart.remove(items[match.params.id].id);
        setButton(initialBtn);
        cart.log();
    }

    function addtoCart (e) {
        e.preventDefault();
        let quantity = parseInt(e.target.children[0].value);
        if (!quantity) setQuantityError('Please enter a quantity to purchase.');
        else if (quantity > items[match.params.id].units) setQuantityError(`There are only ${items[match.params.id].units} units of this product available. `);
        else {
            let item = {id: items[match.params.id].id, name: items[match.params.id].name, price: parseFloat(items[match.params.id].price.substring(1)), qty: quantity} 
            setButton(cancelBtn);
            cart.add(item);
            cart.log();
            console.log(cart.size);
            setQuantityError('')
            setButton(cancelBtn);
        }
    }

    return (
        <main className='product-page webpage-hidden'>
            <div className='product-address'>Home/ Store/ {items[match.params.id].category}<span className='product-dir'>/ {items[match.params.id].name}</span></div>
            <section className='product-stage'>
                <div className='product-image-section'>
                    <div className='product-image-container'>
                        <img src={`../img/items/item-${match.params.id}.jpg`} alt="PRODUCT" className="product-image" />
                    </div>
                </div>
                <div className="product-details-section">
                    <h1 className='product-name'>{items[match.params.id].name}</h1>
                    <div className="product-star-rating">
                        <StarRating rating={4}/>
                    </div>
                    <h2 className='product-price'>{items[match.params.id].price}</h2>
                    <hr />
                    <p className='product-info'>{items[match.params.id].info}</p>
                    <hr />
                    <form onSubmit={button.func} className='product-button-row'>
                        <input type="number" name="quantity" id="product-quantity" placeholder="QUANTITY" />
                        <button className="product-add-to-wishlist">
                            <img src="../icons/add-s.png" alt="add" className="wishlist-icon" />
                            ADD TO WISHLIST
                        </button>
                        <input style={{backgroundColor: button.color}} type="submit" value={button.prompt} className="product-add-to-cart" />
                    </form>
                    <p className="product-quantity-error">{quantityError}</p>
                    <hr />
                    <label htmlFor="category">Category: </label>
                    <span id='category'>Products, producing, more products</span><br />
                    <label htmlFor="tags">Tags: </label>
                    <span id="tags">product</span>
                </div>
            </section>
        </main>
    )
}

export default ProductPage
