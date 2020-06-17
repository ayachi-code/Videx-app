import React from 'react'
import './style/feedback.css'

class Feedback extends React.Component {

    constructor(props) {
        super(props)
    }

    feedback() {
        //Vraagt om de gebruikers feedback en stuurt het dan naar de server via een POST request
        let feeddback = window.prompt("Type hier je feedback :)") 
    }

    render() {
        return (
            <div className="feedback"> 
                <button onClick={this.feedback.bind(this)}>feedback</button>
            </div>
        )
    }
}

export default Feedback;