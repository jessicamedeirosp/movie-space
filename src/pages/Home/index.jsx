import { useEffect, useState } from "react";
import { Movies } from "../../components/Movies";
import styles from "./home.module.css";

export function Home() {
  const [movies, setMovies] = useState([]);

  // get -> pegar os dados
  // post -> cadastrar  dados
  // put -> alterar dados
  // patch -> alterar um dado
  // delete -> deletar um dado
  async function getMovies() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNlYjY0Nzk5NGY5YThkZThlNzIwNTkzMzEwZTE4MSIsInN1YiI6IjVmNzY5ZDIzZmVhMGQ3MDAzNTE2ZWI1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A3sKnVdFW1RQPyuUow3CfQqCYCaVhPWY2kmvV5mTEoQ",
      },
    };
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1&adult=false";

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data.results);
    } catch (e) {
      alert(e);
    }
  }
  // pagina carregada
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <main className={`${styles.main} content`}>
      <h1 className={styles.title}>Filmes ({movies.length})</h1>
      <Movies list={movies} />
    </main>
  );
}
