import React from 'react'
import { product } from "../products";
const Price = () => {
    return (
        <div>
            <h2 className='faux'>{product.price}</h2>
            <h2 className='vrai'>900$</h2>
        </div>
    )
}

export default Price