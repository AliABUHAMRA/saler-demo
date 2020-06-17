import React from 'react';
import Rectangle3 from '../images/Rectangle3.png';
import Rectangle4 from '../images/Rectangle4.png';
import Rectangle5 from '../images/Rectangle5.png';

const Footer = () => {
    return(
        <>
        <footer c>
            <div className="container-footer">
            <div className="background-footer"> 
            <p className="content-card">012-22337</p>
            <p className="content-card2">ShareBook@book.com</p>
            <p className="content-text-card">Delivery is available in your Country</p>
            <p className="content-text-card2">Copyright © ShareBook. All rights reserved 2020 </p>
            <p className="content-methods-card">Payment Methods</p>
            <span className="card-paymnt">
            <img src={Rectangle3} alt="Rectangle3" />
            <img src={Rectangle4} alt="Rectangle3" />
            <img src={Rectangle5} alt="Rectangle3" />
            </span>
            </div> 
            </div>
        </footer>
          </>
    )
}

export default Footer