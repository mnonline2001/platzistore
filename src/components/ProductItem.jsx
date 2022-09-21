import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import '@styles/ProductItem.scss';
import styles from '@styles/ProductItem.module.scss';


const ProductItem = ({ product }) => {
  const  { addToCart }  = useContext(AppContext);
 
  
  const handleClick = item => {
    addToCart(item);
  }

  return (
    <div className={styles.ProductItem}>
          <img src={product.images[0]} alt={product.title} />
          <div className="Produc-info">
            <div>
              <p>${product.price}</p>
              <p>{product.title}</p>
            </div>
            <figure onClick={() => handleClick(product)} >
              <img src={addToCartImage} alt="kkkk" />
            </figure>
          </div>
    </div>
  );
}

export default ProductItem;

