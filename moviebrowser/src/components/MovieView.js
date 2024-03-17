import Hero from "./Hero";
import { useParams } from 'react-router-dom';
import {useEffect, useState } from 'react';
import noPictureMovieView from "./no_image.png";
import APIKey from "./API_Info";

const MovieView = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
 


  useEffect(() => {
    // console.log('make an api request', id) Here for debugging
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${APIKey}`)
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
        setMovieDetails(data)
        setIsLoading(false)
        },2000)
      })
  }, [id])

  function renderMovieDetails() {

    if(isLoading) {
      return <Hero text="Loading..." />
    }
    if(movieDetails){
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      const backdropUrl =  `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
              <div className="row">
                <div className="col-md-3">
                  {posterPath !== "https://image.tmdb.org/t/p/w500null" ? (
                    <img src={posterPath} alt="..." className="img-fluid shadow rounded noResultsImg" />
                  ):(
                    <img src={noPictureMovieView} alt="..." className="img-fluid shadow rounded noResultsImg" />

                  )}
                    
                </div>
                <div className="col-md-9">
                  <h2>{movieDetails.original_title}</h2>
                  <p className="lead">{movieDetails.overview}</p>
                </div>
              </div>
          </div>
        </>
    )
    }
  }

  return renderMovieDetails()
};

export default MovieView;
