import logo from "./logo.svg";
import "./App.css";
import Filme from "./components/filme";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //consumir api
    fetch(
      // `https://api.themoviedb.org/3/movie/{movie_id}?api_key={cfdd132c4bd4e3e3940670987a09883c}&language=en-US`
      // `https://api.themoviedb.org/3/movie/popular?api_key=cfdd132c4bd4e3e3940670987a09883c&language=pt-BR&page=1`
      `https://api.themoviedb.org/3/movie/top_rated?api_key=cfdd132c4bd4e3e3940670987a09883c&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies([...movies, ...data.results]));
    fetch(
      // `https://api.themoviedb.org/3/movie/{movie_id}?api_key={cfdd132c4bd4e3e3940670987a09883c}&language=en-US`
      // `https://api.themoviedb.org/3/movie/popular?api_key=cfdd132c4bd4e3e3940670987a09883c&language=pt-BR&page=1`
      `https://api.themoviedb.org/3/movie/top_rated?api_key=cfdd132c4bd4e3e3940670987a09883c&language=pt-BR&page=2`
    )
      .then((response) => response.json())
      .then((data) => setMovies([...movies, ...data.results]));
  }, []);

  console.log(movies)
  return (
    <div className="App">
      {movies?.map((movie) => {
        return (
          <Filme
            key={movie.id}
            background={movie.backdrop_path}
            title={movie.title}
          />
        );
      })}
    </div>
  );
}

export default App;
