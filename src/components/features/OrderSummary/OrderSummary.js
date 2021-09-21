import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { OrderItem } from '../OrderItem/OrderItem';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './OrderSummary.module.scss';

const Component = ({className, cart}) => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  },[cart, totalPrice, setTotalPrice, totalItems, setTotalItems]);
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.cart}>
        <div className={styles.cart__items}>
          {cart.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.cart__summary}>
          <h4 className={styles.summary__title}>Order Summary</h4>
          <div className={styles.summary__price}>
            <span>TOTAL: ({totalItems} items)</span>
            <span>$ {totalPrice}</span>
          </div>
        </div>
      </div>
      <div className={styles.formBox}>
        <form className={styles.addForm}>
          <label>Name</label>
          <input className={styles.formInput} type="text" name="name"></input>
          <label>Surname</label>
          <input className={styles.formInput} type="text" name="name"></input>
          <label>Address</label>
          <input className={styles.formInput} type="text" name="name"></input>
          <button className={styles.summary__checkoutBtn} type="submit">Send order</button>
        </form>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: state.initialState.cart,
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
