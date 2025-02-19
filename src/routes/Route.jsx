import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ServiceDetail from "../pages/ServiceDetail";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import UnderConstruction from "../pages/UnderConstruction";
import HowItWork from "../pages/HowItWork";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import About from "../pages/About";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UnderConstruction></UnderConstruction>} />
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/service-detail"
          element={<ServiceDetail></ServiceDetail>}
        />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/how-it-works" element={<HowItWork></HowItWork>} />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy></PrivacyPolicy>}
        />
        <Route path="/terms" element={<Terms></Terms>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
    </BrowserRouter>
  );
}
