import React from "react";
import "./banner.css"
import mobileLarge from "../../assets/images/mobile-large.svg";
import mobileBottom from "../../assets/images/mobile-bottom.svg";

const Banner = () => {
    return (
        <div className="app-banner">
            <img
                src={mobileLarge}
                alt="mob logo"
                className="relative top-65 mobileLarge"
            />
            <img src={mobileBottom} alt="mob bottom" className="mobileBottom" />
            <div className="banner-text ">
                India's Leading Mobile Comparison Portal
            </div>
        </div>
    );
};

export default Banner;