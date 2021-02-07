import React from 'react';
import BandImageCarousel from '../components/band-image-carousel';
import BandTitle from '../components/band-title';
import BandInfo from '../components/band-info';
import BandMembers from '../components/band-members';
import BandDiscography from '../components/band-discography';
import BandVideography from '../components/band-videography';

export default class BandPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.bandPage = this.bandPage.bind(this);
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

  bandPage() {
    const { data } = this.state;
    const { band, images, albums, members, videos } = data;
    if (data) {
      return (
        <div className='container'>
          <BandImageCarousel bandData={images} />
          <BandTitle bandData={band} />
          <BandInfo bandData={band}/>
          <BandMembers bandData={members}/>
          <BandDiscography bandData={albums}/>
          <BandVideography bandData={videos}/>
        </div>
      );
    } else {
      return (<></>);
    }
  }

  render() {
    return (
      <this.bandPage />
    );
  }
}
