import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ServiceDetail from "../pages/ServiceDetail";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import UnderConstruction from "../pages/UnderConstruction";

export default function routes() {
  return (
    <BrowserRouter basename="/BADigital">
      <Routes>
        <Route path="/*" element={<UnderConstruction></UnderConstruction>} />
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/service-detail"
          element={<ServiceDetail></ServiceDetail>}
        />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/contact" element={<Contact></Contact>} />
        {/* <Route path="BADigital/how-to-work" element={<HowItWork></HowItWork>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
