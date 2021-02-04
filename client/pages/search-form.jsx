import React from 'react';
import DropdownMenu from './dropdown-menu';
import { debounce } from 'lodash';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      search: '',
      data: ''
    };
    this.handleCategoryInput = this.handleCategoryInput.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.debouncedGetSearchResults = debounce(this.getSearchResults, 800);
  }

  getSearchResults() {
    fetch(`http://localhost:3000/api?search=${this.state.search}&category=${this.state.category}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data
        });
        // console.log(data)
      })
      .catch(err => console.error(err));
  }

  handleCategoryInput(event) {
    this.setState({
      category: event.target.value
    });
  }

  handleSearchInput(event) {
    this.setState({
      search: event.target.value
    }, state => {
      this.debouncedGetSearchResults(state);
    });
  }

  render() {
    // const { category, search, data } = this.state;
    // if (category && search) {
    //   const parameters = {
    //     category,
    //     search,
    //     data
    //   };
    // }

    return (
      <>
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
          <div className='col d-flex justify-content-center'>
            <input
            className='w-100'
            type='text'
            name='input-search'
            id='input-search'
            placeholder='Search'
            onChange={this.handleSearchInput}></input>
          </div>
        </form>
        <DropdownMenu />
      </>
    );
  }
}
