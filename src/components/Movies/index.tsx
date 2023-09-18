import { IMovie } from "../../interfaces/movie";
import { Movie } from "../Movie";
interface IMoviesProps {
  list: IMovie[];
}
export function Movies({ list }: IMoviesProps) {
  return (
    <section>
      {list.length > 0 &&
        list.map((movie) => <Movie key={movie.id} item={movie} />)}
    </section>
  );
}
