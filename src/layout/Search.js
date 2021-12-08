import React from "react";

export default class Search extends React.Component {
  state = {
    search: "panda",
    type:"all",
  };


  hendelfilter = (e)=>{
    this.setState(()=> ({type:e.target.dataset.type}), ()=>{
      this.props.searchMovie(this.state.search , this.state.type);
    })
  }

  hendelKey=(e)=>{
    if(e.key === "Enter"){
      this.props.searchMovie(this.state.search, this.state.type);
    }
  }

  render() {
    return (
      <div class="iputbutton">
        <div class=" search form-outline">
          <input
            id="search-focus"
            type="search"
            class="inputcantrol form-control"
            placeholder="Qidiruv"
            value={this.state.search}
            onChange={(e)=> this.setState({search:e.target.value})}
            onKeyDown={this.hendelKey} 
          />
        <button type="button" onClick={()=>this.props.searchMovie(this.state.search, this.state.type)}  class="button btn btn-primary">
        <i class=" bi bi-search"></i>
        </button>
        </div>
        <div class="btn-group">
            <label class="btn btn-primary">
            <span>
              Hammasi
              </span>  
              <input
                type="radio"
                class="btn-check"
                name="type"
                data-type="all"
                onChange={this.hendelfilter}
                checked={this.state.type === "all"}
              />   
              </label>
            <label class="btn btn-primary" >
              <span>
              Faqat Kinolar
              </span>
            <input
             type="radio" 
             class="btn-check" 
             name="type"  
             data-type="Movie"
             onChange={this.hendelfilter}
             checked={this.state.type === "Movie"}
             />
              </label>

            <label class="btn btn-primary" >
              <span>
               Faqat Seryallar
              </span>
            <input 
            type="radio" 
            class="btn-check"
             name="type"
             data-type="series"
             onChange={this.hendelfilter}
             checked={this.state.type === "series"}
             />
            </label>
          </div>
      </div>
          );
  }
}
