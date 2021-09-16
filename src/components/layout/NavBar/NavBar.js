import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NavBar.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <NavLink to='/home'className={styles.navLink}>Home</NavLink>
    <NavLink to='/shop' className={styles.navLink}>Shop</NavLink>
    <NavLink to='/about' className={styles.navLink}>About</NavLink>
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
  Component as NavBar,
  // Container as NavBar,
  Component as NavBarComponent,
};