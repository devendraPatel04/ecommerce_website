import React from 'react';
import './header.css';
import CartIcon from '../../assets/icons/cart';
import UserIcon from '../../assets/icons/user.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const goToLoginPage = () =>{
        navigate("/login");
    }

    return (
        <div className='containerHeader' >
            <div className='left'>
                <div className='InputGroup'>
                    <input className='inputSearch' type="text" placeholder='Search for  product, brands or more…' />
                    <span className='search'>
                        <i className='bi bi-search'></i>
                    </span>
                </div>
            </div>
            <div className='right'>
                <div className="headerIcons">
                    <CartIcon />
                    <span>Cart</span>
                </div>
                <div className="headerIcons marginLeft20" onClick={goToLoginPage}>
                    <img src={UserIcon} alt="logo icon"/>
                    <span>Login/Sign up</span>
                </div>
            </div>
        </div>
    );
};

export default Header;