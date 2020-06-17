import React from 'react'
import './style/watch.css'

class Movielist extends React.Component {
    

    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            clicked: false,
            loading: null
        }
    }


    componentDidMount() {
        let nocomma = localStorage.getItem("movies").replace(/,/g, ' ')
        let res  = nocomma.split(" ");
        const index = res.indexOf("")
        if (index > -1) {
            res.splice(index,1)
        }
        this.setState({movies: res,loading: true})
    }

    change() {
        this.state.movies = []
        this.setState({clicked: true})
        let users_input = window.prompt("Type de films die je later wil kijken elke film achter komma")
        let nocomma = users_input.replace(/,/g, ' ')
        let res  = nocomma.split(" ");
        for (let i = 0; i < res.length; i++) {
            this.state.movies.push(res[i]);
        }
    }   


    async save() {
        const request = await fetch("http://localhost:9000/watch/ " + this.state.movies)
        const data = await request.json();
        localStorage.setItem("movies",data.movies.movies)
        console.log(data.movies.movies)
    }

    render() {
        let movieListEllement = [];

        if (this.state.clicked) {
            for (const [index,value] of this.state.movies.entries()) {
                movieListEllement.push(<div id="movie" key={index}>{value}</div>) 
            } 
        } else {
            for (const [index,value] of this.state.movies.entries()) {
                movieListEllement.push(<div id="movie" key={index}>{value}</div>) 
            } 
        }


        return(
            <div>
            <div className="buttons">
                <button onClick={this.change.bind(this)}>change</button>
                <button onClick={this.save.bind(this)}>Save</button>
            </div>
             <div id="watch">
                {movieListEllement}
            </div>
            </div>
          
        )
    }
}

export default Movielist;