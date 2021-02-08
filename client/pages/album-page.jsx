import React from 'react';
import AlbumImage from '../components/album/album-image';
import AlbumInfo from '../components/album/album-info';
import AlbumTitle from '../components/album/album-title';
import AlbumPersonnel from '../components/album/album-personnel';
import AlbumTrackList from '../components/album/album-track-list';

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
    const { album, tracksList, personnel } = data;
    if (data) {
      return (
        <div className='container'>
          <AlbumImage albumData={album} />
          <AlbumTitle albumData={album} />
          <AlbumInfo albumData={data} />
          <AlbumPersonnel albumData={personnel}/>
          <AlbumTrackList albumData={tracksList} />
        </div>
      );
    } else {
      return (<></>);
    }
  }

  render() {
    return (
      <this.page />
    );
  }
}
