import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import logo from '../../images/blue-origami-bird-flipped.png';
import getNavigation from '../../utils/navigation';

const Footer = () => {
    const links = getNavigation();

    return (
        <footer className={styles.footer}>
            <ul>
                <Link href={"#"} value={'Post'} type="footer" />
                {
                    links.map(l => <Link key={l.title} href={l.link} value={l.title} type="footer" />)
                }
                <Link href={"#"} value={'#######'} type="footer" />
                <Link href={"#"} value={'#######'} type="footer" />
                <Link href={"#"} value={'#######'} type="footer" />
                <Link href={"#"} value={'#######'} type="footer" />
                <img className={styles.logo} src={logo} alt="Logo" />
            </ul>
            <p className={styles.university}>
                Software University &copy; 2020
            </p>
        </footer>
    )
}

export default Footer;