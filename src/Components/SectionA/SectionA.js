import React, { useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Cart from '../Cart/Cart';

import './SectionA.css';

const SectionA = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    
    const addToCart = (name) =>{

         setCart([...cart, name]);
    };
    
    
    
    return (
        <section className='section-a'>
            <div className='container-products'>
                {
                    products.map(product => <AllProducts 
                        key={product.id} 
                        product={product}
                        addToCart ={addToCart}
                        ></AllProducts>)
                }
                

            </div>
            <div className='container-cart'>

                <Cart cart={cart}></Cart>
            </div>
        </section>
    );
};

export default SectionA;