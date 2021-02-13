import React from 'react';
import NoMatchMessage from '../components/no-match-message';

export default class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
    this.bandResults = this.bandResults.bind(this);
    this.albumResults = this.albumResults.bind(this);
    this.musicianResults = this.musicianResults.bind(this);
  }

  bandResults(props) {
    const { bandId, bandImageUrl, bandName, city, debutYear } = props.data;
    return (
      <a href={`#band/${bandId}`} className='text-decoration-none text-dark'>
        <div className='row pb-3 g-2 g-sm-4 justify-content-center'>
          <div className='col-6 col-sm-6 col-md-5 col-lg-4'>
            <img className='rounded object-fit-cover float-end band-image' src={bandImageUrl}></img>
          </div>
          <div className='col-6 col-sm-6 col-md-5 col-lg-4'>
            <h6 className='font-title'>{bandName}</h6>
            <p className='font-detail m-0'>{city}</p>
            <p className='font-detail m-0'>{debutYear}</p>
          </div>
        </div>
      </a>
    );
  }

  albumResults(props) {
    const { albumId, albumImageUrl, albumTitle, recordLabel, releaseYear } = props.data;
    return (
      <a href={`#album/${albumId}`} className='text-decoration-none text-dark'>
        <div className='row pb-3 g-2 g-sm-4 justify-content-center'>
          <div className='col-6 col-sm-6 col-md-5 col-lg-4 album-image'>
            <img className='img-fluid rounded' src={albumImageUrl}></img>
          </div>
          <div className='col-6 col-sm-6 col-md-5 col-lg-4'>
            <h6 className='font-title'>{albumTitle}</h6>
            <p className='font-detail m-0'>{recordLabel}</p>
            <p className='font-detail m-0'>{releaseYear}</p>
          </div>
        </div>
      </a>
    );
  }

  musicianResults(props) {
    const { musicianId, musicianImageUrl, musicianFirstName, musicianLastName, dob, city } = props.data;
    return (
      <a href={`#musician/${musicianId}`} className='text-decoration-none text-dark'>
        <div className='row pb-3 g-2 g-sm-4 justify-content-center'>
          <div className='col-6 col-sm-6 col-md-5 col-lg-4'>
            <img className='rounded object-fit-cover float-end musician-image' src={musicianImageUrl}></img>
          </div>
          <div className='col-6 col-sm-6 col-md-5 col-lg-4'>
            <h6 className='font-title'>{musicianFirstName} {musicianLastName}</h6>
            <p className='font-detail m-0'>{dob}</p>
            <p className='font-detail m-0'>{city}</p>
          </div>
        </div>
      </a>
    );
  }

  render() {
    let noResult;
    const { category, data } = this.props.result;
    if (data.length === 0) {
      noResult = <NoMatchMessage result={this.props.result} />;
    }

    const dataList = this.props.result.data.map((data, index) => {
      let result;
      if (index > 4) {
        return result;
      }
      if (data && category) {
        switch (category) {
          case 'band':
            result = <this.bandResults data={data} key={data.bandId} />;
            break;
          case 'album':
            result = <this.albumResults data={data} key={data.albumId}/>;
            break;
          case 'musician':
            result = <this.musicianResults data={data} key={data.musicianId} />;
            break;
          default:
            break;
        }
      } else {
        result = '';
      }
      return result;
    });

    return (
      <div className='container'>
        {dataList}
        {noResult}
      </div>
    );
  }
}
