import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { addToCart } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';

const Component = ({className, products, addToCart}) => (
  <div className={clsx(className, styles.root)}>
    {products.map(one => (
      <div className={styles.postBox} key={one.id}>
        <Link className={styles.productsLink} to={`/products/${one.id}`} >
          <h2 className={styles.title}>{one.title.toUpperCase()}</h2>
          <img className={styles.image} src={one.photo} alt="ProductPhoto"></img>
          <p className={styles.price}>$ {one.price}</p>
        </Link>
        <button className={styles.button} onClick={() => addToCart(one.id)}>ADD TO CART</button>
      </div>
    ))}
  </div>
);

Component.propTypes = {
  products: PropTypes.array,
  className: PropTypes.string,
  addToCart: PropTypes.func,
};

const mapStateToProps = state => ({
  products: state.initialState.products,
});

const mapDispatchToProps = dispatch => ({
  addToCart: (id) => dispatch(addToCart(id)), 
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as ProductBox,
  Container as Products,
  Component as ProductsComponent,
};
