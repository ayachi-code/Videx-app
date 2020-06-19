import React from 'react'
import './style/display.css'



class Display extends React.Component { 
    
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      loading: true,
      movie_info: null,
      exist: null,
      watchlater: []
    }
  }


  // Als display laad stuur dan een request voor vinden en zoeken
  async componentDidMount() {
    const find_url = "http://localhost:9000/find/ " + this.props.movie;
    const info_url = "http://localhost:9000/info/ " + this.props.movie;

    //voer de request uit
    try {
      const [data1,data2] = await Promise.all([
        fetch(find_url),
        fetch(info_url)
      ])
      const response = await Promise.all([data1.json(),data2.json()]);
      //Als film niet bestaat zet exist op false
      if (response[0].exist === false) {
        console.log("film bestata niet")
        this.setState({exist: false,loading: false});
      } else {
        //Als film bestaat laat het laden stoppen en zet de info in de state
      this.setState({movie: response[0].name,movie_info: response[1],loading: false,exist: true})
      }
    } catch (error) {
      //Als er een API error is geef dan een bericht dat er iets mis is en zet laden op false
      this.setState({exist: false,loading: false})
    }
  }  
  render() {   

    //conditional rendering voor wanneer zoek of vind info moet laten zien
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
      }} else if (this.state.exist === false) {
          list_movie.push(<div key={1} >Sorry Ik kan je film niet vinden :(</div>)
      }

        return(
          //Laat zien wanneer er laden staat op het scherm
           <div className="display" id="display">
             {this.state.loading ? <div>Loading....</div> : list_movie}
          </div>
         )}

}

export default Display