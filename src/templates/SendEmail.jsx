import React from 'react';
import '@styles/SendEmail.scss';
import Link from "next/link";
import Image from "next/image";

const SendEmail = () => {
    return (
        <div className="SendEmail">
            <div className="form-container">
                <Image src="./logos/logo_yard_sale.svg" alt="logo" className="logo" width="14px" height="16px"/>
                <h1 className="title">Email has been sent=!</h1>
                <p className="subtitle">Pleae check your inbox for instructions on how to reset the passwuord </p>
                <div className="email-image">
                    <Image src="./icons/email.svg" alt="email" height="14" width="14"/>
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
