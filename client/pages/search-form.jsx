import React from 'react';
import DropdownMenu from './dropdown-menu';
import NoCategorySelectedMessage from '../components/no-category-selected-message';
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
    this.debouncedGetSearchResults = debounce(this.getSearchResults, 600);
  }

  getSearchResults() {
    const { category, search } = this.state;
    if (category && search) {
      fetch(`/api?search=${this.state.search}&category=${this.state.category}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            data
          });
        })
        .catch(err => console.error(err));
    } else {
      this.setState({
        data: ''
      });
    }
  }

  handleCategoryInput(event) {
    this.setState({
      category: event.target.value
    });

    const { search } = this.state;
    if (search) {
      this.setState({
        search: '',
        data: ''
      });
      document.getElementById('input-search').value = '';
    }
  }

  handleSearchInput(event) {
    this.setState({
      search: event.target.value
    }, state => {
      this.debouncedGetSearchResults(state);
    });
  }

  render() { // console.log(this.state)
    const { category, search, data } = this.state;
    let noCategory;
    if (search && !category) {
      noCategory = <NoCategorySelectedMessage />;
    }

    let dropdownMenu;
    if (data) {
      dropdownMenu = <DropdownMenu result={this.state} />;
    } else {
      dropdownMenu = '';
    }

    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col col-lg-8 m-3'>
            <h1 className='display-4'>Search</h1>
            <figure>
              <blockquote className="blockquote">
                <p className='fw-light'>What was &apos;dat&apos; band called</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                your blurry <cite title="Source Title">Memory</cite>
              </figcaption>
            </figure>
          </div>
        </div>

        <form>
          <div className='row justify-content-center g-2'>
            <div className='col-10 col-sm-3 col-md-2 pb-1'>
              <select
                className="form-select btn btn-light"
                onChange={this.handleCategoryInput}>
                  <option value='' defaultValue>Category</option>
                  <option value="band">Band</option>
                  <option value="album">Album</option>
                  <option value="musician">Musician</option>
              </select>
            </div>
            <div className='col-10 col-sm-6 col-md-4'>
              <input
                className="form-control btn-light"
                onChange={this.handleSearchInput}
                type="text"
                placeholder='search'>
              </input>
            </div>
          </div>
        </form>

          {/* <div className="form-check form-check-inline">
            <input
            className="form-check-input"
            type="radio"
            name="category"
            id="category-band"
            value="band"
            onChange={this.handleCategoryInput}></input>
            <label
            className="form-check-label"
            htmlFor="category-album">Band</label>
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
          </div> */}
          {/* <div className='col d-flex justify-content-center'>
            <input
            className='w-100'
            type='text'
            name='input-search'
            id='input-search'
            placeholder='Search'
            onChange={this.handleSearchInput}></input>
          </div> */}

        {dropdownMenu}
        {noCategory}
      </div>
    );
  }
}
