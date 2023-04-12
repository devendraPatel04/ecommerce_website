import React from "react";
import "./login-main.css"

const LoginMain = () => {
    return (
        <div className="login-main">
            <div className="login-container">
                <h1 className="mtb-10">Login to Continue</h1>

                <div className="from-container mtb-10">
                    <label htmlFor="">Email :</label>
                    <input type="email" placeholder="email address" required className="form-control mtb-10" />
                </div>
                <div className="form-container mbt-10">
                    <label htmlFor="">Password :</label>
                    <input type="password" placeholder="enter password" required className="form-control mtb-10" />
                </div>

                <div className="mtb-10 linkblock">
                    <a href="#/" className="forgot-link noDecoration">Forgot Password</a>
                </div>
                <div className="mtb-10">
                    <button className="m-auto bnt">Submit</button>
                </div>
                <div className="mtb-10 text-center">
                    <a href="/register" className="noDecoration">Don't have Account? Create new</a>
                </div>
            </div>
        </div>
    );
};

export default LoginMain;