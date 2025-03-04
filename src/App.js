import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import Layout from "./pages/layout/Layout";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Booking from "./pages/Booking/Booking"
import OurServices from "./pages/OurServices/OurServices"
import Nopage from "./pages/Nopage/Nopage";
// importing the reducer we created and the useReducer

import { initialState } from "./reducer/availableTimeReduce";
import { availableTimeReducer } from "./reducer/availableTimeReduce";
import { useReducer } from "react";

function App() {
    const [formData, setFormData] = useState({
      date: new Date().toJSON().slice(0, 10),
      time : "17:00",
      Guests: 1,
      occasion: "Birthday"
    });
  
    const [availableTimes, dispatch] = useReducer(availableTimeReducer, initialState)

    const updateAvailableTimes = (selectedDate) =>{
        dispatch({type:"update_available_times", payload:selectedDate})
    }

    const handleChange = (e) => {
      setFormData({...formData, [e.target.id]: e.target.value})
      if(e.target.id === "date"){
        updateAvailableTimes(e.target.value);
      }
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout />} >
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="booking" element={<Booking handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} />} />
          <Route path="services" element={<OurServices />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
