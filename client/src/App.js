import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom';
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'

export default function App () {
  // const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
          console.log(movieList)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  return(
    <div className = 'App'>
      <SavedList list={[ /* This is stretch */]} />
<Switch>
        <Route exact path='/'>
        <MovieList data = {movieList}></MovieList>;
        </Route>

        <Route path='/movies/:id'>
        <Movie/> 
        </Route>
        </Switch>
    </div>
  )
  }
//   const addToSavedList = id => {
//     // This is stretch. Prevent the same movie from being "saved" more than once
//   };

//   return (
//     <div>
//       <SavedList list={[ /* This is stretch */]} />

//       <div>Replace this Div with your Routes</div>
//     </div>
//   );
// }
