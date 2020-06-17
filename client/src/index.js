import React from 'react';
import ReactDom from 'react-dom';
import Search from './components/search';
import Movielist from './components/watchlist';
import Feedback from './components/feedback';


class App extends React.Component {
    render() {
        return(
            <div>
                <Search/>
                <Movielist/>
                <Feedback/>
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("root"))