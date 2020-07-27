import React from 'react'
import styles from './index.module.css'
const Input = ({ label, id, value, type, onChange }) => {
    return (
        <div className={styles['form-control']}>
            <label className={styles.label} htmlFor={id}>
                {label} :
                <input className={styles.input} type={type} id={id} value={value} onChange={onChange} />
            </label>
        </div>
    )
}

export default Input