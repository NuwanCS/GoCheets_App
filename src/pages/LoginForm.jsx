import React, {useState} from "react";
import "../styles/signup-form.css";
import { Form, FormGroup, Button } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import Api from '../api/api';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
    
      await Api.user.login(values).then(res=> {
        if(res.data=== 'Login Successful'){
          console.log('jo');
          navigate('/home')
          localStorage.setItem('username', values.username);
          toast.success('welcome');
        }else{
          console.log('hi');
          toast('welcome');
        }
      })
      
    } catch (err) {
      console.log(err);
      
      toast.error(err || `participantDeletingERROR`);
     
    }
  };
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />

      <section className=" d-flex justify-content-center align-items-center">
    <Form className="square border bg-light rounded" onSubmit={submitHandler}>
      

      <FormGroup className=" m-2 signup__form d-inline-block me-4 mb-4">
        <input name="username" type="email" placeholder="Email" onChange={onChange}/>
      </FormGroup>
      <FormGroup className=" m-2 signup__form d-inline-block ms-1 mb-4">
        <input name="password" type="password" placeholder="password" onChange={onChange}/>
      </FormGroup>


      <Button className="m-2 bg-primary">Sign Up</Button>
      
    </Form>
    </section>
    </Helmet>
  );
};

export default BookingForm;
