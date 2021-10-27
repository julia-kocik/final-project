import React, {useState} from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { addToCart, removeFromCart, adjustItemRequest } from '../../../redux/actions/cartActions';

import { connect } from 'react-redux';

import styles from './CartItem.module.scss';

const Component = ({className, item, remove, addToCart, adjustItemRequest}) => {
  const [input, setInput] = useState(item.qty);
  const [area, setArea] = useState(item.request);
  const onChangeRequestHandler = (e) => {
    setArea(e.target.value);
    adjustItemRequest(item.product, e.target.value);
  };
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    addToCart(item.product, e.target.value);
  };
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.cartItem}>
        <img
          className={styles.cartItemImage}
          src={item.photo}
          alt={item.title}
        />
        <div className={styles.cartItemDetails}>
          <p className={styles.detailsTitle}>{item.title}</p>
          <p className={styles.detailsDesc}>{item.description}</p>
          <label htmlFor="requests">Additional request:</label>
          <textarea name="requests" value={area} rows="3" onChange={onChangeRequestHandler}></textarea>
          <p className={styles.detailsPrice}>$ {item.price} / box</p>
        </div>
        <div className={styles.cartItemActions}>
          <div className={styles.cartItemQty}>
            <label htmlFor="qty">Qty</label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />
          </div>
          <button
            className={styles.actionsDeleteItemBtn}
          >
            <FontAwesomeIcon className={styles.icon} icon={faTrashAlt} onClick={() => remove(item.product)}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  remove: PropTypes.func,
  addToCart: PropTypes.func,
  adjustItemRequest: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = (dispatch, props) => ({
  remove: (id) => dispatch(removeFromCart(id)), 
  addToCart: (id, qty) => dispatch(addToCart(id, qty)), 
  adjustItemRequest: (id, request) => dispatch(adjustItemRequest(id, request)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  //Component as CartItem,
  Container as CartItem,
  Component as CartItemComponent,
};
