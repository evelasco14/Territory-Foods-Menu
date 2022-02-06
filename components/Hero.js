const Hero = () => {
  return (
    <div className="menu-hero text-center align-items-center mb-0">
      <div className="container">
        <div className="mt-4 row">
          <div className="mt-24">
            <h2 className="text-uppercase text-white">
              See What We’re Serving Up Near You
            </h2>
          </div>
        </div>
        <div>
          <p className="text-16 btn-text text-white">
            Get local, fresh, chef-made meals, designed by nutritionists and
            free from refined sugars, gluten and dairy.
          </p>
        </div>
        <div className="mt-24">
          <a
            href="https://www.territoryfoods.com/"
            className="btn btn-primary text-white mt-2 mb-n2"
          >
            Place order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
