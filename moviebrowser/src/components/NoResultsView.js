import Hero from "./Hero";
import nothingHere from "./page-found-error-404_23-2147508324.jpg"

const NoResultsView = () => {
  return (
    <>
      <Hero text={"Sadly no results were found."} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead">Please edit url.</p>
          </div>
          <div>
            <img src={nothingHere} alt= "..." className="noResultImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoResultsView;
