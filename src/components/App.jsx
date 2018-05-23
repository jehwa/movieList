class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {movies: [], 
            filtered: []};

    }

    search(val) {
        let newList = this.state.movies.filter((movie) => movie.title.toLowerCase().includes(val.toLowerCase()));
        this.setState({filtered: newList})
    }

    add(val) {
        $('input').val('');
        let exist = false;
        let newMovie = {title: val};
        this.state.movies.forEach((movie) => {
            if(movie.title === val) {
                exist = true;
                return;
            }
        })
        if(!exist) {
            this.state.movies.push(newMovie);
            this.setState({filtered: this.state.movies});            
        }
    }


    render() {
        return (
            <div>
              <h3>
                  Movie List
              </h3>
              <div className="add">
                <Add add={this.add.bind(this)}/>
              </div>
              <div className="search">
                <Search search={this.search.bind(this)}/>
              </div>
              <div className="movieListTable">
                <MovieList movies={this.state.filtered}/>
              </div>
            </div>
        )
    }
}

window.App = App;