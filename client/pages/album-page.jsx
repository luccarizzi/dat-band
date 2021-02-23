import React from 'react';
import AlbumImage from '../components/album/album-image';
import AlbumInfo from '../components/album/album-info';
import AlbumTitle from '../components/album/album-title';
import AlbumPersonnel from '../components/album/album-personnel';
import AlbumTrackList from '../components/album/album-track-list';
import NotFound from '../components/not-found';

export default class AlbumPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.page = this.page.bind(this);
  }

  componentDidMount() {
    const { path } = this.props.queriedRoute.route;
    fetch(`api/${path}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data
        });
      })
      .catch(err => console.error(err));
  }

  page() {
    const { data } = this.state;
    const { image, title, info, personnel, trackList } = data;
    if (data.error) {
      return (
        <NotFound />
      );
    }

    if (data) {
      return (
        <div className='container'>
          <AlbumTitle albumData={title} />
          <AlbumImage albumData={image} />
          <AlbumInfo albumData={info} />
          <AlbumPersonnel albumData={personnel}/>
          <AlbumTrackList albumData={trackList} />
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <this.page />
    );
  }
}
