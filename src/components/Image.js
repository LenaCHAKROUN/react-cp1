import React from 'react'
import { product } from "../products";
const Image = () => {
    return (
        <div>
            <img src={product.image} alt='camera'/>
        </div>
    )
}

export default Image