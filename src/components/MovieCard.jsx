import React from "react";
import PropTypes from "prop-types";
import Rating from "./Rating";

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating, genre } = this.props.filmes;
    return (
      <div className="movie-card">
        <img src={imagePath} alt={title} className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <h5 className="movie-card-genre">{genre}</h5>
        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  filmes: PropTypes.exact({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
