import React from 'react'

import '../../css/hybrid.css'

const StarRating = (props) => {
    let stars = [];
    for (let i=0; i < props.rating; i++) {
        stars.push({key: i, emp: 0});
    }
    return (
        <div className='star-rating'>
            {stars.map(star=>{
                return <img className='star' key={star.key} src="../icons/star-s.png" alt="*" />
            })}
        </div>
    )
}

export default StarRating
