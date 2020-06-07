import React from 'react';
import ReactDom from 'react-dom';
import Search from './components/search';
import Display from './components/display'

class App extends React.Component {
    render() {
        return(
            <div>
                <Search/>
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("root"))