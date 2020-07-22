import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import logo from '../../images/blue-origami-bird-flipped.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <Link href={"#"} number={1} type="footer" />
                <Link href={"#"} number={2} type="footer" />
                <Link href={"#"} number={3} type="footer" />
                <Link href={"#"} number={4} type="footer" />
                <Link href={"#"} number={5} type="footer" />
                <Link href={"#"} number={6} type="footer" />
                <Link href={"#"} number={7} type="footer" />
                <Link href={"#"} number={8} type="footer" />
                <Link href={"#"} number={9} type="footer" />
                <Link href={"#"} number={10} type="footer" />
                <Link href={"#"} number={11} type="footer" />
                <img className={styles.logo} src={logo} alt="Logo" />
            </ul>
            <p className={styles.university}>
                Software University &copy; 2020
            </p>
        </footer>
    )
}

export default Footer;