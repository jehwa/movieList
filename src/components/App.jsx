class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {movies: window.movies};

    }

    render() {
        return (
            <div>
              <h3>
                  Movie List
              </h3>
              <div className="search">
                <Search />
              </div>
              <div className="movieListTable">
                <MovieList movies={this.state.movies}/>
              </div>
            </div>
        )
    }
}

window.App = App;