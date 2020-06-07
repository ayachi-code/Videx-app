import React from 'react';
import Display from '../components/display'
import './style/app.css'

class Search extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          input_text: "Zoek je film !",
          zoek: "",
          movie: "",
          render: true
        }
        this.handleclick = this.handleclick.bind(this);
      }

     
      handleclick(event) {
        console.log(event.target.value)
        if (event.target.value === "zoek") {
          this.setState({
            zoek: "zoek",
            movie: this.film.value
          })
        } else if (event.target.value === "vind") {
          this.setState({
            zoek: "vind",
            movie: this.film.value
          })
        }
      }

     render() {
      let render_display;
      let render_display_search;
      if (this.state.zoek == "vind") {
        render_display = <Display search={true} movie={this.state.movie}/>
        console.log(this.state.zoek)
      } else if (this.state.zoek == "zoek") {
        render_display_search = <Display search={false} movie={this.state.movie}/>
      } 
      


        return(
          <div id="search" onChange={this.onChangeValue}>
           <input ref={(c) => this.film = c  } id="title" name="title" placeholder={this.state.input_text} onChange={this.realtime}/><br/>
           <form>
             <label>
               zoeken
               <input type="radio" value="zoek" checked={this.state.zoek === "zoek"} onChange={this.handleclick}/>
             </label>
             <label>
               vinden
               <input type="radio" value="vind" checked={this.state.zoek === "vind"} onChange={this.handleclick}/>
             </label>
           </form>
            {this.state.zoek == "vind" ? render_display : <div></div>}
            {this.state.zoek == "zoek" ? render_display_search : <div></div>}
          </div>
        )
      }
    }


  export default Search;
