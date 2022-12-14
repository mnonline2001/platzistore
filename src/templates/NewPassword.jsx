import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/NewPassword.module.scss';
import Image from "next/image";

const NewPassword = () => {
    return (
        <div className={styles.NewPassword}>
            <div className={styles['NewPassword-container']}>
                <Image src={logo} alt="logo" className={styles.logo} height="14" width="14"/>
                <h1 className={styles.title}>Create a new password</h1>
                <p className={styles.subtitle}>Enter a new passwrd for you account</p>
                <form action="/" className={styles.form}>
                    <label htmlFor={"password"} className={styles.label}>Password</label>
                    <input type="password" id="password" placeholder="*********"
                           className={styles['input input-password']}/>
                    <label htmlFor="new-password" className={styles.label}>Password</label>
                    <input type="password" id="new-password" placeholder="*********"
                           className={styles['input input-password']}/>
                    <input type="submit" value="Confirm" className={styles['primary-button login-button']}/>
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
