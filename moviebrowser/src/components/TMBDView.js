import Hero from "./Hero";
import TMBDLogoFull from "./Primary_Full_Blue_TMDB.svg"

const TMBDView = () => {
  return (
    <>
      <Hero text="About us" />
      <div classNme="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead">Please feel free to contribute or browse the plethora of information they have on not just Movies but TV Shows and People as well! </p>
            <a href= "https://www.themoviedb.org/"><img src = {TMBDLogoFull} alt="TMBD Full Logo"></img></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TMBDView;
