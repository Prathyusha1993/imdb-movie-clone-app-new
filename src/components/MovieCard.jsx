import React from "react";

function MovieCard({ poster_path, name, handleAddToWatchList, movie }) {
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div
        onClick={() => handleAddToWatchList(movie)}
        className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
      >
        &#128525;
      </div>
      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
