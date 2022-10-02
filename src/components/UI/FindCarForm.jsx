import React, {useState} from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import Api from '../../api/api';

const FindCarForm = ({carSelect, streetSelect, citySelect, setSelectedCity}) => {
  
  const [selectedFromStreet, setSelectedFromStreet] = useState('')
  const [selectedToStreet, setSelectedToStreet] = useState('')
  const [selectedCar, setSelectedCar] = useState('')
  const [bookingCost, setBookingCost] = useState('')
  // const [tripCost, setTripCost] = useState([])
  // const getCosts = async () => {

  //   try {
  //     await Api.cars.getcars().then(res=> {
  //       setTripCost(res.data)

  //     })
      
  //   } catch (err) {
  //     console.log(err);  
  //   }
  // };

  const handleReservation = async (e) => {
    e.preventDefault();
    let results = []
    try {
      results = await Api.cost.getTripCost().then(res=> {
        return res.data
      })
      
    } catch (err) {
      console.log(err);  
    }
    var selectedTrip = results.filter(function(item) { 
      return (item.fromStreet).toString() === selectedFromStreet && (item.toStreet).toString() === selectedToStreet; }); 
      console.log(selectedTrip);
      setBookingCost(selectedTrip)

      try {
        results = await Api.booking.makeBooking({
          customer: 1,
          driver:1,
          fromStreet:Number(selectedFromStreet),
          toStreet:Number(selectedFromStreet),
          vehicleId:Number(selectedCar),
          cost: Number(selectedTrip[0].cost),

        }).then(()=> {
          alert('Your Booking is successfull')
        })
        
      } catch (err) {
        console.log(err);  
      }
  }


  return (
    <Form className="form" onSubmit={handleReservation}>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
      {/* <FormGroup className="select__group">
          <select>
            
            {citySelect?.map((city)=>{
               return <option key={city.id} value={city.name} onClick={(e) => setSelectedCity(citySelect[e.target.value])}>{city.name}</option>
            })}
            </select>
        </FormGroup> */}
        <FormGroup className="select__group">
          <select onClick={(e) => setSelectedFromStreet(e.target.value)}>
            
            {streetSelect?.map((street)=>{
               return <option 
               key={street.id} 
               value={street.id}
               
               >{street.name}</option>
            })}
            </select>
        </FormGroup>

        <FormGroup className="select__group">
        <select  onClick={(e) => setSelectedToStreet(e.target.value)}>
            
            {streetSelect?.map((street)=>{
               return <option 
               key={street.id} 
               value={street.id}
              
               >{street.name}</option>
            })}
            </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select onClick={(e) => setSelectedCar(e.target.value)}>
            
          {carSelect?.map((car)=>{
             return <option key={car.id} value={car.id}>{car.name}</option>
          })}
          </select>
        </FormGroup>

        <span>{bookingCost.cost}</span>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Book Now</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
