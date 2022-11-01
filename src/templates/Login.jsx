import React, { useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/Login.module.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      usename: formData.get('email'),
      password: formData.get('password')
    };
    console.log(data);
  };

    return (
        <div className={styles.login}>
        <div className={styles['login-container']}>
          <Image src={logo}  alt="logo" className={styles.logo} width="14px" height="14px"/>
          <form action="/" className={styles.form} ref={form}>
            <label htmlFor="email" className={styles.label}>Email address</label>
            <input type="text" name="email" placeholder="platzi@example.cm" className={styles['input input-email']} />
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" name="password" placeholder="*********" className={styles['input input-password']} />
            <button
            onClick={handleSubmit}
            className={styles['primary-button login-button']} >
              Log in
            </button>
            <Link href="/">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>Forgot my password</a>
            </Link>
          </form>
          <button
          className={styles['secondary-button signup-button']}>Sing up
          </button>
        </div>
      </div>
    );
};

export default Login;
