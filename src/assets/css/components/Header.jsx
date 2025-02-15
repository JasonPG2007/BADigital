export default function Header() {
  return (
    <header className="navigation bg-tertiary">
      <nav className="navbar navbar-expand-xl navbar-light text-center py-3">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img
              loading="prelaod"
              decoding="async"
              className="img-fluid"
              width="160"
              src="images/logo.png"
              alt="Wallet"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="about.html">
                  Giới thiệu
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="how-it-works.html">
                  Cách hoạt động
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="services.html">
                  Dịch vụ
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="contact.html">
                  Liên hệ
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Trang <i className="fa-solid fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item " href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="service-details.html">
                      Chi tiết dịch vụ
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="faq.html">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="terms.html">
                      Điều khoản &amp; Điều kiện
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="privacy-policy.html">
                      Quyền riêng tư &amp; Chính sách
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <a href="#!" className="btn btn-outline-primary">
              Đăng nhập
            </a>
            <a href="#!" className="btn btn-primary ms-2 ms-lg-3">
              Đăng ký
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
