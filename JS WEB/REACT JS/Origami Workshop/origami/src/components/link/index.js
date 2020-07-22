import React from 'react';
import styles from './index.module.css';

const Link = (props) => {
    return (
        <div className={styles[`${props.type}-list-item`]}>
            <a className={styles[`${props.type}-link`]} href={props.href} >Going to {props.number}</a>
        </div>
    )
}


export default Link;