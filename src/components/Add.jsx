class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: '',


        }
    }

    handleChange(val) {
        this.setState({movieName: val});
    }

    render() {
        return (
            <div>
                <input type="text" name="add" className="add" onChange={(e) => this.handleChange(e.target.value)}></input>
                <input type="submit" value="ADD" onClick={() => this.props.add(this.state.movieName)}></input>
            </div>
        )
   
    }

}