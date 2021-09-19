import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.footerLink}>
      <NavLink to='/home'className={styles.navLink}>Home</NavLink>
      <NavLink to='/contact' className={styles.navLink}>Contact</NavLink>
    </div>
    <div className={styles.copyright}>
      <span>copyright © 2021 - PET STORE</span>
    </div>
  </div>
);

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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
