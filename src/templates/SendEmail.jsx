import React from 'react';
import '@styles/SendEmail.scss';
import Link from "next/link";

const SendEmail = () => {
    return (
        <div className="SendEmail">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                <h1 className="title">Email has been sent=!</h1>
                <p className="subtitle">Pleae check your inbox for instructions on how to reset the passwuord </p>
                <div className="email-image">
                    <img src="./icons/email.svg" alt="email"/>
                    <button className="primary-button login-button">Login</button>
                    <p className="resend">
                        <span>Didn&lsquo;t receive the email?</span>
                        <Link href="/">
                            Resend
                        </Link>

                    </p>
                </div>
            </div>
        </div>
    );
};
export default SendEmail;
