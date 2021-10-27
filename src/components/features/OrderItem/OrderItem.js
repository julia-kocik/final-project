import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

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

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as OrderItem,
  // Container as OrderItem,
  Component as OrderItemComponent,
};
