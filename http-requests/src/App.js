import React, { Fragment, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  // const getMoviesHandler = () => {
  //   fetch('https://swapi.dev/api/films/')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       const movies = data.results.map(result => {
  //         return {
  //           id: result.episode_id,
  //           title: result.title,
  //           release: result.release_date,
  //           openingText: result.opening_crawl
  //         }
  //       });

  //       setMovies(movies);
  //     })
  // }

  const getMoviesHandler = async () => {
    const response = await fetch('https://swapi.dev/api/films/')
    const data = await response.json();

    const movies = data.results.map(result => {
      return {
        id: result.episode_id,
        title: result.title,
        release: result.release_date,
        openingText: result.opening_crawl
      }
    });

    setMovies(movies);
  }

  return (
    <Fragment>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </Fragment>
  );
}

export default App;
