import React from 'react';
import styles from './input.module.css';
class Input extends React.Component {

    state = {
        value: ''
    }

    updateValue = (evenet) => {
        this.setState({
            value: evenet.target.value
        })
    }

    render() {
        return (
            <div>
                <p className={styles.title}>{this.state.value}</p>
                <input onChange={this.updateValue} />
            </div>
        )
    }
}

export default Input;