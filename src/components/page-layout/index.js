import React from 'react';
import Header from '../header';
import Aside from '../aside';
import styles from './index.module.css';
import Footer from '../footer';

const PageLayout = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <div className={styles['inner-container']}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout;
