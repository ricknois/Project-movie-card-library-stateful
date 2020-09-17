import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  renderSearch() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <input
        type="text" value={searchText} onChange={onSearchTextChange}
        data-testid="text-input" id="text-input"
      />
    );
  }

  renderInputFavourite() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <input
        type="checkbox" data-testid="checkbox-input" checked={bookmarkedOnly}
        onChange={onBookmarkedChange} id="checkbox-input"
      />
    );
  }

  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select
        value={selectedGenre} onChange={onSelectedGenreChange}
        data-testid="select-input" id="select-input"
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <div>
          <label data-testid="text-input-label" htmlFor="text-input">Inclui o texto:</label>
          {this.renderSearch()}
        </div>
        <div>
          <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
            Mostrar somente favoritos
          </label>
          {this.renderInputFavourite()}
        </div>
        <div>
          <label data-testid="select-input-label" htmlFor="select-input">Filtrar por gênero</label>
          {this.renderSelect()}
        </div>
      </form>
    );
  }
}

// learned here:
// https://stackoverflow.com/questions/35436162/how-to-set-defaultprops-for-function
function getDefaultProps() {
  return {
    onSearchTextChange: this.onSearchTextChange.bind(this),
    onBookmarkedChange: this.onBookmarkedChange.bind(this),
    onSelectedGenreChange: this.onSelectedGenreChange.bind(this),
  };
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.isRequired,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.element,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: 'Default',
  onSearchTextChange: getDefaultProps,
  onBookmarkedChange: getDefaultProps,
  selectedGenre: '',
  onSelectedGenreChange: getDefaultProps,
};

export default SearchBar;
