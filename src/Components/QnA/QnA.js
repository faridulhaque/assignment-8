import React from 'react';
import './QnA.css';

const QnA = () => {
    return (
        <section className='section-qna'>
            <div>
                <h2>How react works</h2>
                <p>React is the most popular javascript library these days. There is a package available to install react app easily. A react package contains an app js file which is the main file in the package and it is the file where all others components are put in. Every react app has different components which is actually the dynamic codes for different parts of a website. All of them return JSX JavaScript xml. React itself create a virtual dom and collect all components in a common file, render them and show us in the websites. React also compare the old and new data and update only new data. </p>
            </div>
            <div>
                <h2>Difference between props and state in react</h2>
                <p>As we Know we can get data to one component from another component with props but we can't get data with useState. Props are immutable while useState is mutable. Another important difference we should know that props is a read only function which means it is not changed by the child component function while useState can make both read and write.</p>
            </div>
            
        </section>
        
    );
};

export default QnA;