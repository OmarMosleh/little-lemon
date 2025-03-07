import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useReducer, useEffect } from "react";
import Layout from "./pages/layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Booking from "./pages/Booking/Booking";
import OurServices from "./pages/OurServices/OurServices";
import Nopage from "./pages/Nopage/Nopage";

function App() {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "22:00"];
  const initializeTimes = () => {
    const today = new Date().toJSON().slice(0, 10);
    const todayDateObj = new Date(today); // Convert to a Date object
    return window.fetchAPI(todayDateObj);
    
  }
  const availableTimeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "update_available_times":
        return action.payload;
        default:
          return state;
        }
      };
      
      const [formData, setFormData] = useState({
        date: new Date().toJSON().slice(0, 10),
        time: initialState[0],
        Guests: 1,
        occasion: "Birthday",
      });
      
      
      
      const [availableTimes, dispatch] = useReducer(
        availableTimeReducer,
        [],
        initializeTimes
      );
      console.log(availableTimes);

  useEffect(() => {
    const fetchTimes = async () => {
      const dateObj = new Date(formData.date);
    const times = await window.fetchAPI(dateObj);
      dispatch({ type: "update_available_times", payload: times });
    };
    fetchTimes();
  }, [formData.date]);

 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home availableTimes={availableTimes}/>} />
          <Route path="about" element={<About />} />
          <Route
            path="booking"
            element={
              <Booking
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
                availableTimes={availableTimes}
              />
            }
          />
          <Route path="services" element={<OurServices />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
