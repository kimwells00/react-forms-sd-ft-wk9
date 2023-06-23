import { useEffect, useState } from "react";

import "./App.css";
import MovieContainer from "./components/MovieContainer/MovieContainer";

// function App() {
// const [ditto, setDitto] = useState({});
// const [formData, setFormData] = useState({
//   username: "",
//   password: "",
//   email: "",
// });
// useEffect(() => {
//   const fetchDitto = async () => {
//     const getDitto = await fetch("https://pokeaoi.co/api/v2/pokemon/ditto");
//     const jsonDitto = await getDitto.json();
//     setDitto(jsonDitto);
//   };
//   fetchDitto();
// }, []);
// return (
//   <>
//     <form action="">
//       <input
//         type="text"
//         name="username"
//         onChange={(e) =>
//           setFormData({ ...formData, [e.target.name]: e.target.value })
//         }
//         value={formData?.username}
//       />
//       <label htmlFor="username"></label>
//       <input
//         type="password"
//         name="password"
//         onChange={(e) =>
//           setFormData({ ...formData, [e.target.name]: e.target.value })
//         }
//         value={formData?.password}
//       />
//       <input
//         type="text"
//         name="email"
//         onChange={(e) =>
//           setFormData({ ...formData, [e.target.name]: e.target.value })
//         }
//         value={formData?.email}
//       />
//       <input type="submit" value="" />
//     </form>

//     </>
//   );
// }

function App() {
  const [formData, setFormData] = useState({
    search: "",
  });
  const [moviePosterFirst, setmoviePosterFirst] = useState([]);
  const [moviePosterSecond, setmoviePosterSecond] = useState([]);
  const [moviePosterThird, setmoviePosterThird] = useState([]);
  const [movies, setMovies] = useState([]);

  //FIRST MOVIE
  useEffect(() => {
    const fetchmoviePosterFirst = async () => {
      const getPosters = await fetch(
        //getting movie by hardcoded imdb id
        "http://www.omdbapi.com/?apikey=516faa29&i=tt14452776"
      );

      const jsonPosters = await getPosters.json();
      setmoviePosterFirst(jsonPosters);
    };
    fetchmoviePosterFirst();
  }, []);
  //SECOND MOVIE
  useEffect(() => {
    const fetchmoviePosterSecond = async () => {
      const getPosters = await fetch(
        //getting movie by hardcoded imdb id
        "http://www.omdbapi.com/?apikey=516faa29&i=tt13406094"
      );

      const jsonPosters = await getPosters.json();
      setmoviePosterSecond(jsonPosters);
    };
    fetchmoviePosterSecond();
  }, []);
  //THIRD MOVIE
  useEffect(() => {
    const fetchmoviePosterThird = async () => {
      const getPosters = await fetch(
        //getting movie by hardcoded imdb id
        "http://www.omdbapi.com/?apikey=516faa29&i=tt2085059"
      );

      const jsonPosters = await getPosters.json();
      setmoviePosterThird(jsonPosters);
    };
    fetchmoviePosterThird();
  }, []);
  //search for movie
  const searchMovies = async () => {
    const apiKey = "516faa29";
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${formData.search}`
    );
    const jsonMovies = await response.json();
    setMovies(jsonMovies.Search);
  };

  return (
    <>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          name="search"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData?.search}
        />
        <input type="submit" value="Submit" />
      </form>
      <MovieContainer
        moviePosterFirst={moviePosterFirst}
        moviePosterSecond={moviePosterSecond}
        moviePosterThird={moviePosterThird}
        movies={movies}
      />
    </>
  );
}

export default App;
