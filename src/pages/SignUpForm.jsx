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
        <input type="text" placeholder="First Name" required/>
      </FormGroup>
      <FormGroup className=" m-2 signup__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" required/>
      </FormGroup>

      <FormGroup className=" m-2 signup__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" required/>
      </FormGroup>
      <FormGroup className=" m-2 signup__form d-inline-block ms-1 mb-4">
        <input type="password" placeholder="Password" required/>
      </FormGroup>

      <FormGroup className=" m-2 signup__form d-inline-block me-4 mb-4">
        <input type="number" placeholder="Phone number" required/>
      </FormGroup>
      <FormGroup className=" m-2 signup__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Address" required/>
      </FormGroup>


      <Button className="m-2 bg-primary">Sign Up</Button>
      
    </Form>
    </section>
    </Helmet>
  );
};

export default BookingForm;
