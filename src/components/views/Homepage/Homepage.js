import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Products} from '../Products/Products';
import {Logo} from '../../features/Logo/Logo';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className}) => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <Logo/>
      <Products/>
    </div>
  );
};

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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
