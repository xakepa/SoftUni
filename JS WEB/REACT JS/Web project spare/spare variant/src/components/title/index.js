import React from 'react'
import styles from './index.module.css'

const Title = (props) => {
    return (
        <h1 className={styles.title}>{props.title}</h1>
    )
}

export default Title