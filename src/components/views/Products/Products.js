import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';

import styles from './Products.module.scss';

const Component = ({className, products}) => (
  <div className={clsx(className, styles.root)}>
    {products.map(one => (
      <Link className={styles.postBox} to={`/products/${one.id}`} key={one.id}>
        <h2 className={styles.title}>{one.title.toUpperCase()}</h2>
        <img className={styles.image} src={one.photo} alt="ProductPhoto"></img>
        <p className={styles.price}>$ {one.price}</p>
      </Link>
    ))}
  </div>
);

Component.propTypes = {
  products: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  products: state.initialState.products,
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
