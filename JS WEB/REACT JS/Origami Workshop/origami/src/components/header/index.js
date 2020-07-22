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
                <Link href={"#"} number={6} type="header" />
                <Link href={"#"} number={7} type="header" />
                <Link href={"#"} number={8} type="header" />
                <Link href={"#"} number={9} type="header" />
                <Link href={"#"} number={10} type="header" />
                <Link href={"#"} number={11} type="header" />
            </ul>
        </nav>
    )
}

export default Header;