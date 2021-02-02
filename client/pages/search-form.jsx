import React from 'react';

export default class SearchForm extends React.Component {

  render() {
    return (
      <form className='container mt-2'>
        <div className='row'>
          <div className='col d-flex justify-content-center mb-2'>
            <div className="form-check form-check-inline">
              <input
              className="form-check-input"
              type="radio"
              name="radio-band"
              id="radio-album"
              value="band"></input>
              <label
              className="form-check-label"
              htmlFor="radio-band">Band</label>
            </div>
            <div className="form-check form-check-inline">
              <input
              className="form-check-input"
              type="radio"
              name="radio-album"
              id="radio-album"
              value="album"></input>
              <label
              className="form-check-label"
              htmlFor="radio-album">Album</label>
            </div>
            <div className="form-check form-check-inline">
              <input
              className="form-check-input"
              type="radio"
              name="radio-musician"
              id="radio-musician"
              value="musician"></input>
              <label
              className="form-check-label"
              htmlFor="radio-musician">Musician</label>
            </div>
          </div>
        </div>
        <div className='col d-flex justify-content-center mb-2'>
          <input
          className=''
          type='text'
          name='input-search'
          id='input-search'
          placeholder='Search'></input>
        </div>
      </form>
    );
  }
}
