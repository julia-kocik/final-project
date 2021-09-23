import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';

import styles from './TopBar.module.scss';
//import { Link } from 'react-router-dom';

const Component = ({className}) => {
  const [cartCount, setCartCount] = useState(0);
  /*
  useEffect(() => {
    console.log(cart);
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
      console.log('hello!');
    });

    setCartCount(count);
  }, [cart, cartCount]);
*/
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.leftBar}>
        <h2>JOIN US</h2>
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
      <div className={styles.rightBar}>
        <FontAwesomeIcon className={styles.icon} icon={faUser} />
        <h2>LOG IN</h2>
        <FontAwesomeIcon className={styles.icon} icon={faShoppingCart} />
        <Link className={styles.cartLink} to="/cart">
          <h2>CART ({cartCount})</h2>
        </Link>
      </div>
    </div>
  );
};

Component.propTypes = {
  //cart: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  //cart: state.initialState.cart,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as TopBar,
  Container as TopBar,
  Component as TopBarComponent,
};
