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
    <Helmet title="Sign Up">
      <CommonSection title="Sign Up" />

      <section className=" d-flex justify-content-center align-items-center">
    <Form className="w-70 square border bg-light rounded" onSubmit={submitHandler}>
      <FormGroup className=" m-2 signup__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className=" m-2 signup__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className=" m-2 signup__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className=" m-2 signup__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className=" m-2 signup__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" />
      </FormGroup>
      <FormGroup className=" m-2 signup__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" />
      </FormGroup>


      <Button className="m-2 bg-primary">Sign Up</Button>
      
    </Form>
    </section>
    </Helmet>
  );
};

export default BookingForm;
