import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./pages/layout/Layout";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Booking from "./pages/Booking/Booking"
import OurServices from "./pages/OurServices/OurServices"
import Nopage from "./pages/Nopage/Nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout />} >
          <Route index element={<Home/>} />
          <Route path="blogs" element={<About />} />
          <Route path="contact" element={<Booking />} />
          <Route path="contact" element={<OurServices />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
