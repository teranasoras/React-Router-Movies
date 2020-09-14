import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom'

export default function MovieList(props) {
  const { data } = props;
  return (
    <div className="movie-list">
      {data.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  return (
    <Link to = {`movies/${id}`}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
    </Link>
  );
}
