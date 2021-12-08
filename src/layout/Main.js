import React from "react"
import Loader from "../components/Loader"
import Movies from "../components/Movies"
import Search from "./Search"

export default class Main extends React.Component{
    state={
        movies:[],
        loader:true
    }

    componentDidMount(){
        fetch("https://www.omdbapi.com/?apikey=329ffa13&s=Panda")
        .then(Response => Response.json())
        .then(data=>this.setState({movies:data.Search, loader:false}))
    }


    searchMovie= (str,type="all")=>{
        this.setState({loader:true})
        fetch(`https://www.omdbapi.com/?apikey=329ffa13&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
        .then(Response => Response.json())
        .then(data=>this.setState({movies:data.Search,loader:false}))
    }

    render(){
        return(
            
            <div className="container content">
                   <Search searchMovie={this.searchMovie}/>                   
            {this.state.loader ? <Loader/> : (<Movies movies={this.state.movies}/>) }
        </div>
        
        )
    }
}