class Search extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {};
    }

    render() {
        return (
            <div>
                <input type="text" name="search"></input>
                <input type="submit" value="SUBMIT"></input>
            </div>    
        )
    }
}

window.Search = Search;