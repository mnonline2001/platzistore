import React from 'react';
import Image from "next/image";
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/RecoveryPassword.module.scss';

const RecoveryPassword = () => {
    return (
        <div className={styles.RecoveryPassword}>
        <div className={styles['RecoveryPassword-container']}>
          <Image src={logo} alt="logo" className="logo" width="14" height='14' />
          <h1 className={styles.title}>Password recovery</h1>
          <p className={styles.subtitle}>Inform the email address used to create your account</p>
          <form action="/" className={styles.form}>
            <label htmlFor="email" className={styles.label}>Email address</label>
            <input type="text" id="email" className={styles['input input-email']} />
            <input type="submit" value="Confirm" className={styles['Primary-button login-button']} />
          </form>
        </div>
      </div>
    );
};

export default RecoveryPassword;
