import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';
import {Button} from '../../common/Button/Button';

import styles from './Product.module.scss';

const Component = ({className, products, linkId}) => {
  return (
    <div className={clsx(className, styles.root)}>
      {products.filter(element => element.id == linkId).map(one => (
        <div key={one.id} className={styles.container}>
          <div className={styles.leftContainer}>
            <div className={styles.postBox}>
              <p className={styles.title}>{one.title.toUpperCase()}</p>
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
            <Button name="ADD TO CART"/>
          </div>
        </div>
      ))}
    </div>
  );
};

Component.propTypes = {
  products: PropTypes.array,
  className: PropTypes.string,
  linkId: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  products: getAll(state),
  linkId: props.match.params.id,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};
