import React from 'react';
import ReactDom from 'react-dom';
import Search from './components/search';
import Display from './components/display'
import Movielist from './components/watchlist';


class App extends React.Component {
    render() {
        return(
            <div>
                <Search/>
                <Movielist/>
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("root"))