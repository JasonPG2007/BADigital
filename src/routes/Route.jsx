import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { lazy } from "react";
import Home from "../pages/Home";
import ServiceDetail from "../pages/ServiceDetail";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import UnderConstruction from "../pages/UnderConstruction";
import HowItWork from "../pages/HowItWork";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import About from "../pages/About";
import Cookies from "js-cookie";
import SignIn from "../pages/SignIn";
import Lookup from "../pages/Lookup";
const Manage = lazy(() => import("../pages/Manage/Layout/Manage"));

export default function routes() {
  var isManageRoute = location.pathname.includes("manage");
  var isSignInRoute = location.pathname === "/sign-in";
  var isSignUpRoute = location.pathname === "/sign-up";
  var isSignOutRoute = location.pathname === "/sign-out";
  if (isSignOutRoute) {
    Cookies.remove("username");
    Cookies.remove("userId");
    window.location.href = "/";
  }
  if (location.pathname === "/*") {
    Cookies.set("notFound", "true");
  }
  if (location.pathname === "/products") {
    Cookies.remove("pressSpace");
  }
  return (
    <BrowserRouter>
      {!isManageRoute && !isSignInRoute && !isSignUpRoute && <Header />}
      <Routes>
        <Route path="*" element={<UnderConstruction></UnderConstruction>} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/service/*" element={<ServiceDetail></ServiceDetail>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/how-it-works" element={<HowItWork></HowItWork>} />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy></PrivacyPolicy>}
        />
        <Route path="/terms" element={<Terms></Terms>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/sign-in" element={<SignIn></SignIn>} />
        <Route path="/lookup" element={<Lookup></Lookup>} />
        <Route path="/manage/*" element={<Manage></Manage>} />
      </Routes>
      {!isManageRoute && !isSignInRoute && !isSignUpRoute && <Footer />}
    </BrowserRouter>
  );
}
