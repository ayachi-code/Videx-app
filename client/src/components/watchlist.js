import React from 'react'
import './style/watch.css'

class Movielist extends React.Component {
    

    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            clicked: false
        }
    }


    change() {
        this.state.movies = []
        this.setState({clicked: true})
        console.log(this.state.movies)
        let users_input = window.prompt("Type de films die je later wil kijken elke film achter komma")
        let nocomma = users_input.replace(/,/g, ' ')
        let res  = nocomma.split(" ");
        for (let i = 0; i < res.length; i++) {
            this.state.movies.push(res[i]);
        }
        console.log(this.state.movies)
    }   

    render() {
        let movieListEllement = [];

        if (this.state.clicked) {
            for (const [index,value] of this.state.movies.entries()) {
                movieListEllement.push(<div id="movie" key={index}>{value}</div>)
            } 
        }        
        // for (const [index,value] of movies.entries()) {
        //     movieListEllement.push(<div id="movie" key={index}>{value}</div>)
        // } 
        return(
            <div>
            <button onClick={this.change.bind(this)}>change</button>
            <button>Save</button>
             <div id="watch">
                {movieListEllement}
            </div>
            </div>
          
        )
    }
}

export default Movielist;