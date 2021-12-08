export default function Movie(props){
    const {Title, Year, imdbID, Type, Poster}=props;
    return(
      <div key={imdbID} className="card movie">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src={Poster} alt="Images" />
      </div>
      <div class="card_content card-content">
        <span class="card-title activator grey-text text-darken-4">{Title}<i class="material-icons right">more_vert</i></span>
        <p className="card-text">{Year} <span className="text-end">{Type}</span></p>
      </div>
    </div>
    )
}