import React from 'react';
import Navbar from './pages/navbar';
import SearchForm from './pages/search-form';
import BandPage from './pages/band-page';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '' // parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const newRoute = parseRoute(window.location.hash);
      this.setState({
        route: newRoute
      });
    });
  }

  render() {
    const { route } = this.state;
    let seeSearchForm = '';
    let seePage = '';
    if (!route.path) {
      seeSearchForm = <SearchForm />;
    } else {
      if (route.path.startsWith('band')) {
        seePage = <BandPage />;
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
