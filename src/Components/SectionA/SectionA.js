import React, { useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Cart from '../Cart/Cart';

import './SectionA.css';

const SectionA = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    console.log(products);
    return (
        <section className='section-a'>
            <div className='container-products'>
                {
                    products.map(product => <AllProducts key={product.id} product={product}></AllProducts>)
                }
                

            </div>
            <div className='container-cart'>
                <Cart></Cart>
            </div>
        </section>
    );
};

export default SectionA;