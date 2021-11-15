import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OrderItem.module.scss';

const Component = ({className, item}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.cartItem}>
        <img
          className={styles.cartItemImage}
          src={item.photo}
          alt={item.title}
        />
        <div className={styles.cartItemDetails}>
          <p className={styles.detailsTitle}>Name: {item.title}</p>
          <p className={styles.detailsDesc}>Quantity: {item.qty}</p>
          <p className={styles.detailsPrice}>Price: $ {item.price}</p>
          <p className={styles.detailsPrice}>Additional request: {item.request}</p>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  item: PropTypes.object,
  className: PropTypes.string,
};

export {
  Component as OrderItem,
  Component as OrderItemComponent,
};
