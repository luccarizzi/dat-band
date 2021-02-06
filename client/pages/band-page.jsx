import React from 'react';
import Carousel from './carousel';
import Videography from './videography';

export default class BandPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.bandPage = this.bandPage.bind(this);
  }

  componentDidMount() {
    const { path } = this.props.send.route;
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
          <div className='row'>

            <div className='col-12 g-0'>
              <Carousel images={images}/>
            </div>

            <div className='col-12'>
              <h1 className='display-1'>{band[0].bandName}</h1>
            </div>

            <div className='col-12 bg-dark bg-gradient g-0 text-white page-font mb-3'>
              <div className='p-3'>
                <div className='pb-2'>
                  <i className="fas fa-map-marker-alt"></i>
                  <span className='ps-2'>{band[0].city}, {band[0].state}, {band[0].country}</span>
                </div>
                <div className='pb-2'>
                  <i className="fas fa-music"></i>
                  <span className='ps-2'>{band[0].bandGenre}</span>
                </div>
                <div>
                  <i className="fas fa-users"></i>
                  <span className='ps-2'>Current:</span>
                  <ul className='detail-font mb-0 pb-2'>
                    {
                      members.map(member => {
                        let li;
                        if (member.current) {
                          li = <li key={member.musicianId}>{member.musicianFirstName} {member.musicianLastName}</li>;
                        }
                        return li;
                      })
                    }
                  </ul>
                </div>
                <div>
                  <i className="fas fa-users-slash"></i>
                  <span className='ps-2'>Past:</span>
                  <ul className='detail-font mb-2'>
                    {
                      members.map(member => {
                        let li;
                        if (!member.current) {
                          li = <li key={member.musicianId}>{member.musicianFirstName} {member.musicianLastName}</li>;
                        }
                        return li;
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-12 bg-dark bg-gradient g-0 text-white page-font mb-3'>
              <div className='p-3'>
                <div className='pb-2'>
                  <i className="fas fa-record-vinyl"></i>
                  <span className='ps-2 text-uppercase fw-bold'>Discography</span>
                </div>
                <ul className='list-unstyled ps-2 mb-2'>
                  {
                    albums.map(album => {
                      return (
                        <li key={album.albumId}>{album.releaseYear} - {album.albumTitle}</li>
                      );
                    })
                  }
                </ul>
              </div>
            </div>
            <Videography videos={videos}/>
          </div>
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
