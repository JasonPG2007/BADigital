import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/lineicons.css";
import "../../../assets/css/materialdesignicons.min.css";
import "../../../assets/css/fullcalendar.css";
import "../../../assets/css/main.css";
import "../../../assets/js/Chart.min.js";
import "../../../assets/js/dynamic-pie-chart.js";
import "../../../assets/js/moment.min.js";
import "../../../assets/js/fullcalendar.js";
import "../../../assets/js/jvectormap.min.js";
import "../../../assets/js/world-merc.js";
import "../../../assets/js/polyfill.js";
import "../../../assets/js/main.js";
import LeftMenu from "../LeftMenu/LeftMenu";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../Signin/SignIn.jsx";
import SignUp from "../Signup/SignUp.jsx";
import Profile from "../Profile/Profile.jsx";
import Order from "../Order/Order.jsx";

export default function Manage() {
  const isDashboardRoute = location.pathname === "/manage/dashboard";
  const isSignInRoute = location.pathname === "/manage/sign-in";
  const isSignUpRoute = location.pathname === "/manage/sign-up";
  const isProfileRoute = location.pathname.startsWith("/manage/profile");
  const isOrderRoute = location.pathname.startsWith("/manage/order");

  return (
    <div>
      {/* Sidebar Start  */}
      <LeftMenu></LeftMenu>
      {/* Sidebar End  */}
      {/* Main wrapper  */}
      <div className="main-wrapper">
        <Header></Header>
        {isDashboardRoute && <Dashboard />}
        {isSignInRoute && <SignIn />}
        {isSignUpRoute && <SignUp />}
        {isProfileRoute && <Profile />}
        {isOrderRoute && <Order />}
      </div>
    </div>
  );
}
