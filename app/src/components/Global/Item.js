import React from 'react';
import StarRating from './StarRating';
import {Link} from 'react-router-dom';
import '../../css/hybrid.css';
const Item = (props) => {
    return (
        <Link to={`/store/${props.item.id}`} className='item'>
            <div className="item-image-container">
                <img src={`../img/items/item-${props.item.id}.jpg`} alt="item" className='item-image' />
            </div>
            <div className="item-info">
                <div className="item-name">
                    {props.item.name}
                </div>
                <div className="item-price">
                    {props.item.price}
                </div>
                <StarRating rating={4}/>
            </div>
        </Link>
    )
}

export default Item
