import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Products} from '../Products/Products';
import {Logo} from '../../features/Logo/Logo';
import clsx from 'clsx';
import styles from './Homepage.module.scss';

const Component = ({className}) => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <Logo/>
      <Products/>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Homepage,
  Component as HomepageComponent,
};
