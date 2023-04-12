import React from 'react';
import './navbar.css';
import OffersIcon from "../../assets/icons/offers";

const NavBar = () => {
    return (
        <nav className="NavContainer">
            <div className='left-part'>
                <ul>
                    <li><a href="#samsung">Samsung Phones</a></li>
                    <li><a href="#iPhones">iPhones</a></li>
                    <li><a href="#Mi">Mi Phones</a></li>
                    <li><a href="#Oneplus">Oneplus Phones</a></li>
                    <li><a href="#Oppo">Oppo Phones</a></li>
                    <li><a href="#Vivo">Vivo Phones</a></li>
                    <li><a href="#Others">Others</a></li>
                </ul>
            </div>
            <div className='right-part'>
                <div className='offers-text'>
                    <OffersIcon />
                    <span>Offers</span>
                </div>
                <div className='navbtn'>
                    <button>
                        New
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;