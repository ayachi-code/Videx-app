import React from 'react'
import './style/watch.css'



class Movielist extends React.Component {


    render() {
        let movieListEllement = [];

        for (let i = 0; i <= 5; i++) {
            movieListEllement.push(<div id="movie" key={i}></div>)
        }
        return(
            <div id="watch">
                {movieListEllement}
            </div>
        )
    }
}

export default Movielist;