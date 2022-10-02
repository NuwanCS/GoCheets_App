import React,  { useState } from "react";
import "../styles/signup-form.css";
import { Form, FormGroup, Button } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import FormInput from "../components/custom/FormInput";
import Api from '../api/api';
// import bcrypt from 'bcrypt'
const BookingForm = () => {

  const [values, setValues] = useState({
    fName: "",
    lName: "",
    email: "",
    contact: "",
    address:"",
    type: "USER",
    status: "ACTIVE",
    password: "",
  });

  const saltRounds = 195461

  const inputs = [
    {
      id: 1,
      name: "fname",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "First Name should be 3-16 characters and shouldn't include any special character!",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "lname",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "Last Name should be 3-16 characters and shouldn't include any special character!",
      label: "Last Name",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "contact",
      type: "number",
      placeholder: "Phone Number",
      errorMessage: "Phone Number cannot be empty!",
      label: "phone",
      required: true,
    },
    {
      id: 5,
      name: "address",
      type: "address",
      placeholder: "Address",
      errorMessage: "Address cannot be empty!",
      label: "address",
      required: true,
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 7,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    // const data = new FormGroup(event.target)
    console.log(values);

    // const passwordHase = bcrypt.hash(values.password, saltRounds)
    try {
      await Api.user.addUser({values}).then(res=> console.log(res.data));
      
    } catch (err) {
      console.log(err);
      
      // toast.error(err || `${p('participantDeletingERROR')}'!'`);
     
    }
  };
  return (
    <Helmet title="Sign Up">
      <CommonSection title="Sign Up" />

      <section className=" d-flex justify-content-center align-items-center">
    <Form className="w-70 square border bg-light rounded" onSubmit={submitHandler}>
      
      {inputs.map((input) => (
        <FormGroup className=" m-2 signup__form d-inline-block me-4 mb-4">
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
          </FormGroup>
        ))}
        {/* <input value={values.firstName} onChange={(e)=>setValues(e.target.value)} type="text" placeholder="First Name" required/> */}
      
      {/* <FormGroup className=" m-2 signup__form d-inline-block ms-1 mb-4">
        <input value={values.lastName} onChange={(e)=>setValues({...values, [e.target.name]: e.target.value})}  type="text" placeholder="Last Name" required/>
      </FormGroup>

      <FormGroup className=" m-2 signup__form d-inline-block me-4 mb-4">
        <input value={values.email} onChange={(e)=>setValues({...values, [e.target.name]: e.target.value})}  type="email" placeholder="Email" required/>
      </FormGroup>
      <FormGroup className=" m-2 signup__form d-inline-block ms-1 mb-4">
        <input value={values.password} onChange={(e)=>setValues({...values, [e.target.name]: e.target.value})}  type="password" placeholder="Password" required/>
      </FormGroup>

      <FormGroup className=" m-2 signup__form d-inline-block me-4 mb-4">
        <input value={values.phone} onChange={(e)=>setValues({...values, [e.target.name]: e.target.value})}  type="number" placeholder="Phone number" required/>
      </FormGroup>
      <FormGroup className=" m-2 signup__form d-inline-block ms-1 mb-4">
        <input value={values.address}  onChange={(e)=>setValues({...values, [e.target.name]: e.target.value})} type="text" placeholder="Address" required/>
      </FormGroup> */}


      <Button className="m-2 bg-primary">Sign Up</Button>
      
    </Form>
    </section>
    </Helmet>
  );
};

export default BookingForm;
