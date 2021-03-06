import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import styles from './TopBar.module.scss';

const Component = ({className, cart}) => {
  const getCartCount = () => {
    return cart.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.leftBar}>
        <h2>JOIN US</h2>
        <div className={styles.iconBox}>
          <a href="https://facebook.com">
            <FontAwesomeIcon className={styles.icon} icon={faFacebook}></FontAwesomeIcon>
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon className={styles.icon} icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon className={styles.icon} icon={faTwitter}></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <div className={styles.rightBar}>
        <FontAwesomeIcon className={styles.icon} icon={faShoppingCart} />
        <Link className={styles.cartLink} to="/cart">
          <h2>CART ({getCartCount()})</h2>
        </Link>
      </div>
    </div>
  );
};

Component.propTypes = {
  cart: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: state.cart.cartItems,
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as TopBar,
  Component as TopBarComponent,
};
