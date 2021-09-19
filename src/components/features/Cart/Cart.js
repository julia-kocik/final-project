import React from 'react';
import PropTypes from 'prop-types';
import {NavBar} from '../../layout/NavBar/NavBar';
import {CartItem} from '../CartItem/CartItem';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

const Component = ({className}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <NavBar />
      <div className={styles.cart}>
        <div className={styles.cart__items}>
          <CartItem />
          {/*cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))*/}
        </div>
        <div className={styles.cart__summary}>
          <h4 className={styles.summary__title}>Cart Summary</h4>
          <div className={styles.summary__price}>
            <span>TOTAL: (10 items)</span>
            <span>$ {10}</span>
          </div>
          <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
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
  Component as Cart,
  // Container as Cart,
  Component as CartComponent,
};
