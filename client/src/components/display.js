import React from 'react'
import Movielist from '../components/watchlist' 
import './style/display.css'



class Display extends React.Component { 
    
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      loading: true,
      movie_info: null,
      exist: null,
    }
  }

  async componentDidMount() {

    
    const find_url = "http://localhost:9000/find/ " + this.props.movie;
    const info_url = "http://localhost:9000/info/ " + this.props.movie;

    
    try {
      const [data1,data2] = await Promise.all([
        fetch(find_url),
        fetch(info_url)
      ])
      const respone = await Promise.all([data1.json(),data2.json()]);
      console.log(respone[0].exist)
      if (respone[0].exist == false) {
        console.log("film bestata nie")
        this.setState({exist: false,loading: false});
      } else {
      this.setState({movie: respone[0].name,movie_info: respone[1],loading: false,exist: true})
      }
    } catch (error) {
      console.log(error)
    }
  }
  ß
  render() {   

    const list_movie = [];
    if (this.state.exist) {
      if (this.props.search) {
        if (this.state.movie != null) {
          for (const [index,value] of this.state.movie.entries()) {
            list_movie.push(<div className="result" key={index}>{value}</div>)
        } 
      }
      } else if (!this.props.search) {
        if (this.state.movie_info != null) {
          const movie_information = [];
          for(var key in this.state.movie_info) {
            var value =  this.state.movie_info[key];
            movie_information.push(value);
        } 
        for (const [index,value] of movie_information.entries()) {
          list_movie.push(<div id="info" key={index}>{value}</div>)
      } 
        }
      }} else if (this.state.exist == false) {
          list_movie.push(<div key={1} >Sorry Ik kan je film niet vinden :(</div>)
      }

        return(
           <div className="display" id="display">
             {this.state.loading ? <div>Loading....</div> : list_movie}
          </div>
         )}

}

export default Display