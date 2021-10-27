import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getProducts} from '../../../redux/actions/productActions';
import { addToCart } from '../../../redux/actions/cartActions';


import clsx from 'clsx';

import { connect } from 'react-redux';
//import { addToCart } from '../../../redux/actions/cartActions';

import styles from './Products.module.scss';

const Component = ({className, getProducts, products, error, loading, addToCart}) => {
  useEffect(() => {
    window.scrollTo(0,0);
    getProducts();
  }, [getProducts]);
  return (
    <div className={clsx(className, styles.root)}>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className={styles.container}>
          {products.map(one => (
            <div className={styles.productsBox} key={one._id}>
              <div className={styles.productsLink}  >
                <h2 className={styles.title}>{one.title.toUpperCase()}</h2>
                <img className={styles.image} src={one.photo} alt="ProductPhoto"></img>
                <p className={styles.price}>$ {one.price} / box</p>
              </div>       
              <div className={styles.buttonBox}>       
                <Link to={`/products/${one._id}`} className={styles.button}>VIEW MORE </Link>
              </div>
            </div>
          ))}
        </div>  
      )}
    </div>
  );
};

Component.propTypes = {
  getProducts: PropTypes.func,
  className: PropTypes.string,
  products: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  addToCart: PropTypes.func,
};

const mapStateToProps = state => ({
  products: state.getProducts.products,
  loading: state.getProducts.loading,
  error: state.getProducts.error,
});



const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addToCart: (id, qty) => dispatch(addToCart(id, qty)), 
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as ProductBox,
  Container as Products,
  Component as ProductsComponent,
};
