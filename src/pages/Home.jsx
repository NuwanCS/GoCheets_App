import React, {useState, useEffect} from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Api from '../api/api';

const Home = () => {

  const [carSelect, setCarSelect] = useState([])
  const [streetSelect, setStreetSelect] = useState([])
  const [citySelect, setCitySelect] = useState([])
  const [selectedCity, setSelectedCity] = useState(null);

  const getCars = async () => {

    try {
      await Api.cars.getcars().then(res=> {
        setCarSelect(res.data)

      })
      
    } catch (err) {
      console.log(err);  
    }
  };

  const getStreets = async () => {

    try {
      await Api.street.getstreets().then(res=> {
        setStreetSelect(res.data)

      })
      
    } catch (err) {
      console.log(err);  
    }
  };

  const getCity = async () => {

    try {
      await Api.city.getcities().then(res=> {
        setCitySelect(res.data)

      })
      
    } catch (err) {
      console.log(err);  
    }
  };


  useEffect(()=>{
    getCars()
    getStreets()
    getCity()
  }, [])
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm 
                carSelect={carSelect} 
                streetSelect={streetSelect} 
                citySelect={citySelect}
                setSelectedCity={setSelectedCity}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Checkout our</h6>
              <h2 className="section__title">Car Fleet</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />
    </Helmet>
  );
};

export default Home;
