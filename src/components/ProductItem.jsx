import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    console.log('in cart', state.cart.includes(item));
    addToCart(item);
  };

  if (['30A_00034.jpg', '31A_00035.jpg'].includes(product.images[0])) {
    return (
      <div className={styles.ProductItem}>
        <h1>invalid image</h1>
      </div>
    );
  }

  return (
    <div className={styles.ProductItem}>
      {product.images[0] && <Image src={product.images[0]} width={240} height={240} alt={product.title} />}
      <div className={styles['Produc-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>

        <figure className={styles['more-clickable-area']} onClick={() => handleClick(product)}>
          {state.cart.includes(product) ? (
            <Image className={`${styles.disabled} ${styles['add-to-cart-btn']}`} src={addedToCartImage} alt="added to cart" width="35px" height="35px" />
          ) : (
            <Image className={styles['add-to-cart-btn pointer']} src={addToCartImage} alt="kkkk" width="35px" height="35px" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
