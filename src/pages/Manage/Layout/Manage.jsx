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
import Project from "../Project/Project.jsx";
import Package from "../Package/Package.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import InsUp from "../Project/InsUp.jsx";

export default function Manage() {
  const isDashboardRoute = location.pathname === "/manage/dashboard";
  const isSignInRoute = location.pathname === "/manage/sign-in";
  const isSignUpRoute = location.pathname === "/manage/sign-up";
  const isProjectRoute = location.pathname === "/manage/projects";
  const isPackageRoute = location.pathname === "/manage/packages";
  const isProfileRoute = location.pathname.startsWith("/manage/profile");
  const isOrderRoute = location.pathname.startsWith("/manage/order");
  const pathName = location.pathname;
  let currentComponent;

  if (pathName === "/manage/dashboard") {
    currentComponent = <Dashboard />;
  } else if (pathName === "/manage/sign-in") {
    currentComponent = <SignIn />;
  } else if (pathName === "/manage/sign-up") {
    currentComponent = <SignUp />;
  } else if (pathName.startsWith("/manage/profile")) {
    currentComponent = <Profile />;
  } else if (pathName.startsWith("/manage/order")) {
    currentComponent = <Order />;
  } else if (pathName === "/manage/projects") {
    currentComponent = <Project />;
  } else if (pathName === "/manage/packages") {
    currentComponent = <Package />;
  } else if (pathName.startsWith("/manage/project/")) {
    currentComponent = <InsUp />;
  } else {
    currentComponent = <NotFound />;
  }

  return (
    <div>
      {/* Sidebar Start  */}
      <LeftMenu></LeftMenu>
      {/* Sidebar End  */}
      {/* Main wrapper  */}
      <div className="main-wrapper">
        <Header></Header>
        {currentComponent}
      </div>
    </div>
  );
}
