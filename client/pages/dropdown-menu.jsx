import React from 'react';
import NoMatchMessage from '../components/no-match-message';
import NoCategorySelectedMessage from '../components/no-category-selected-message';

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
    return (
      <a href={`#band/${props.data.bandId}`} className='text-decoration-none text-dark'>
        <div className='col-12'>
          <div className='card border-0'>
            <div className='row'>
              <div className='col-5 m-auto'>
                <img className='img-fluid border' src={props.data.bandImageUrl}></img>
              </div>
              <div className='col-7 ps-0 py-1'>
                <div>
                  <h6>{props.data.bandName}</h6>
                  <div className='detail-font'>
                    <p className='m-0'>{props.data.city}</p>
                    <p className='m-0'>{props.data.debutYear}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }

  albumResults(props) {
    return (
      <a href={`#album/${props.data.albumId}`} className='text-decoration-none text-dark'>
        <div className='col-12'>
          <div className='card border-0'>
            <div className='row'>
              <div className='col-5 m-auto'>
                <img className='img-fluid border' src={props.data.albumImageUrl}></img>
              </div>
              <div className='col-7 ps-0 py-1'>
                <div>
                  <h6>{props.data.albumTitle}</h6>
                  <div className='detail-font'>
                    <p className='m-0'>{props.data.recordLabel}</p>
                    <p className='m-0'>{props.data.releaseYear}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }

  musicianResults(props) {
    return (
      <a href={`#musician/${props.data.musicianId}`} className='text-decoration-none text-dark'>
        <div className='col-12'>
          <div className='card border-0'>
            <div className='row'>
              <div className='col-5 m-auto'>
                <img className='img-fluid border' src={props.data.musicianImageUrl}></img>
              </div>
              <div className='col-7 ps-0 py-1'>
                <div>
                  <h6>{props.data.musicianFirstName} {props.data.musicianLastName}</h6>
                  <div className='detail-font'>
                    <p className='m-0'>{props.data.dob}</p>
                    <p className='m-0'>{props.data.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }

  render() {
    let noResult;
    const { category, search, data } = this.props.result;
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
        <div className='row m-auto dropdown-menu-width border border-secondary border-top-0 justify-content-center'>
          {dataList}
          {noResult}
        </div>
      </div>
    );
  }
}
