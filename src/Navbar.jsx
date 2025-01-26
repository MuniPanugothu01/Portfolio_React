import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
const Navbar = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <nav
              className="navbar navbar-expand-lg navbar-light fixed-top"
              data-aos="fade-down"
              data-aos-delay="15000"
              style={{ backgroundColor: "#010101" }}
            >
              <div className="container-fluid">
                <div className="d-flex justify-content-center align-items-center ms-lg-5 ps-lg-5">
                  {/* <img
                    // src=""
                    className="image_Logo"
                    //   width="40"
                    //   height="40"
                    // alt=""
                    // style={{ borderRadius: "100px" }}
                  /> */}
                  <div className="image_Logo"></div>

                  <span
                    className="text-dark ms-2"
                    data-aos="fade-right"
                    style={{
                      textDecoration: "none",
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: "large",
                    }}
                  >
                    <span
                      style={{
                        color: "#f1f1f1",
                        fontFamily: "'Times New Roman', Times, serif",
                        fontSize: "larger",
                      }}
                    >
                      Muni Panugothu
                    </span>
                  </span>
                </div>
                <button
                  className="navbar-toggler navbar-toggler-right collapsed d-flex d-lg-none flex-column justify-content-around"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                  <span className="toggler-icon middle-bar"></span>
                  <span className="toggler-icon bottom-bar"></span>
                </button>

                <div
                  className="collapse navbar-collapse me-lg-5"
                  id="navbarNav"
                >
                  <ul className="navbar-nav ms-auto gap-lg-3 me-lg-5">
                    <li className="nav-item">
                      <a
                        className="nav-link a"
                        aria-current="page"
                        href="#home"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link a" href="#about">
                        About Me
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link a" href="#education">
                        Education
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link a" href="#skills">
                        Skills
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link a" href="#works">
                        Works
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link a" href="#projects">
                        Projects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link a" href="#contacts">
                        Contact-Me
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
