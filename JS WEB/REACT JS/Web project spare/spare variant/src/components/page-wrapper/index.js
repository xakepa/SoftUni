import React from 'react';
import Header from '../../components/header';
import styles from './index.module.css';
import Aside from '../../components/aside/index';
import Footer from '../../components/footer';

function PageWrapper(props) {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                <Aside />
                <div className={styles[`inner-container`]}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default PageWrapper
