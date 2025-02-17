export default function Footer() {
  return (
    <footer className="section-sm bg-tertiary pt-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="footer-widget">
              <h5 className="mb-4 text-primary font-secondary">Trang</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="services">Dịch vụ</a>
                </li>
                <li className="mb-2">
                  <a href="contact">Liên hệ</a>
                </li>
                <li className="mb-2">
                  <a href="about">Giới thiệu</a>
                </li>
                <li className="mb-2">
                  <a href="how-to-work">Cách hoạt động</a>
                </li>
                <li className="mb-2">
                  <a href="faqs">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="footer-widget">
              <h5 className="mb-4 text-primary font-secondary">Giới thiệu</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="about/#benefit">Lợi ích</a>
                </li>
                <li className="mb-2">
                  <a href="about/#major">Chuyên nghành</a>
                </li>
                <li className="mb-2">
                  <a href="about/#team">Đội ngũ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="footer-widget">
              <h5 className="mb-4 text-primary font-secondary">Hỗ trợ</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="contact">Liên hệ chúng tôi</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 newsletter-htmlForm">
            <div style={{ padding: "35px" }}>
              <h5 className="mb-4 text-primary font-secondary">Đăng ký</h5>
              <div className="pe-0 pe-xl-5">
                <form
                  action=""
                  method="post"
                  name="mc-embedded-subscribe-htmlForm"
                >
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="htmlForm-control shadow-none bg-white border-end-0"
                      placeholder="Địa chỉ email"
                      required
                    />
                    <span className="input-group-text border-0 p-0">
                      <button
                        className="input-group-text border-0 bg-primary"
                        name="subscribe"
                        aria-label="Subscribe htmlFor Newsletter"
                        title="Gửi"
                      >
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              <p className="mb-0">
                Chúng tôi sẽ phản hồi sớm nhất có thể để hỗ trợ bạn về dịch vụ
                thiết kế website hoặc các yêu cầu khác
              </p>
            </div>
          </div>
        </div>
        <div className="row-custom align-items-center mt-5 text-center text-md-start">
          <div className="col-lg-4">
            <a href="/" style={{ color: "black" }}>
              <b style={{ fontSize: "34px", marginRight: "5px" }}>BA</b>{" "}
              <i style={{ fontSize: "22px" }}>Digital</i>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <ul className="list-unstyled list-inline mb-0 text-lg-center">
              <li className="list-inline-item me-4">
                <a className="text-black" href="privacy-policy">
                  Chính sách bảo mật
                </a>
              </li>
              <li className="list-inline-item me-4">
                <a className="text-black" href="terms">
                  Điều khoản &amp; Điều kiện
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 text-md-end mt-4 mt-md-0">
            <ul className="list-unstyled list-inline mb-0 social-icons">
              <li className="list-inline-item me-3">
                <a
                  title="Explorer Facebook Profile"
                  className="text-black"
                  href="https://www.facebook.com/profile.php?id=61572892182086"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a
                  title="Explorer Instagram Profile"
                  className="text-black"
                  href="https://www.instagram.com/ba_digital_07/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
