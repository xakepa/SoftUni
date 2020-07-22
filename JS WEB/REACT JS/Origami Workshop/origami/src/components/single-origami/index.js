import React from 'react';
import styles from './index.module.css';
import logo from '../../images/blue-origami-bird.png';

const SingleOrigami = ({ description, author }) => {
    return (
        <div className={styles.container}>
            <img className={styles[`origami-image`]} src={logo} alt="Logo" />
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

export default SingleOrigami;