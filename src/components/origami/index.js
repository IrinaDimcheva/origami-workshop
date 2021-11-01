import React from 'react';
import styles from './index.module.css';
import image from '../../images/blue-origami-bird.png';

const Origami = ({ description, author }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="origami" />
      <p className={styles.description}>
        {description}
      </p>
      <div>
        <span className={styles.user}>
          <small>Author: </small>
          {author.username}
        </span>
      </div>
    </div>
  )
}

export default Origami;