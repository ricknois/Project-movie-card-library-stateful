import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data'

class MovieLibrary extends Component {
  constructor() {
    super();

    this.add = this.add.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
  }



  add(movie) {
    this.setState({
        movies: [...this.state.movies, movie]
      }
    )
  }

  render() {
    const { movies } = this.props;

    return (
      <div>
        <SearchBar
            searchText={this.searchText}
            bookmarkedOnly={this.bookmarkedOnly}
            selectedGenre={this.selectedGenre}
        />
        <MovieList movies={this.state.movies}/>
        <AddMovie onClick={this.add}/>
      </div>
    );
  }
}

export default MovieLibrary;
