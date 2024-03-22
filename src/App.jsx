import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const handleAddToWatchList = (movie) => {
    let newWatchList = [...watchlist, movie];
    setWatchlist(newWatchList);
    console.log(newWatchList);
  };

  const handleRemoveFromWatchList = (movie) => {
    let filteredWatchList = watchlist.filter((movieFilter) => {
      return movieFilter.id != movie.id;
    });
    setWatchlist(filteredWatchList);
    console.log(filteredWatchList);
  };

  return (
    <>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// 6e07b1f77e80ddd4e3cd709d8df384d4
