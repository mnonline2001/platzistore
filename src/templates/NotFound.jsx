import React from 'react';
import styles from '@styles/NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={styles.NotFound}>
            <h1 className={styles['title-404']}>404</h1>
            <p className={styles['text-404']}>Oops! Not found.</p>
            <p></p>
        </div>
    );
}

export default NotFound;