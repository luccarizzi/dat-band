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
        <div className='row justify-content-center'>
          <div className='col col-lg-8 mx-3 mb-5 text-white bg-dark bg-gradient rounded'>
            <h3 className='p-2 p-sm-3 my-3 text-uppercase fw-bold font-title border-bottom'>See Also</h3>
            <div className='font-title'>
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
                          <div className='col-5'>
                            <img className='img-fluid rounded' src={band.bandImageUrl}></img>
                          </div>
                          <div className='col-7 d-flex'>
                            <p className='text-decoration-underline align-self-center'>{band.bandName}</p>
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
