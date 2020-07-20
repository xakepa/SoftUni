import React from 'react';
import styles from './index.module.css';
import Link from '../link';

const Header = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <Link href={"#"} number={1} type="header" />
                <Link href={"#"} number={2} type="header" />
                <Link href={"#"} number={3} type="header" />
                <Link href={"#"} number={4} type="header" />
                <Link href={"#"} number={5} type="header" />
            </ul>
        </nav>
    )
}

export default Header;