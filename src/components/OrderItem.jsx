import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import close from '@icons/flechita.svg';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>{product?.images[0] && <Image src={product?.images[0]} width={70} height={70} alt={product?.title} />}</figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image className={`${styles.pointer} ${styles['more-clickable-area']} ${styles.close}`} src={close} alt="close" onClick={() => handleRemove(product)} width="15px" height="15px" />
    </div>
  );
};

export default OrderItem;
