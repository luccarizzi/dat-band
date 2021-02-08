import React from 'react';
import MusicianImage from '../components/musician/musician-image';
import MusicianTitle from '../components/musician/musician-title';
import MusicianInfo from '../components/musician/musician-info';

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
        <MusicianInfo />
      </div>
    );
  }

  render() {
    return (
      <this.page />
    );
  }
}
