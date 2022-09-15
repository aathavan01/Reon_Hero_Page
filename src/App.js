import React from "react";

function App() {
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid position-relative nav-bar p-0 dark sticky">
        <div className="position-relative " style={{ zIndex: "9" }}>
          <nav className="navbar navbar-expand-lg dark navbar-dark py-3 py-lg-0 pl-3 pl-lg-5 fixed-top">
            <a href="/" className="navbar-brand">
              <h1 className="yellowColor mb-1">REON </h1>{" "}
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto py-0">
                <a href="/" className="nav-item nav-link active">
                  Home
                </a>
                <a href="#01" className="nav-item nav-link">
                  About
                </a>
                <a href="#02" className="nav-item nav-link">
                  Service
                </a>
                <a href="#03" className="nav-item nav-link">
                  Join
                </a>
                <a href="#04" className="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar End --> */}

      {/* <!-- Carousel Start --> */}
      <div
        className="container-fluid p-0 dark"
        // style={{ marginBottom: "90px" }}
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100 " src="img/carousel-1.jpg" alt="Vehicle" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div style={{ maxWidth: "900px" }}>
                  <h4 className="display-1 blueColor mb-md-4 fontFamily">
                    REON
                  </h4>
                  <h1 className="text-white mb-md-5">
                    connects vehicle renters with nearby vehicle rental
                    providers
                  </h1>
                  <a
                    href="vehicles"
                    className="btn yellow font-weight-bold font"
                  >
                    Hire Now
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Vehicle" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="display-1 blueColor mb-md-4 fontFamily">
                    REON
                  </h4>
                  <h1 className="text-white mb-md-3">
                    Consumers can find and rent any type of vehicle through
                    REON.
                  </h1>
                  <a
                    href="/vehicles"
                    className="btn yellow font-weight-bold font py-md-2 px-md-3 mt-2"
                  >
                    Hire Now
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Vehicle" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="display-1 blueColor mb-md-4 fontFamily">
                    REON
                  </h4>
                  <h1 className="text-white mb-md-3">
                    Vehicle rental providers have wider customer reach through
                    REON.
                  </h1>
                  <a
                    href="vehicles"
                    className="btn yellow font-weight-bold font py-md-2 px-md-3 mt-2"
                  >
                    Hire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >.</a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >.</a>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- About Start --> */}
      <div className="container-fluid pb-5 dark py-5" id="01">
        <div className="container pt-5">
          <h1
            className="display-1 yellowColor p-
           text-center"
          >
            01
          </h1>
          <h1 className="display-4 blueColor text-center mb-5">
            Welcome To REON 
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <img className="w-75 mb-4" src="img/about.png" alt="" />
              <h3 className="text-light">
                {" "}
                REON the people who connects the customers with vehicle rentals.
              </h3>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center blue p-4 mb-4"
                style={{ height: "120px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 yellow ml-n4 mr-4"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fa fa-2x fa-headset text-secondary "></i>
                </div>
                <h4 className="text-uppercase m-0 text-light">
                  Vehicle Rental Support
                </h4>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center blue p-4 mb-4"
                style={{ height: "120px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 yellow ml-n4 mr-4"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fa fa-2x fa-car text-secondary"></i>
                </div>
                <h4 className="text-light text-uppercase m-0">
                  Different types of vehicles
                </h4>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center blue p-4 mb-4"
                style={{ height: "120px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 yellow ml-n4 mr-4"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fa fa-2x fa-map-marker-alt text-secondary"></i>
                </div>
                <h4 className="text-uppercase m-0 text-light">
                  The vehicle you need is near your location
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Services Start -->? */}
      <div className="container-fluid  dark py-5" id="02">
        <div className="container pb-3">
          <h1 className="display-1 yellowColor text-center">02</h1>
          <h1 className="display-4 text-uppercase text-center mb-5 blueColor">
            Our Services
          </h1>
          <div className="row mb-5">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="step">
                <span>1</span>
                <div className="step-inner">
                  {/* <h1 className="number yellowColor">01.</h1> */}
                  <h2 className="blueColor">
                    Reon offers all kinds of vehicles for rent to customers
                  </h2>
                  <h3 className="text-white">
                    *Reon offers customers all types of vehicles on rent based
                    on category. Eg:-
                    <br />
                    <br />
                    1.Farming
                    <br />
                    2.Construction
                    <br />
                    3.Tour
                    <br />
                    4.Transportation
                    <br />
                    5.School Services or long term rentals(Subscription based)
                    <br />
                    6.Events
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="step">
                <span>2</span>
                <div className="step-inner">
                  {/* <h1 className="number yellowColor">02.</h1> */}
                  <h2 className="blueColor">
                    Reon offers a location filter feature
                  </h2>
                  <h3 className="text-white">
                    *customers can rent a nearby vehicle by mentioning the
                    required location and searching.
                    <br />
                    <br />
                    *This will save the fuel cost for the vehicle owners and
                    will bring the vehicle to your destination in a short time.
                    <br />
                    Thus there is a high chance of getting a vehicle rental at
                    an affordable price.
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="step">
                <span>3</span>
                <div className="step-inner">
                  {/* <h1 className="number yellowColor">03.</h1> */}
                  <h2 className="blueColor">
                    Reon offers a wider opportunities to vehicle owners
                  </h2>
                  <h3 className="text-white">
                    *Vehicle owners can add vehicles to reon web app and get
                    more customers with reon
                    <br />
                    <br />
                    *Vehicle owners who have bought a new vehicle can reach
                    easily
                    <br /> and get more customers from reon.
                    <br />
                    <br />
                    <br />
                    <br />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}

      {/* <!-- Banner Start --> */}
      <div className="container-fluid dark pt-5" id="03">
        <div className="container">
          <h1 className="display-1 yellowColor  text-center">03</h1>
          <h1 className="display-4 text-uppercase text-center mb-5 blueColor">
            JOIN
          </h1>
          <div className="bg-banner py-5 px-4 text-center">
            <div className="py-5">
              <h1 className="display-1 yellowColor mb-4">Join With Us</h1>
              <h1 className="text-uppercase text-light mb-4">
                If you wish to provide vehicle rental services with us !
              </h1>
              <a className="btn yellow mt-2 py-2 px-3 font" href="register">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner End --> */}

      {/* <!-- Contact Start --> */}
      <div className="container-fluid py-5 dark" id="04">
        <div className="container pb-3 pt-4">
          <h1 className="display-1 yellowColor text-center">04</h1>
          <h1 className="display-4 text-uppercase text-center mb-5 blueColor">
            Contact Us
          </h1>
          <div className="row">
            <div className="col-lg-7 mb-2">
              <div
                className="contact-form bg-light mb-4"
                style={{ padding: "30px" }}
              >
                <form>
                  <div className="row">
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="email"
                        className="form-control p-4"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control py-3 px-4"
                      rows="5"
                      placeholder="Message"
                      required="required"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="btn text-dark yellow py-3 px-5"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-2">
              <div
                className="lightDark d-flex flex-column justify-content-center px-5 mb-4"
                style={{ height: "435px" }}
              >
                <div className="d-flex mb-3">
                  <i className="fa fa-2x fa-map-marker-alt yellowColor flex-shrink-0 mr-3"></i>
                  <div className="mt-n1">
                    <h5 className="text-light">Head Office</h5>
                    <p>Jaffna,Srilanka</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i className="fa fa-2x fa-map-marker-alt yellowColor flex-shrink-0 mr-3"></i>
                  <div className="mt-n1">
                    <h5 className="text-light">Branch Office</h5>
                    <p>Kopay</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i className="fa fa-2x fa-envelope-open yellowColor flex-shrink-0 mr-3"></i>
                  <div className="mt-n1">
                    <h5 className="text-light">Contact Us</h5>
                    <p>reonJaffna@gmail</p>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="fa fa-2x fa-headset yellowColor flex-shrink-0 mr-3"></i>
                  <div className="mt-n1">
                    <h5 className="text-light">Customer Services</h5>
                    <p className="m-0">+94761903375 or 0212345678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End -->  */}

      {/* <!-- Back to Top --> */}
      <a href="/" className="btn btn-lg yellow btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}

export default App;
