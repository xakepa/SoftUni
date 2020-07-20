import React from 'react';
import styles from './index.module.css';
import Link from '../link';

const Header = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <Link href={"#"} number={1} />
                <Link href={"#"} number={2} />
                <Link href={"#"} number={3} />
                <Link href={"#"} number={4} />
                <Link href={"#"} number={5} />
            </ul>
        </nav>
    )
}

export default Header;