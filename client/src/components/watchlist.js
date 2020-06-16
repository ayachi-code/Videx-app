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


    async save() {
        console.log(this.state.movies)
        const request = await fetch("http://localhost:9000/watch/ " + this.state.movies)
        const data = await request.json();
        if (data.status === "succes") {
            alert("succesvol opgeslagen :)")
        }        
    }

    render() {
        let movieListEllement = [];

        if (this.state.clicked) {
            for (const [index,value] of this.state.movies.entries()) {
                movieListEllement.push(<div id="movie" key={index}>{value}</div>)
            } 
        }        
        return(
            <div>
            <button onClick={this.change.bind(this)}>change</button>
            <button onClick={this.save.bind(this)}>Save</button>
             <div id="watch">
                {movieListEllement}
            </div>
            </div>
          
        )
    }
}

export default Movielist;