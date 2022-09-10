import "./App.css";

function App() {
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid position-relative nav-bar p-0 dark sticky">
        <div className="position-relative " style={{ zIndex: "9" }}>
          <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
            <a href="" className="navbar-brand">
              <h1 className="yellowColor mb-1">
                REON{" "}
                <span className=" text-light mb-1 pl-5 pl-5">
               {" "}
                  <img
                    style={{ height: "70px", width: "70px" }}
                    src="/img/racing.png"
                    alt="tyres"
                  />
                  <img
                    style={{ height: "70px", width: "70px" }}
                    src="/img/racing.png"
                    alt="tyres"
                  />
                  <img
                    style={{ height: "70px", width: "70px" }}
                    src="/img/racing.png"
                    alt="tyres"
                  />
                </span>
              </h1>{" "}
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
                <a href="index.html" className="nav-item nav-link active">
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
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="display-1 text-white mb-md-4">REON</h4>
                  <h1 className="text-white mb-md-3">
                    connects vehicle renters with nearby vehicle rental
                    providers
                  </h1>
                  <a
                    href=""
                    className="btn yellow font-weight-bold font py-md-2 px-md-3 mt-2"
                  >
                    Hire Now
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="display-1 text-white mb-md-4">REON</h4>
                  <h1 className="text-white mb-md-3">
                    Consumers can find and rent any type of vehicle through
                    REON.
                  </h1>
                  <a
                    href=""
                    className="btn yellow font-weight-bold font py-md-2 px-md-3 mt-2"
                  >
                    Hire Now
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="display-1 text-white mb-md-4">REON</h4>
                  <h1 className="text-white mb-md-3">
                    Vehicle rental providers have wider customer reach through
                    REON.
                  </h1>
                  <a
                    href=""
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
          >
            <div
              className="btn btn-dark"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div
              className="btn btn-dark"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- About Start --> */}
      <div className="container-fluid pb-5 dark">
        <div className="container pt-5 pb-3">
          <h1 className="display-1 text-light yellowColor
           text-center" id="01">
            01
          </h1>
          <h1 className="display-4 yellowColor text-center mb-5">
            Welcome To <span className="blueColor">REON</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <img className="w-75 mb-4" src="img/about.png" alt="" />
              <p className="text-light">
                Justo et eos et ut takimata sed sadipscing dolore lorem, et
                elitr labore labore voluptua no rebum sed, stet voluptua amet
                sed elitr ea dolor dolores no clita. Dolores diam magna clita ea
                eos amet, amet rebum voluptua vero vero sed clita accusam
                takimata. Nonumy labore ipsum sea voluptua sea eos sit justo, no
                ipsum sanctus sanctus no et no ipsum amet, tempor labore est
                labore no. Eos diam eirmod lorem ut eirmod, ipsum diam
                sadipscing stet dolores elitr elitr eirmod dolore. Magna elitr
                accusam takimata labore, et at erat eirmod consetetur tempor
                eirmod invidunt est, ipsum nonumy at et.
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center bg-secondary p-4 mb-4"
                style={{ height: "150px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 yellow ml-n4 mr-4"
                  style={{ width: "100px", height: "100px" }}
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
                className="d-flex align-items-center bg-secondary p-4 mb-4"
                style={{ height: "150px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 yellow ml-n4 mr-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="fa fa-2x fa-car text-secondary"></i>
                </div>
                <h4 className="text-light text-uppercase m-0">
                  Lots of vehicles
                </h4>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center bg-secondary p-4 mb-4"
                style={{ height: "150px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 yellow ml-n4 mr-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="fa fa-2x fa-map-marker-alt text-secondary"></i>
                </div>
                <h4 className="text-uppercase m-0 text-light">
                  Lots Of Locations
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Services Start -->? */}
      <div className="container-fluid py-5 dark">
        <div className="container pt-5 pb-3">
          <h1 className="display-1 yellowColor text-center" id="02">
            02
          </h1>
          <h1 className="display-4 text-uppercase text-center mb-5 blueColor">
            Our Services
          </h1>
          <div class="row mb-5">
            <div class="col-lg-4 mb-4 mb-lg-0">
              <div class="step">
                <span>1</span>
                <div class="step-inner">
                  <span class="number yellowColor">01.</span>
                  <h3>Select a car</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, laboriosam!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4 mb-lg-0">
              <div class="step">
                <span>2</span>
                <div class="step-inner">
                  <span class="number yellowColor">02.</span>
                  <h3>Fill up form</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, laboriosam!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4 mb-lg-0">
              <div class="step">
                <span>3</span>
                <div class="step-inner">
                  <span class="number yellowColor">03.</span>
                  <h3>Payment</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, laboriosam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}

      {/* <!-- Banner Start --> */}
      <div className="container-fluid py-5 dark">
        <div className="container py-5">
          <h1 className="display-1 yellowColor  text-center" id="03">
            03
          </h1>
          <h1 className="display-4 text-uppercase text-center mb-5 blueColor">
            JOIN
          </h1>
          <div className="bg-banner py-5 px-4 text-center">
            <div className="py-5">
              <h1 className="display-1 yellowColor mb-4">Join With Us</h1>
              <h1 className="text-uppercase text-light mb-4">
                If you wish to provide vehicle rental services with us !  
              </h1>
              <a className="btn yellow mt-2 py-2 px-3 font" href="">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner End --> */}

      {/* <!-- Contact Start --> */}
      <div className="container-fluid py-5 dark">
        <div className="container pt-5 pb-3">
          <h1 className="display-1 yellowColor text-center" id="04">
            04
          </h1>
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
                    <button className="btn yellow py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-2">
              <div
                className="bg-secondary d-flex flex-column justify-content-center px-5 mb-4"
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
                    <p className="m-0">
                      +94761903375 or <br />
                      0212345678
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End -->  */}

      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg yellow btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}

export default App;
