import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                <NavLink to="/" >
                  <h2>Home</h2>
                </NavLink>
                </div>

                <div className="col-6 col-lg-3">
                <NavLink to="/about" >
                  <h2>About</h2>
                </NavLink>
                </div>

                <div className="col-6 col-lg-3">
                <NavLink to="/contact" >
                  <h2>Contact</h2>
                </NavLink>
                </div>

                <div className="col-6 col-lg-3">
                <NavLink to="/service" >
                  <h2>Services</h2>
                </NavLink>
                </div>

                <div className="col-6 col-lg-3">
                <NavLink to="/FAQs" >
                  <h2>FAQs</h2>
                </NavLink>
                </div>
                <br/><br/><br/><br/>
                <div className='row'>
                  <h2>PAHAL CREDIT SOLUTIONS</h2>
                  <h3 style={{color:'white'}} >H.no.-1207, Tower-9</h3>
                  <h3 style={{color:'white'}} >Aagman Society</h3>
                  <h3 style={{color:'white'}} >Sector 70, Faridabad, Haryana 121004</h3>
                  <a href='http://pcsservices.co'>
                  <h3 style={{color:'white'}} >http://pcsservices.com</h3>
                  </a>
                  <h3 style={{color:'white'}} >Phone</h3>
                  <ul>
                    <li>i- 9650797685</li>
                    <li>ii- 0129-4056321</li>
                  </ul>
                  <br/><br/><br/><br/>
                </div>
                <div >
                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                    <a
                        href="https://www.facebook.com/"
                        target="_pahal">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/"
                        target="_pahal">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                    <a
                        href="https://x.com/"
                        target="_pahal">
                      <i class="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2024 Pahal Credit Solutions. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
