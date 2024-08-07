import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  const showAlert = () => {
    alert('Thanks for applying, please click ok and then fill the below form for further processing.');
  };
  return (
    <>
       <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start 
            order-lg-first order-last">
              <h2 className="display-2">
              Empowering Your Financial Future:  <br /> Elevate Your CIBIL Score with Us!
              </h2>
              <p className="main-hero-para">
              <strong>MYTH:</strong> Common belief holds that a poor Credit Score is unchangeable.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <strong> TRUTH:</strong> For the past eight years, we've been proving that belief wrong by consistently improving Credit Scores
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <NavLink to="/contact">
                <button onClick={showAlert} className="input-group-button">Get it now</button>
                </NavLink>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
              <img
                src="./images/bank.avif"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="./images/cibil_chart.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  )
}

export default Header
