import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import clsx from 'clsx';
import { OrderItem } from '../OrderItem/OrderItem';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { addOneOrder } from '../../../redux/actions/orderActions';



import styles from './OrderSummary.module.scss';

const Component = ({className, cart, addNewOrder}) => {
  const [order, setOrder] = useState(
    {
      id: '',
      cart: cart,
      name: '',
      surname: '',
      address: '',
    }
  );

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  const getCartCount = () => {
    return cart.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cart
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(order.cart, order.name, order.surname, order.address);
    if(order.cart && order.name && order.surname && order.address){
      order.id = uuidv4();
      addNewOrder(order);
      alert('Order has been saved!');

      setOrder({
        id: '',
        name: '',
        surname: '',
        address: '',
      });
    } else {
      alert('Please fill required fields');
    }
  };
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.cart}>
        {cart.length === 0 ? (
          <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          <div className={styles.cart__items}>
            {cart.map((item) => (
              <OrderItem key={item.product} item={item} />
            ))}
          </div>
        )}
        <div className={styles.cart__summary}>
          <h4 className={styles.summary__title}>Order Summary</h4>
          <div className={styles.summary__price}>
            <span>TOTAL: ({getCartCount()}) items</span>
            <span>$ {getCartSubTotal()}</span>
          </div>
        </div>
      </div>
      <div className={styles.formBox}>
        {cart.length === 0 ? (
          <div>
            <></>
          </div>
        ) : (
          <form className={styles.addForm} action="/orders" method="POST" onSubmit={submitForm}>
            <label>Name</label>
            <input className={styles.formInput} type="text" name="name" onChange={handleChange}></input>
            <label>Surname</label>
            <input className={styles.formInput} type="text" name="surname" onChange={handleChange}></input>
            <label>Address</label>
            <input className={styles.formInput} type="text" name="address" onChange={handleChange}></input>
            <button className={styles.summary__checkoutBtn} type="submit">Send order</button>
          </form>
        )}
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.array,
  addNewOrder: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: state.cart.cartItems,
});

const mapDispatchToProps = dispatch => ({
  addNewOrder: (newOrder) => dispatch(addOneOrder(newOrder)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as OrderSummary,
  Container as OrderSummary,
  Component as OrderSummaryComponent,
};
