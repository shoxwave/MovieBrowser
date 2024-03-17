import Hero from './Hero'



const HomeView = () => {
    return(
      <>
      <Hero text={"Welcome to React 201"}/>
      <div classNme="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead">
              lorem ipsom.....
            </p>
          </div>
        </div>
      </div>
      </>
    )
  }

export default HomeView;