import React from 'react';
import MusicianImage from '../components/musician/musician-image';
import MusicianTitle from '../components/musician/musician-title';

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
        <MusicianTitle />
      </div>
    );
  }

  render() {
    return (
      <this.page />
    );
  }
}
