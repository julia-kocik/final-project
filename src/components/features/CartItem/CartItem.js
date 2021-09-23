import React, {useState} from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
//import { adjustItemQty, removeFromCart, adjustItemReq } from '../../../redux/productsRedux.js';

import styles from './CartItem.module.scss';

const Component = ({className, item}) => {
  const [input, setInput] = useState(item.qty);
  const [area, setArea] = useState(item.request);
  const onChangeRequestHandler = (e) => {
    setArea(e.target.value);
    //adjustItemReq(item.id, e.target.value);
  };
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    //adjustItemQty(item.id, e.target.value);
  };
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.cartItem}>
        <img
          className={styles.cartItem__image}
          src={item.photo}
          alt={item.title}
        />
        <div className={styles.cartItem__details}>
          <p className={styles.details__title}>{item.title}</p>
          <p className={styles.details__desc}>{item.shortDesc}</p>
          
          <textarea name="requests" value={area} onChange={onChangeRequestHandler}></textarea>
            
          <p className={styles.details__price}>$ {item.price}</p>
        </div>
        <div className={styles.cartItem__actions}>
          <div className={styles.cartItem__qty}>
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
            className={styles.actions__deleteItemBtn}
          >
            <FontAwesomeIcon className={styles.icon} icon={faTrashAlt} /*onClick={() => removeFromCart(item.id)}*/></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  /*removeFromCart: PropTypes.func,
  adjustItemQty: PropTypes.func,
  adjustItemReq: PropTypes.func,*/
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  /*removeFromCart: (id) => dispatch(removeFromCart(id)), 
  adjustItemQty: (id, qty) => dispatch(adjustItemQty(id, qty)),
  adjustItemReq: (id, request) => dispatch(adjustItemReq(id, request)),*/
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  //Component as CartItem,
  Container as CartItem,
  Component as CartItemComponent,
};
