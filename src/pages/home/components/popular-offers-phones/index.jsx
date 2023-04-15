import React from 'react';
import './popular-offers-phones.css';
import PhoneProduct from "../../../../common/components/phone-product";
import { SAMPLE_PHONES } from "../../../../common/constants/sample";

const PopuplarOffersPhones = () =>{
    return (
        <div className='popular-phones-main'>
            <div className='row'>
                {SAMPLE_PHONES.map(phone => {
                    return (
                        <div className='col'>
                            <PhoneProduct productData={phone} key={phone.id} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PopuplarOffersPhones;