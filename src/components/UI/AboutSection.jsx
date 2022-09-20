import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to GoCheeta Taxi Service</h2>
              <p className="section__description">
              GoCheeta Taxi Service is a seamless transport solution that arrives within minutes to wherever you are, featuring the best rates and a fleet of vehicles in Sri Lanka including Cars, SUV, and Vans offering you comfort and safety throughout the journey.
              </p>

              <div className="about__section-item d-flex flex-column  align-items-stretch justify-content-center">
                <div className="about__section-item d-flex align-items-center justify-content-evenly">
                  <p className="section__description  gap-2">
                    <i className="ri-checkbox-circle-line"></i> Be on Time in style
                  </p>
                  <p className="section__description gap-2">
                    <i className="ri-checkbox-circle-line"></i> Best rates in the market
                  </p>

                 
                  
                </div>

                <div className="about__section-item d-flex align-items-center justify-content-evenly">
                  
                <p className="section__description  gap-2">
                    <i className="ri-checkbox-circle-line"></i> Hassle Free Commutes
                  </p>

                  <p className="section__description  gap-2">
                    <i className="ri-checkbox-circle-line"></i> 24/7 Service
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
