import React from 'react';
import styles from './index.module.css';

const Link = (props) => {
    return (
        <li className={styles.listItem}>
            <a href={props.href} className={styles['header-link']}>Going to {props.number}</a>
        </li>
    )
}

export default Link;