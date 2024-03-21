import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=6e07b1f77e80ddd4e3cd709d8df384d4&language=en-US&page=2"
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 text-center font-bold ">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8 ">
        {movies.map((movie) => {
          return (
            <MovieCard
              poster_path={movie.poster_path}
              name={movie.original_title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;

// componenyt mounts and component updates is the behaviour of useeffect
//sometimes we don't to run useeffect eberytime we use dependency array, we using dependency array then compo will just mount but not update
// when we are passing var or numinto empty array then will run according to that var
