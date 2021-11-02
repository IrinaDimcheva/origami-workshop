import React from 'react';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import styles from './index.module.css';
import Origamis from '../../components/origamis';

const ShareThoughtsPage = () => {
  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <div className={styles.container}>
        <textarea className={styles.textarea} placeholder="Publication..."></textarea>
        <SubmitButton title='Post' />
      </div>
      <Origamis length={3} />
    </PageLayout>
  );
};

export default ShareThoughtsPage;