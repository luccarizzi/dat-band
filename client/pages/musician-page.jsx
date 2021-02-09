import React from 'react';
import MusicianImage from '../components/musician/musician-image';
import MusicianTitle from '../components/musician/musician-title';
import MusicianInfo from '../components/musician/musician-info';
import MusicianAssociated from '../components/musician/musician-associated';
import MusicianRecorded from '../components/musician/musician-recorded';

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
    const { image, title, info, associated, recorded } = data;
    if (data) {
      return (
        <div className='container'>
          <MusicianImage musicianData={image}/>
          <MusicianTitle musicianData={title}/>
          <MusicianInfo musicianData={info}/>
          <MusicianAssociated musicianData={associated}/>
          <MusicianRecorded musicianData={recorded}/>
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
