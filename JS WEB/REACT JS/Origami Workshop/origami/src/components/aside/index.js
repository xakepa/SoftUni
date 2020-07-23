import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import getNavigation from '../../utils/navigation';

const Aside = () => {
    const links = getNavigation();

    return (
        <aside className={styles.container}>
            {
                links.map(l => <Link href={l.link} value={l.title} type="aside" />)
            }
            <Link href={"#"} value={'#######'} type="aside" />
            <Link href={"#"} value={'#######'} type="aside" />
            <Link href={"#"} value={'#######'} type="aside" />
            <Link href={"#"} value={'#######'} type="aside" />
            <Link href={"#"} value={'#######'} type="aside" />
            <Link href={"#"} value={'#######'} type="aside" />
            <Link href={"#"} value={'#######'} type="aside" />
        </aside>
    )
}

export default Aside;