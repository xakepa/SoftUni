import React, { Component } from 'react';
import Link from '../link';
import styles from './index.module.css';
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context';

class Aside extends Component {

    static contextType = UserContext

    render() {
        const { loggedIn, user } = this.context
        const links = getNavigation(loggedIn, user);

        return (
            <aside className={styles.container}>
                {
                    links.map(l => <Link key={l.title} href={l.link} value={l.title} type="aside" />)
                }
            </aside>
        )
    }
}

export default Aside;