import React from 'react';
import SingleOrigami from '../single-origami';
import styles from './index.module.css';

class Origamies extends React.Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         origami: []
    //     }
    // }

    //short syntax

    state = {
        origami: []
    }

    getOrigamis = async () => {
        fetch('http://localhost:9999/api/origami')
            .then(res => res.json())
            .then(origami => this.setState({ origami }))
            .catch(console.error);
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
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Publications
                </h1>
                <div className={styles[`posts-wrapper`]}>
                    {this.renderOrigami()}
                </div>
            </div>
        )
    }
}

export default Origamies