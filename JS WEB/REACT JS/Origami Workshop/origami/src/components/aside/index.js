import React from 'react';
import Link from '../link';
import styles from './index.module.css';

const Aside = () => {
    return (
        <aside className={styles.container}>
            <Link href={"#"} number={1} type='aside' />
            <Link href={"#"} number={2} type='aside' />
            <Link href={"#"} number={3} type='aside' />
            <Link href={"#"} number={4} type='aside' />
            <Link href={"#"} number={5} type='aside' />
        </aside>
    )
}

export default Aside;