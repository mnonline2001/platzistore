import React from 'react';
import Image from 'next/image';
import styles from '@styles/Order.module.scss';
import arrow from '@icons/flechita.svg';

const Order = () => {
  return (
    <div className={styles.Order}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src={arrow} alt="arrow" width="12" height="12" />
    </div>
  );
};

export default Order;
