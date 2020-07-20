import React from 'react';
class Button extends React.Component {

    state = {
        counter: this.props.counter
    }

    updateCounter = () => {

        this.setState({
            counter: this.state.counter + 1
        })
    }


    render() {
        return (
            <div>
                <p> <button onClick={this.updateCounter}>Click Me</button></p>
                <p>{this.state.counter}</p>
                <h2> Result: {this.state.counter}</h2>
            </div>
        )
    }
}

export default Button;