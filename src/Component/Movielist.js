import React from "react";
import MovieCard from "./Moviecard";
const Movielist = ({ movies, nameSearch, rateSearch }) => {
  const Search = () => {
    return movies.filter((film) => {
      return rateSearch === 0
        ? film.name.toLowerCase().includes(nameSearch.toLowerCase())
        : Number(film.rating) === rateSearch &&
            film.name.toLowerCase().includes(nameSearch);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {Search().map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default Movielist;
