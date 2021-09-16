import React from 'react';
import PropTypes from 'prop-types';
import {TopBar} from '../TopBar/TopBar';
import {Logo} from '../../features/Logo/Logo';
import {NavBar} from '../NavBar/NavBar';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <TopBar />
    <Logo logo="https://cdn.pixabay.com/photo/2015/05/30/14/27/yorkshire-terrier-790361_1280.jpg"/>
    <NavBar/>
    <h2>MainLayout</h2>
    {children}
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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};