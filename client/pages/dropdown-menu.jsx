import React from 'react';

export default class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.renderResult = this.renderResult.bind(this);
  }

  renderResult() {
    return (
      <div className='col-12'>
        <div className='card'>
          <div className='row'>
            <div className='col-5 m-auto'>
              <img className='img-fluid border' src='https://cdn-img.scalabs.com.au/7l-0_puOcUjwbsS7tdj52BOu8axY38g5_kNuPtw-peM/aHR0cHM6Ly9zdy10/cmlwbGVtLXByZC5z/Y2FkaWdpdGFsLmlv/L21lZGlhLzQxNDU5/L21ldGFsbGljYS0x/OTg1LTgwMC5qcGc_/cHJlc2V0PU1haW5J/bWFnZQ'></img>
            </div>
            <div className='col-7 ps-0 py-1'>
              <div className=''>
                <h6>Metallica</h6>
                <div className='detail-font'>
                  <p className='m-0'>Los Angeles</p>
                  <p className='m-0'>Heavy Metal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <this.renderResult />

        </div>
      </div>
    );
  }
}
