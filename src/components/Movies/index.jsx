import { Movie } from "../Movie";

export function Movies({ list }) {
  return (
    <section>
      {list.length > 0 &&
        list.map((movie) => <Movie key={movie.id} item={movie} />)}
    </section>
  );
}
