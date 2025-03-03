import { useState } from "react";
import styles from "./Booking.module.css"
const Booking = ({handleChange, handleSubmit, formData}) => {
//   const [formData, setFormData] = useState({
//     date: new Date().toJSON().slice(0, 10),
//     time: "20:00",
//     Guests: 1,
//     occasion: "Birthday"
//   });

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.id]: e.target.value})
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };


  return (
    <>
    <div className={styles.container}>
      <p className={styles.heading}>Book a table </p>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input type="date" value={formData.date} id="date" onChange={handleChange} />
        <label htmlFor="time">Choose time</label>
        <select id="time" value={formData.time} onChange={handleChange}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChange}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={formData.occasion} onChange={handleChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input className={styles.submitButton} type="submit" value="Make Your reservation"/>
      </form >
    </div>
    </>
  );
};

export default Booking;
