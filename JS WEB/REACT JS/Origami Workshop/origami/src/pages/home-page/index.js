import React from 'react';
import PageWrapper from '../../components/page-wrapper';
import styles from './index.module.css';
import SingleOrigami from '../../components/single-origami';
import Title from '../../components/title';
class HomePage extends React.Component {

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
      <PageWrapper>
        <Title title='Publications' />
        <div className={styles[`posts-wrapper`]}>
          {this.renderOrigami()}
        </div>
      </PageWrapper>
    )
  }
}

export default HomePage
