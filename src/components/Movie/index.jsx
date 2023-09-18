import styles from "./movie.module.css";
import imdbImage from "../../assets/imdb.png";
import starImage from "../../assets/star.png";
export function Movie({ item }) {
  async function getMovieTrailer(id) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNlYjY0Nzk5NGY5YThkZThlNzIwNTkzMzEwZTE4MSIsInN1YiI6IjVmNzY5ZDIzZmVhMGQ3MDAzNTE2ZWI1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A3sKnVdFW1RQPyuUow3CfQqCYCaVhPWY2kmvV5mTEoQ",
      },
    };
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`;
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const selectedVideo = data.results.length - 1;
      const urlVideo = `https://www.youtube.com/watch?v=${data.results[selectedVideo].key}`;
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
