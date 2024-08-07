import React, { useState } from "react";
import howToUseApp from "./API/howToUse.js";
import whyUs from "./API/WhyUs.js";
import WhatDo from "./API/WhatDo.js";

const Aboutus = () => {
    const [aboutData, setAboutData] = useState(howToUseApp);
    const [aboutData2, setAboutData2] = useState(whyUs);
    const [aboutData3, setAboutData3] = useState(WhatDo);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img style={{width:400, height:600}} src="./images/poster.png" alt="aboutusIMg" />
              <br/>
              <img style={{width:350, height:400}} src="./images/logologo.png" alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              
              <h1 className="main-heading">About us</h1>
              <h2 style={{fontSize:18}} className="main-hero-para" >Pahal Credit Solutions is dedicated to empowering individuals and businesses in India to achieve their financial goals by enhancing their CIBIL credit reports and resolving credit-related challenges. Founded by <strong>Gaurav Sharma</strong>, our company is committed to providing personalized and effective solutions for all your credit needs.</h2>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br /><br/>
              <h1>What we do</h1>
              <h3>We specialize in:</h3>
              {aboutData3.map((curElem3) => {
                const { id, title, info } = curElem3;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              {/* <button className="btn-style btn-style-border">learn more</button> */}
              
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of bayt us section  */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGES</h3>
              <h1 className="main-heading">
                Why to Choose Us?
              </h1>

              {aboutData2.map((curElem2) => {
                const { id, title, info } = curElem2;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              {/* <button className="btn-style btn-style-border">learn more</button> */}
            </div>

            {/* images section  */}
            <div id="wtcu" className="col-12 col-lg-5  our-service-rightside-img">
              <img style={{width:500, height:500, marginTop:200}} src="./images/wtcu.jpg" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutus
