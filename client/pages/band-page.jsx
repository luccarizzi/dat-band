import React from 'react';
import BandImageCarousel from '../components/band/band-image-carousel';
import BandTitle from '../components/band/band-title';
import BandInfo from '../components/band/band-info';
import BandMembers from '../components/band/band-members';
import BandDiscography from '../components/band/band-discography';
import BandVideography from '../components/band/band-videography';
import BandSeeAlso from '../components/band/band-see-also';

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

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const { path } = this.props.queriedRoute.route;
      fetch(`api/${path}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            data
          });
        })
        .catch(err => console.error(err));
      window.scrollTo(1, 1);
    }
  }

  page() {
    const { data } = this.state;
    const { imageCarousel, title, info, members, discography, videography, genre } = data;
    if (data) {
      return (
        <div className='container'>
          <BandImageCarousel bandData={imageCarousel} />
          <BandTitle bandData={title} />
          <BandInfo bandData={info}/>
          <BandMembers bandData={members}/>
          <BandDiscography bandData={discography}/>
          <BandVideography bandData={videography}/>
          <BandSeeAlso bandData={genre}/>
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
