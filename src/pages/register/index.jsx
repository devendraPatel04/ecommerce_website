import React from "react";
import "./register.css";
import Banner from "../../common/components/banner";
import RegisterMain from "./components/register-main"
import LoginMain from "../login/components/login-main"

const Register = () => {
    return (
        <div className="register-page">
            <Banner />
            <RegisterMain />
        </div>
    );
}

export default Register;