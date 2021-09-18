import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';

const Component = ({className, products}) => (
  <div className={clsx(className, styles.root)}>
    {products.map(one => (
      <div className={styles.postBox} key={one._id}>
        <h2 className={styles.title}>{one.title.toUpperCase()}</h2>
        <img className={styles.image} src={one.photo} alt="ProductPhoto"></img>
        <p className={styles.price}>$ {one.price}</p>
      </div>
    ))}
  </div>
);

Component.propTypes = {
  products: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as ProductBox,
  Container as Products,
  Component as ProductsComponent,
};
