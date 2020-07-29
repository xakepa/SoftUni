import React from 'react';
import SingleOrigami from '../single-origami';
import styles from './index.module.css';

class Origamies extends React.Component {

    state = {
        origami: []
    }

    getOrigamis = () => {
        const { length } = this.props
        fetch(`http://localhost:9999/api/origami`)
            .then(res => res.json())
            .then(origami => {
                origami = origami.slice(length)
                this.setState({ origami })
            })
            .catch(console.error)
    }

    componentDidMount() {
        this.getOrigamis();
    }

    renderOrigami = () => {
        const { origami } = this.state;
        return origami.map((singleOrigami, i) => <SingleOrigami key={singleOrigami._id} index={i} {...singleOrigami} />)
    }
    render() {
        return (

            <div className={styles[`posts-wrapper`]}>
                {this.renderOrigami()}
            </div>

        )
    }
}

export default Origamies