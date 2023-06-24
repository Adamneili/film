import React, { useState } from "react";

import { Moviedata } from "./Component/Moviedata";
import Navbarapp from "./Component/Navbarapp";
import Movielist from "./Component/Movielist";
import Addmovie from "./Component/Addmovie";

const App = () => {
  const [nameSearch, setNameSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);
  const [movies, setMovies] = useState(Moviedata);
  return (
    <div className="App">
      <Navbarapp
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        setRateSearch={setRateSearch}
        movies={movies}
        setMovies={setMovies}
      />

      <Movielist
        movies={movies}
        nameSearch={nameSearch}
        rateSearch={rateSearch}
      />
      <div className="Add1">
        <Addmovie movies={movies} setMovies={setMovies} />
      </div>
    </div>
  );
};

export default App;
