import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Logo.module.scss';

const Component = ({className, logo}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <img className={styles.logo} src={logo} alt="Shop logo"/>
      <h2 className={styles.title}>PET STORE</h2>
    </div>
  );
};

Component.propTypes = {
  logo: PropTypes.string,
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
  Component as Logo,
  // Container as Logo,
  Component as LogoComponent,
};
