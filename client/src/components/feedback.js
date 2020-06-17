import React from 'react'
import './style/feedback.css'

class Feedback extends React.Component {

    constructor(props) {
        super(props)
    }

    async feedback() {
        //Vraagt om de gebruikers feedback en stuurt het dan naar de server via een POST request
        let feeddback = window.prompt("Type hier je feedback :)") 
        const reqeust = await fetch("http://localhost:9000/feedback/", {
            method: "POST",
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: JSON.stringify(feedback)
        })
        const response = await reqeust.json()
        console.log(response)

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