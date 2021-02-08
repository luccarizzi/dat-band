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
    return (
      <div className='container'>
        <MusicianImage />
        <MusicianTitle />
        <MusicianInfo />
        <MusicianAssociated />
        <MusicianRecorded />
      </div>
    );
  }

  render() {
    return (
      <this.page />
    );
  }
}
