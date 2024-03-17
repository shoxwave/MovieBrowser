import Hero from "./Hero";
import { Link } from 'react-router-dom';
import noPicture from './no_image.png';
import starWarsLibrarian from "./jocasta-nu.jpeg";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
    <div className="card">
      {posterUrl !=="https://image.tmdb.org/t/p/w500null" ? (
       <img src={posterUrl} className="card-img-top" alt={movie.original_title}/> 
      ):(
      <img src={noPicture} className="card-img-top" alt={movie.original_title}/>
      )}
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
      </div>
    </div>
    </div>
  )
}

const SearchView = ({keyword, searchResults}) => {
  const title = `You are searching for this ${keyword}`

  const resultsHtml = searchResults && searchResults.map ((obj,i) => {
    return <MovieCard movie={obj} key={i}></MovieCard>
  })

  return (
    <>
    {resultsHtml.length === 0 && keyword ? (
    <>
      <Hero text ="That title does not exist in our archives. If it is not here, then it simply doesn't exist" />
      <img src={starWarsLibrarian} className = "noResultImg" alt="No content found" /> 
    </>
    ):(<> </>
    )}
      <Hero text={title} />
      {resultsHtml &&
      <div className="container">
        <div className="row">
          {resultsHtml}
        </div>  
      </div>}
    </>
  )

};

export default SearchView;
