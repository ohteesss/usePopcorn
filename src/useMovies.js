import { useState, useEffect } from "react";

const KEY = "9a8f8c19";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      //   callback();
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          // const res = await fetch(
          //   `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          // );
          // if (!res.ok)
          //   throw new Error("Something went wrong with loading movies");
          let res;
          try {
            res = await fetch(
              `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
              { signal: controller.signal }
            );
          } catch (err) {
            if (!res || !res.ok) {
              throw new Error("Something went wrong during fetching");
            }
          }
          const data = await res.json();
          console.log(data);
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          // console.error(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      //   handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
