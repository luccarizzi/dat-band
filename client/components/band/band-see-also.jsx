import React from 'react';

export default class BandSeeAlso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: ''
    };
    this.seeAlso = this.seeAlso.bind(this);
  }

  componentDidMount() {
    const { bandGenre } = this.props.bandData[0];
    fetch(`/api/genre?bandGenre=${bandGenre}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          bands: data
        });
      })
      .catch(err => console.error(err));
  }

  seeAlso(props) {
    const { bands } = this.state;
    if (bands) {
      return (
        <div className='row'>
          <div className='bg-dark bg-gradient text-white mb-3'>
            <p className='py-3 mb-0 text-uppercase fw-bold section-title'>See Also</p>
            <div className='page-font'>
              <ul className='list-unstyled'>
                {
                  bands.map(band => {
                    const { bandId } = props.genre;
                    if (bandId === band.bandId) {
                      return (<a key={band.bandId} ></a>);
                    }
                    return (
                      <a href={`#band/${band.bandId}`} key={band.bandId} className='link-light text-decoration-none'>
                        <li className='row mb-3'>
                          <div className='col-4'>
                            <img className='album-image img-fluid border border-secondary' src={band.bandImageUrl}></img>
                          </div>
                          <div className='col-8 d-flex'>
                            <p className='mb-0 text-decoration-underline align-self-center'>{band.bandName}</p>
                          </div>
                        </li>
                      </a>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <this.seeAlso genre={this.props.bandData[0]} />
    );
  }
}
