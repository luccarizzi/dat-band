import React from 'react';

export default class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.result = this.result.bind(this);

  }

  result(props) {
    return (
        <div className='col-12'>
          <div className='card border-0'>
            <div className='row'>
              <div className='col-5 m-auto'>
                <img className='img-fluid border' src={props.data.bandImageUrl}></img>
              </div>
              <div className='col-7 ps-0 py-1'>
                <div className=''>
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
    );
  }

  render() {
    const data = this.props.result.data;
    const dataList = data.map(data => {
      let result;
      if (this.props.result.data) {
        result = <this.result data={data} key={data.bandId} />;
      } else {
        result = '';
      }
      return result;
    });

    // const { category } = this.props.result;
    // console.log(category)

    return (
      <div className='container'>
        <div className='row m-auto dropdown-menu-width border border-secondary border-top-0'>
          {dataList}
        </div>
      </div>
    );
  }
}
