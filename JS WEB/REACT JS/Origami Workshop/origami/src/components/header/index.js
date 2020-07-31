import React from 'react';
import styles from './index.module.css';
import LinkComponent from '../link';
import logo from '../../images/white-origami-bird.png';
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context';


class Header extends React.Component {
    static contextType = UserContext

    render() {
        const { loggedIn, user } = this.context
        const links = getNavigation(loggedIn, user);
        return (
            <nav className={styles.navigation}>
                <ul>
                    <img className={styles.logo} src={logo} alt="Logo" />
                    {
                        links.map(l => <LinkComponent href={l.link} key={l.title} value={l.title} type="header" />)
                    }
                </ul>
            </nav>
        )
    }
}

export default Header;