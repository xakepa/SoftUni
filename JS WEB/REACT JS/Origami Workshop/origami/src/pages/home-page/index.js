import React from 'react';
import PageWrapper from '../../components/page-wrapper';
import Title from '../../components/title';
import Ogiramies from '../../components/origamies'
import UserContext from '../../Context';

class HomePage extends React.Component {
  static contextType = UserContext

  render() {
    console.log(this.context);
    return (
      <PageWrapper>
        <Title title='Publications' />
        <Ogiramies />
      </PageWrapper>
    )
  }
}

export default HomePage
