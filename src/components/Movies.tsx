import { IMoviesSearch } from "../interface/interface.movie";
import { Movie } from "./Movie";

export const Movies = ({Search = []}: IMoviesSearch): JSX.Element => {
  return (
    <div className='movies'>
        {Search.length ? (
            Search.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
            <h4>Nothing found</h4>
        )}
    </div>
  )
}
