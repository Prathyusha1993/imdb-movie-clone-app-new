import React, { useEffect, useState } from "react";
import genreids from "../utilities/genre";

const WatchList = ({ watchlist, setWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSortAscending = () => {
    let sortedAscend = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedAscend]);
  };

  const handleSortDescending = () => {
    let sortedDescend = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDescend]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  const handleFilterGenre = (genre) => {
    setCurrentGenre(genre);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilterGenre(genre)}
              className={
                currentGenre == genre
                  ? "bg-blue-400 flex justify-center rounded-xl text-white font-bold items-center w-[9rem] h-[3rem] mx-4"
                  : "bg-gray-400/50 flex justify-center rounded-xl text-white font-bold items-center w-[9rem] h-[3rem] mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          className="h-[3rem] w-[18rem] bg-gray-300 outline-none px-4"
          type="text"
          placeholder="Search Movies"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <div className="flex justify-center w-full ">
                <div onClick={handleSortAscending} className="p-2">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <th className="p-2">Ratings</th>
                <div onClick={handleSortDescending} className="p-2">
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </div>
              <th>Popularity</th>

              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt=""
                      />
                      <div className="mx-15">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td className="text-red-800">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
