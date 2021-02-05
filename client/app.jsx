import React from 'react';
import Navbar from './pages/navbar';
// import SearchForm from './pages/search-form';
import BandPage from './band-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.getQueryData = this.getQueryData.bind(this);
  }

  getQueryData(queryData) {
    this.setState({
      data: queryData
    });
  }

  render() {
    return (
      <>
        <Navbar />
        {/* <SearchForm sendQueryData={this.getQueryData}/> */}
        <BandPage />
      </>
    );
  }
}
