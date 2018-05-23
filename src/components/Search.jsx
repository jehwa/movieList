class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    handleChange(searchVal) {
        this.setState({search: searchVal});
    }

    render() {
        return (
            <div>
                <input type="text" name="search" onChange={(e) => this.handleChange(e.target.value)}></input>
                <input type="submit" value="SUBMIT" onClick={() => this.props.search(this.state.search)}></input>
            </div>    
        )
    }
}

window.Search = Search;