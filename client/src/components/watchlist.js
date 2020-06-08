import React from 'react'
import './style/watch.css'



class Movielist extends React.Component {

    componentDidMount() {
        //Fetch Movie list
    }

    render() {
        return(
            <div id="watch">
                <div id="movie">1</div>
                <div id="movie">2</div>
                <div id="movie">3</div>
                <div id="movie">4</div>
                <div id="movie">5</div>
            </div>
        )
    }
}

export default Movielist;