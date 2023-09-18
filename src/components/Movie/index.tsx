import styles from "./movie.module.css";
import imdbImage from "../../assets/imdb.png";
import starImage from "../../assets/star.png";
import { api } from "../../services/api";
import { IMovie } from "../../interfaces/movie";
interface IMovieProps {
  item: IMovie;
}
interface IMovieTrailer {
  key: string;
}
interface IResponse {
  results: IMovieTrailer[];
}
export function Movie({ item }: IMovieProps) {
  async function getMovieTrailer(id: string) {
    try {
      const { data } = await api.get<IResponse>(`${id}/videos?language=pt-BR`);
      const selectedVideo = data.results.at(-1);
      if (!selectedVideo) {
        alert("Não existe Trailer");
        return;
      }
      const urlVideo = `https://www.youtube.com/watch?v=${selectedVideo.key}`;
      window.open(urlVideo, "_blank");
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className={`${styles.movie} content-flex gap-6`}>
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
        className={styles.movie__image}
      />
      <div
        className={`${styles.movie__info} content-flex gap-3 content-flex-center-column`}
      >
        <h2>{item.title}</h2>
        <div className="content-flex gap-1 align-center">
          <img
            className={styles.movie__imdbImage}
            src={imdbImage}
            alt="logo imdb"
          />
          <p>{item.vote_average}</p>
          <img src={starImage} alt="estrela" />
        </div>
        <p className={styles.movie__description}>{item.overview}</p>
        <div className="content-flex gap-3">
          <button
            className="button-secundary"
            onClick={() => getMovieTrailer(item.id)}
          >
            Ver Trailer
          </button>
          <button className="button-outline">Add aos Favoritos</button>
        </div>
      </div>
    </div>
  );
}
