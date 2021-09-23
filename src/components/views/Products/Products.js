import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//import { useSelector } from 'react-redux';
import {getProducts} from '../../../redux/actions/productActions';

import clsx from 'clsx';

import { connect } from 'react-redux';
//import { addToCart } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';

const Component = ({className, getProducts, products}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <div className={clsx(className, styles.root)}>
      {products.map(one => (
        <div className={styles.postBox} key={one._id}>
          <Link className={styles.productsLink} to={`/products/${one._id}`} >
            <h2 className={styles.title}>{one.title.toUpperCase()}</h2>
            <img className={styles.image} src={one.photo} alt="ProductPhoto"></img>
            <p className={styles.price}>$ {one.price}</p>
          </Link>
          <button className={styles.button}>ADD TO CART</button>
        </div>
      ))}
    </div>
  );
};

Component.propTypes = {
  getProducts: PropTypes.func,
  className: PropTypes.string,
  products: PropTypes.array,
  //addToCart: PropTypes.func,
};

const mapStateToProps = state => ({
  products: state.getProducts.products,
});



const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  //addToCart: (id) => dispatch(addToCart(id)), 
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as ProductBox,
  Container as Products,
  Component as ProductsComponent,
};
/*
<div >
        
        
        </div> */