import React from "react";
import "../styles/signup-form.css";
import { Form, FormGroup, Button } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />

      <section className=" d-flex justify-content-center align-items-center">
    <Form className="square border bg-light rounded" onSubmit={submitHandler}>
      

      <FormGroup className=" m-2 signup__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className=" m-2 signup__form d-inline-block ms-1 mb-4">
        <input type="password" placeholder="password" />
      </FormGroup>


      <Button className="m-2 bg-primary">Sign Up</Button>
      
    </Form>
    </section>
    </Helmet>
  );
};

export default BookingForm;
