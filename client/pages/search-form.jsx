import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      search: ''
    };
    this.handleCategoryInput = this.handleCategoryInput.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleCategoryInput() {
    this.setState({
      category: event.target.value
    });
  }

  handleSearchInput() {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    const { category, search } = this.state;
    const parameters = {
      category: category,
      search: search
    };
    this.props.onChange(parameters);

    return (
      <form className='container mt-2'>
        <div className='row'>
          <div className='col d-flex justify-content-center mb-2'>
            <div className="form-check form-check-inline">
              <input
              className="form-check-input"
              type="radio"
              name="category"
              id="category-band"
              value="band"
              onChange={this.handleCategoryInput}></input>
              <label
              className="form-check-label"
              htmlFor="category-band">Band</label>
            </div>
            <div className="form-check form-check-inline">
              <input
              className="form-check-input"
              type="radio"
              name="category"
              id="category-album"
              value="album"
              onChange={this.handleCategoryInput}></input>
              <label
              className="form-check-label"
              htmlFor="category-album">Album</label>
            </div>
            <div className="form-check form-check-inline">
              <input
              className="form-check-input"
              type="radio"
              name="category"
              id="category-musician"
              value="musician"
              onChange={this.handleCategoryInput}></input>
              <label
              className="form-check-label"
              htmlFor="category-musician">Musician</label>
            </div>
          </div>
        </div>
        <div className='col d-flex justify-content-center mb-2'>
          <input
          className=''
          type='text'
          name='input-search'
          id='input-search'
          placeholder='Search'
          onChange={this.handleSearchInput}></input>
        </div>
      </form>
    );
  }
}
