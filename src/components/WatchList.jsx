import React from "react";

const WatchList = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="bg-blue-400 flex justify-center rounded-xl text-white font-bold items-center w-[9rem] h-[3rem] mx-4">
          All Genre
        </div>
        <div className="bg-gray-400/50 flex justify-center rounded-xl text-white font-bold items-center w-[9rem] h-[3rem] mx-4">
          Action
        </div>
        <div className="bg-gray-400/50 flex justify-center rounded-xl text-white font-bold items-center w-[9rem] h-[3rem]">
          Crime
        </div>
      </div>
      <div className="flex justify-center my-4">
        <input
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
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="h-[6rem] w-10rem]"
                  src={
                    "https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-ron-poster.jpg"
                  }
                  alt=""
                />
                <div className="mx-15">Harry</div>
              </td>
              <td>4</td>
              <td>8765</td>
              <td>Drama</td>
              <td className="text-red-800">Delete</td>
            </tr>
            <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="h-[6rem] w-10rem]"
                  src={
                    "https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-ron-poster.jpg"
                  }
                  alt=""
                />
                <div className="mx-15">Harry</div>
              </td>
              <td>4</td>
              <td>8765</td>
              <td>Drama</td>
              <td className="text-red-800">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
