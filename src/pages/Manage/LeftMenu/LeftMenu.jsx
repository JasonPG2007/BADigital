export default function LeftMenu() {
  return (
    <>
      {/* sidebar-nav start */}
      <aside className="sidebar-nav-wrapper">
        <div className="navbar-logo">
          <a href="/">
            <img src="/images/logo-ngang.png" alt="logo" loading="lazy" />
          </a>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item nav-item-has-children">
              <a
                href="#0"
                data-bs-toggle="collapse"
                data-bs-target="#ddmenu_1"
                aria-controls="ddmenu_1"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.74999 18.3333C12.2376 18.3333 15.1364 15.8128 15.7244 12.4941C15.8448 11.8143 15.2737 11.25 14.5833 11.25H9.99999C9.30966 11.25 8.74999 10.6903 8.74999 10V5.41666C8.74999 4.7263 8.18563 4.15512 7.50586 4.27556C4.18711 4.86357 1.66666 7.76243 1.66666 11.25C1.66666 15.162 4.83797 18.3333 8.74999 18.3333Z" />
                    <path d="M17.0833 10C17.7737 10 18.3432 9.43708 18.2408 8.75433C17.7005 5.14918 14.8508 2.29947 11.2457 1.75912C10.5629 1.6568 10 2.2263 10 2.91665V9.16666C10 9.62691 10.3731 10 10.8333 10H17.0833Z" />
                  </svg>
                </span>
                <span className="text">Dashboard</span>
              </a>
              <ul id="ddmenu_1" className="collapse show dropdown-nav">
                <li>
                  <a href="/manage/dashboard" className="active">
                    {" "}
                    Home{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-has-children">
              <a
                href="#0"
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#ddmenu_2"
                aria-controls="ddmenu_2"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon">
                  <i className="fa-solid fa-box"></i>
                </span>
                <span className="text">Packages</span>
              </a>
              <ul id="ddmenu_2" className="collapse dropdown-nav">
                <li>
                  <a href="/manage/packages">List</a>
                </li>
                <li>
                  <a href="/manage/package/create">Create</a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-has-children">
              <a
                href="#0"
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#ddmenu_3"
                aria-controls="ddmenu_3"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="icon">
                  <i className="fa-solid fa-layer-group"></i>
                </span>
                <span className="text">Category services</span>
              </a>
              <ul id="ddmenu_3" className="collapse dropdown-nav">
                <li>
                  <a href="/manage/service-categories">List</a>
                </li>
                <li>
                  <a href="/manage/service-categories/create">Create</a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-has-children">
              <a
                href="#0"
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#ddmenu_4"
                aria-controls="ddmenu_4"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="icon">
                  <i className="fa-solid fa-receipt"></i>
                </span>
                <span className="text">Orders</span>
              </a>
              <ul id="ddmenu_4" className="collapse dropdown-nav">
                <li>
                  <a href="/manage/orders">List</a>
                </li>
                <li>
                  <a href="/manage/order/create">Create</a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-has-children">
              <a
                href="#0"
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#ddmenu_5"
                aria-controls="ddmenu_5"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="icon">
                  <i className="fa-solid fa-user"></i>
                </span>
                <span className="text">Customers</span>
              </a>
              <ul id="ddmenu_5" className="collapse dropdown-nav">
                <li>
                  <a href="/manage/customers">List</a>
                </li>
                <li>
                  <a href="/manage/customer/create">Create</a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-has-children">
              <a
                href="#0"
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#ddmenu_6"
                aria-controls="ddmenu_6"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="icon">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <span className="text">Projects</span>
              </a>
              <ul id="ddmenu_6" className="collapse dropdown-nav">
                <li>
                  <a href="/manage/projects">List</a>
                </li>
                <li>
                  <a href="/manage/project/create">Create</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                href={`/manage/profile/${sessionStorage.getItem("accountId")}`}
              >
                <span className="icon">
                  <i className="fa-solid fa-user-gear"></i>
                </span>
                <span className="text">Profile</span>
              </a>
            </li>
            <span className="divider">
              <hr />
            </span>

            <li className="nav-item">
              <a href="notification.html">
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.8333 2.50008C10.8333 2.03984 10.4602 1.66675 9.99999 1.66675C9.53975 1.66675 9.16666 2.03984 9.16666 2.50008C9.16666 2.96032 9.53975 3.33341 9.99999 3.33341C10.4602 3.33341 10.8333 2.96032 10.8333 2.50008Z" />
                    <path d="M17.5 5.41673C17.5 7.02756 16.1942 8.33339 14.5833 8.33339C12.9725 8.33339 11.6667 7.02756 11.6667 5.41673C11.6667 3.80589 12.9725 2.50006 14.5833 2.50006C16.1942 2.50006 17.5 3.80589 17.5 5.41673Z" />
                    <path d="M11.4272 2.69637C10.9734 2.56848 10.4947 2.50006 10 2.50006C7.10054 2.50006 4.75003 4.85057 4.75003 7.75006V9.20873C4.75003 9.72814 4.62082 10.2393 4.37404 10.6963L3.36705 12.5611C2.89938 13.4272 3.26806 14.5081 4.16749 14.9078C7.88074 16.5581 12.1193 16.5581 15.8326 14.9078C16.732 14.5081 17.1007 13.4272 16.633 12.5611L15.626 10.6963C15.43 10.3333 15.3081 9.93606 15.2663 9.52773C15.0441 9.56431 14.8159 9.58339 14.5833 9.58339C12.2822 9.58339 10.4167 7.71791 10.4167 5.41673C10.4167 4.37705 10.7975 3.42631 11.4272 2.69637Z" />
                    <path d="M7.48901 17.1925C8.10004 17.8918 8.99841 18.3335 10 18.3335C11.0016 18.3335 11.9 17.8918 12.511 17.1925C10.8482 17.4634 9.15183 17.4634 7.48901 17.1925Z" />
                  </svg>
                </span>
                <span className="text">Notifications</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="overlay"></div>
      {/* sidebar-nav end */}
    </>
  );
}
