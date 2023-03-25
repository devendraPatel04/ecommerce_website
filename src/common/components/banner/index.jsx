import React from "react";
import "./banner.css"
import mobileLarge from "../../assets/images/mobile-large.svg";
import mobileBottom from "../../assets/images/mobile-bottom.svg";

const Banner = () =>{
    return (<div className="app-banner">
            <img src={mobileLarge} alt="mob logo" />
            <img src={mobileBottom} alt="mob bottom" />
            </div>);
}

export default Banner;