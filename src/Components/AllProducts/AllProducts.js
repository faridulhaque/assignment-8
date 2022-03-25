import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
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
            <button>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default AllProducts;