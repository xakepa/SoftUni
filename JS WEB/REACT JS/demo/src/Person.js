import React from 'react';
import styles from './counter.module.css';

class Person extends React.Component {
    render() {
        return (
            <article>
                <h1 className={styles.title}> My name is {this.props.name}</ h1>
            </article>
        )
    }
}

export default Person;