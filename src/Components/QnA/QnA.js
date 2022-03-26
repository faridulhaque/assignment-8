import React from 'react';

const QnA = () => {
    return (
        <section>
            <div>
                <h2>Difference between props and state in react</h2>
                <p>Main differences between them are:  we can get data with props from from another component but we cant get data from other data file with this. Here we need useState. Also props are imutable while useState is mutable.  </p>
            </div>
            <div>
                <h2>How useState works</h2>

                <p>UseState is a react function which is also called a hook in react. We can declare variable in a functional component with it.It take an initial value from the user and work with it as it get commanded and then return the present value</p>
            </div>
        </section>
        
    );
};

export default QnA;