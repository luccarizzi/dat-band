import React from 'react';
import MusicianImage from '../components/musician/musician-image';
import MusicianTitle from '../components/musician/musician-title';
import MusicianInfo from '../components/musician/musician-info';
import MusicianAssociated from '../components/musician/musician-associated';
import MusicianRecorded from '../components/musician/musician-recorded';
import NotFound from '../components/not-found';

export default class MusicianPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.page = this.page.bind(this);
  }

  componentDidMount() {
    const { path } = this.props.queriedRoute.route;
    fetch(`/api/${path}`)
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
    const { image, title, info, associated, recorded } = data;
    if (data.error) {
      return (
        <NotFound />
      );
    }

    if (data) {
      return (
        <div className='container'>
          <MusicianTitle musicianData={title}/>
          <MusicianImage musicianData={image}/>
          <MusicianInfo musicianData={info}/>
          <MusicianAssociated musicianData={associated}/>
          <MusicianRecorded musicianData={recorded}/>
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
