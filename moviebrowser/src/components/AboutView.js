import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div classNme="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead">I don't know about y'all but I know about us! </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
