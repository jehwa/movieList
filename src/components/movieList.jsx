var MovieList = (props) => (
    <div className="movieList">
      <ul>
    {props.movies.map(movie =>
      <MovieListEntry movie={movie} />
    )} 
      </ul>
    </div>
)

// movieList.propTypes = {
//   vmovies: React.PropTypes.array.isRequired
// };

window.MovieList = MovieList;