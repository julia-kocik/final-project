import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';

import styles from './Product.module.scss';

const Component = ({className, products, linkId}) => {
  return (
    <div className={clsx(className, styles.root)}>
      {products.filter(element => element.id == linkId).map(one => (
        <div className={styles.postBox} key={one.id}>
          <p className={styles.title}>{one.title.toUpperCase()}</p>
          <img className={styles.image} src={one.photo} alt="Product one"></img>
          <p className={styles.price}>${one.price}</p>
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
