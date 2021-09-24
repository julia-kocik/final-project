import React from 'react';
import PropTypes from 'prop-types';
import {CartItem} from '../CartItem/CartItem';

import clsx from 'clsx';

import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

const Component = ({className, cart}) => {
  const getCartCount = () => {
    return cart.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cart
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.cart}>
        <div className={styles.cart__items}>
          {cart.map((item) => (
            <CartItem key={item.product} item={item} />
          ))}
        </div>
        <div className={styles.cart__summary}>
          <h4 className={styles.summary__title}>Cart Summary</h4>
          <div className={styles.summary__price}>
            <span>TOTAL: ({getCartCount()}) items</span>
            <span>$ {getCartSubTotal()}</span>
          </div>
          <Link to='/order'>
            <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: state.cart.cartItems,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
