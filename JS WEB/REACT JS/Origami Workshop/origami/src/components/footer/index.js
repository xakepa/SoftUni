import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import logo from '../../images/blue-origami-bird-flipped.png';
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context';

class Footer extends React.Component {
    static contextType = UserContext

    render() {
        const { loggedIn, user } = this.context
        const links = getNavigation(loggedIn, user);

        return (
            <footer className={styles.footer}>
                <ul>
                    <Link href={"#"} value={'Post'} type="footer" />
                    {
                        links.map(l => <Link key={l.title} href={l.link} value={l.title} type="footer" />)
                    }

                    <img className={styles.logo} src={logo} alt="Logo" />
                </ul>
                <p className={styles.university}>
                    Software University &copy; 2020
            </p>
            </footer>
        )
    }
}

export default Footer;