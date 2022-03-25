import React from 'react';
import './AllProduct.css';

const AllProducts = (props) => {
    console.log(props);
    const {image, name, price} = props.product;
    return (
        <div className='card'>
            <div className='img-bg'>
            <img src={image} alt=""/>
            </div>
            
            <h2>{name}</h2>
            <h3>$ {price}</h3>
            <button>Add to cart</button>
        </div>
    );
};

export default AllProducts;