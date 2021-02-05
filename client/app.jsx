import React from 'react';
import Navbar from './pages/navbar';
import SearchForm from './pages/search-form';
import BandPage from './pages/band-page';

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
    const { data } = this.state;
    let seeSearchForm = '';
    let seePage = '';
    if (!data) {
      seeSearchForm = <SearchForm sendQueryData={this.getQueryData} />;
    } else {
      switch (data.category) {
        case 'band':
          seePage = <BandPage />;
          break;
        case 'album':
          seePage = <h1>album</h1>; // change
          break;
        case 'musician':
          seePage = <h1>musician</h1>; // change
          break;
        default:
          break;
      }

    }

    return (
      <>
        <Navbar />
        {seeSearchForm}
        {seePage}
      </>
    );
  }
}
