import React from 'react';
import MusicianImage from '../components/musician/musician-image';

export default class MusicianPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };

    this.page = this.page.bind(this);
  }

  page() {
    return (
      <div className='container'>
        <MusicianImage />
      </div>
    );
  }

  render() {
    return (
      <this.page />
    );
  }
}
