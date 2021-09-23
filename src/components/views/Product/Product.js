import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import {getProductDetails} from '../../../redux/actions/productActions';

//import { addToCart } from '../../../redux/productsRedux.js';

import styles from './Product.module.scss';

const Component = ({className, one, getProductDetails, error, loading}) => {
  useEffect(() => {
    getProductDetails();
  }, [getProductDetails]);
  return (
    <div className={clsx(className, styles.root)}>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div className={styles.postBox}>
              <p className={styles.title}>{one.title}</p>
              <img className={styles.image} src={one.photo} alt="Product one"></img>
              <p className={styles.price}>${one.price}</p>
            </div>
            <div className={styles.imagesBox}>
              <img className={styles.addPhoto} src={one.addPhoto1} alt="Product"></img>
              <img className={styles.addPhoto} src={one.addPhoto2} alt="Product"></img>
              <img className={styles.addPhoto} src={one.addPhoto3} alt="Product"></img>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <h2>PRODUCT DESCRIPTION</h2>
            <p>{one.description}</p>
            <button className={styles.button} /*onClick={() => addToCart(one.id)}*/>ADD TO CART</button>
          </div>
        </div>
      )}
    </div>
  );
};

Component.propTypes = {
  one: PropTypes.object,
  className: PropTypes.string,
  getProductDetails: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.object,
  //addToCart: PropTypes.func,
};

const mapStateToProps = (state) => ({
  one: state.getProductDetail.product,
  loading: state.getProducts.loading,
  error: state.getProducts.error,
});

const mapDispatchToProps = (dispatch, props) => ({
  getProductDetails: () => dispatch(getProductDetails(props.match.params.id)),
  //addToCart: (id) => dispatch(addToCart(id)), 
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};

 
