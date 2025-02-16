import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ServiceDetail from "../pages/ServiceDetail";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import UnderConstruction from "../pages/UnderConstruction";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="BADigital/*"
          element={<UnderConstruction></UnderConstruction>}
        />
        <Route path="BADigital/" element={<Home></Home>} />
        <Route
          path="BADigital/service-detail"
          element={<ServiceDetail></ServiceDetail>}
        />
        <Route path="BADigital/services" element={<Services></Services>} />
        <Route path="BADigital/contact" element={<Contact></Contact>} />
        {/* <Route path="BADigital/how-to-work" element={<HowItWork></HowItWork>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
