export default function Header() {
  return (
    <header className="navigation bg-tertiary">
      <nav className="navbar navbar-expand-xl navbar-light text-center py-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            <b>BA</b> <i style={{ fontSize: "22px" }}>Digital</i>
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
                <a className="nav-link" href="/">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/about">
                  Giới thiệu
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/how-it-works">
                  Cách hoạt động
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/services">
                  Dịch vụ
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/contact">
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
                    <a className="dropdown-item " href="/blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="/faqs">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="/terms">
                      Điều khoản &amp; Điều kiện
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="/privacy-policy">
                      Chính sách bảo mật
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <a href="/sign-in" className="btn btn-outline-primary">
              Đăng nhập
            </a>
            <a href="/sign-up" className="btn btn-primary ms-2 ms-lg-3">
              Đăng ký
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
