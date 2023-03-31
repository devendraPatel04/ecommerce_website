import React from "react";
import "./register-main.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const RegisterMain = () => {
    return (
        <div className="register-main">
            <div className="register-container">
                <h1 className='main-heading'>Create Account 😍</h1>

                <FloatingLabel
                    controlId='floatingFullName'
                    label='Full Name'
                    className='mtb-10'
                >
                    <Form.Control
                        type='text'
                        placeholder='Firstname Lastname'
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId='floatingMobile'
                    label='Mobile Number'
                    className='mtb-10'
                >
                    <Form.Control type='number' placeholder='0000000000' />
                </FloatingLabel>

                <FloatingLabel
                    controlId='floatingInput'
                    label='Email Address'
                    className='mtb-10'
                >
                    <Form.Control type='email' placeholder='name@example.com' />
                </FloatingLabel>

                <FloatingLabel
                    controlId='floatingDateOfBirth'
                    label='Date of birth (DD/MM/YYYY)'
                    className='mtb-10'
                >
                    <Form.Control type='date' placeholder='MM/DD/YYYY' />
                </FloatingLabel>

                <FloatingLabel
                    controlId='floatingPassword'
                    label='Password'
                    className='mtb-10'
                >
                    <Form.Control type='password' placeholder='*******' />
                </FloatingLabel>

                <FloatingLabel
                    controlId='floatingConfirmPassword'
                    label='Confirm Password'
                    className='mtb-10'
                >
                    <Form.Control type='password' placeholder='*******' />
                </FloatingLabel>

                <div className='form-container mtb-10'>
                    <button className='main-btn p-2'>Create Account</button>
                </div>

                <h4 className='heading-sub'>
                    Already have an Account?
                    <a href='/login' className='text-pink size-medium mx-2'>
                        Login here
                    </a>
                </h4>
            </div>
        </div>
    );
}

export default RegisterMain;