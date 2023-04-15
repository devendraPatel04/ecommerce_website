import React from 'react';
import './popular-offers.css';
import PopuplarOffersPhones from '../popular-offers-phones';
import { useNavigate } from 'react-router-dom';


const PopularOffers = () => {
    const navigate = useNavigate();
    const gotoProductList = () =>{
        navigate('/products');
    }

    return (
        <div className='popular-offers-container'>
            <div className='upper'>
                <div className='cont1'>
                    <spam>Popular Mobile Offers</spam>
                    <button onClick={gotoProductList}>View All</button>
                </div>
                <div className='mobile-range'>
                    <ul className='ul-conatiner1'>
                        <li><a className='' href='#under10-15'>Under Rs 10000-15000</a></li>
                        <li><a className='ml10' href='#under15-25'>Rs 15000-25000</a></li>
                        <li><a className='ml10' href='#under25-50'>Rs 25000-50000</a></li>
                        <li><a className='ml10' href='#above50'>above Rs 50000</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='lower'>
                <PopuplarOffersPhones />
            </div>
        </div>
    );
};

export default PopularOffers;