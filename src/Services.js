import React, { useState } from "react";
import serviceapi from "./API/serviceApi.js";
import { NavLink } from "react-router-dom";

const Services = () => {
    const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            Available Services
          </h1>
          <NavLink to="/contact">
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
          </NavLink>  
        </div>
      <h3 style={{textAlign: "center"}} className="mini-title">
          -- All these services are available at your doorstep.
      </h3>
      </section>
    </>
  )
}

export default Services
