import React from 'react';
import styles from './clicker.module.css'
class Button extends React.Component {

    state = {
        counter: this.props.counter,
        over: false,
        timeleft: 10
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                over: true
            })
        }, 10000);

        const interval = setInterval(() => {
            this.setState({
                timeleft: this.state.timeleft - 1
            })

        }, 1000)

        if (this.state.timeleft === 0) {
            clearInterval(interval)
        }
    }

    updateCounter = () => {

        this.setState({
            counter: this.state.counter + 1
        })

    }

    restartGame = () => {
        this.setState({
            over: false,
            counter: 0,
            timeleft: 10
        })

        setTimeout(() => {
            this.setState({
                over: true
            })
        }, 10000);
    }


    render() {
        return (
            < div >
                <h3>Оставащо време: {(this.state.timeleft > 0) ? this.state.timeleft : 0} </h3>
                <p> <button className={styles.click} disabled={this.state.over} onClick={this.updateCounter}>Click here !</button></p>
                <h2> Вашият резултат е: {this.state.counter}</h2>
                <p> <button className={styles.submit} onClick={this.restartGame}>Нова игра</button></p>
            </div >
        )
    }
}


export default Button;