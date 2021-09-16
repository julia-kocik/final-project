import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './TopBar.module.scss';
//import { Link } from 'react-router-dom';

const Component = ({className, children}) => (
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
      <h2>CART</h2>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
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
  Component as TopBar,
  // Container as TopBar,
  Component as TopBarComponent,
};
