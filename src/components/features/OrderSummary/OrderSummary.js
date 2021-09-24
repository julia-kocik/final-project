import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { OrderItem } from '../OrderItem/OrderItem';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './OrderSummary.module.scss';

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
        {cart.length === 0 ? (
          <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          <div className={styles.cart__items}>
            {cart.map((item) => (
              <OrderItem key={item.product} item={item} />
            ))}
          </div>
        )}
        <div className={styles.cart__summary}>
          <h4 className={styles.summary__title}>Order Summary</h4>
          <div className={styles.summary__price}>
            <span>TOTAL: ({getCartCount()}) items</span>
            <span>$ {getCartSubTotal()}</span>
          </div>
        </div>
      </div>
      <div className={styles.formBox}>
        {cart.length === 0 ? (
          <div>
            <></>
          </div>
        ) : (
          <form className={styles.addForm}>
            <label>Name</label>
            <input className={styles.formInput} type="text" name="name"></input>
            <label>Surname</label>
            <input className={styles.formInput} type="text" name="name"></input>
            <label>Address</label>
            <input className={styles.formInput} type="text" name="name"></input>
            <button className={styles.summary__checkoutBtn} type="submit">Send order</button>
          </form>
        )}
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
  //Component as OrderSummary,
  Container as OrderSummary,
  Component as OrderSummaryComponent,
};
