import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, toggleOrders, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={styles.Nav}>
        <img src={menu.src} alt="menu" className={styles.menu} width="23px" height="23px" />
        <div className={styles['navbar-left']}>
          <Link href="/" passHref>
            <Image src={logo} alt="logo" className={styles['nav-logo']} width="100px" height="50px" />
          </Link>
          {/*<li className={styles['home']} onClick={() => toggleHeader()}>*/}
          {/*  <Image src={logo} alt="logi" width="100px" height="50px" />*/}
          {/*  {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}*/}
          {/*</li>*/}

          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <li className={styles['navbar-email']} onClick={() => toggleMenu()}>
              platzi@example2.com
            </li>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events */}
            <li className={styles['navbar-shopping-cart']} onClick={() => toggleOrders()}>
              <Image src={shoppingCart} alt="shopping cart" width="23px" height="23px" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
