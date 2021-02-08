import React from 'react';
import BandImageCarousel from '../components/band/band-image-carousel';
import BandTitle from '../components/band/band-title';
import BandInfo from '../components/band/band-info';
import BandMembers from '../components/band/band-members';
import BandDiscography from '../components/band/band-discography';
import BandVideography from '../components/band/band-videography';

export default class BandPage extends React.Component {
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
      <this.page />
    );
  }
}
