import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import clsx from 'clsx';
import styles from './Footer.module.scss';

const Component = ({className}) => (
  <footer className={clsx(className, styles.root)}>
    <div className={styles.footerLink}>
      <NavLink to='/home'className={styles.navLink}>Home</NavLink>
    </div>
    <div className={styles.copyright}>
      <span>Groceries Store © 2021</span>
    </div>
  </footer>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent,
};
