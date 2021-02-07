import React from 'react';
import AlbumImage from '../components/album-image';
import AlbumInfo from '../components/album-info';
import AlbumTitle from '../components/album-title';
import AlbumTrackList from '../components/album-track-list';

export default class AlbumPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'test'
    };
    this.albumPage = this.albumPage.bind(this);
  }

  albumPage() {
    const { data } = this.state; // console.log(data)
    if (data) {
      return (
      <div className='container'>
        <div className='row'>
          <AlbumImage />
          <AlbumTitle />
          <AlbumInfo />
          <AlbumTrackList />
        </div>
      </div>
      );
    } else {
      return (<></>);
    }
  }

  render() {
    return (
      <this.albumPage />
    );
  }
}
