import { useEffect, useState } from "react";
import { Movies } from "../../components/Movies";
import styles from "./home.module.css";
import { api } from "../../services/api";
import { IMovie } from "../../interfaces/movie";

interface IResponse {
  results: IMovie[];
}
export function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  // get -> pegar os dados
  // post -> cadastrar  dados
  // put -> alterar dados
  // patch -> alterar um dado
  // delete -> deletar um dado
  async function getMovies() {
    try {
      const { data } = await api.get<IResponse>(
        "popular?language=pt-BR&page=1&adult=false"
      );
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
