import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({ handleAddToWatchList }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrevPage = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNextPage = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6e07b1f77e80ddd4e3cd709d8df384d4&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 text-center font-bold ">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8 ">
        {movies.map((movie) => {
          return (
            <MovieCard
              poster_path={movie.poster_path}
              name={movie.original_title}
              handleAddToWatchList={handleAddToWatchList}
              movie={movie}
              key={movie.id}
            />
          );
        })}
      </div>
      <Pagination
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        pageNo={pageNo}
      />
    </div>
  );
};

export default Movies;

// componenyt mounts and component updates is the behaviour of useeffect
//sometimes we don't to run useeffect eberytime we use dependency array, we using dependency array then compo will just mount but not update
// when we are passing var or numinto empty array then will run according to that var
