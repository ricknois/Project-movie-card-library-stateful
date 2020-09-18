import { render } from 'enzyme';
import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar';

class SearchBar extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      onSearchTextChange: callback,
      bookmarkedOnly: false,
      onBookmarkedChange: callback,
      selectedGenre: '',
      onSelectedGenreChange: callback,
    }
  }

  handleChange({ target }) {
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="movie-card-header">
        <form id='search-bar-form'>
          <label id='text-input-label'>
            Inclui o texto:
            <input type="text" name="searchtext" value="searchText" />
          </label>
        </form>
      </div>
    );
  }

}

export default SearchBar;