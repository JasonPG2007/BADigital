import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function Footer() {
  const { t } = useTranslation();
  const form = useRef();
  const [isSendEmail, setIsSendEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSendEmail(true);
    emailjs
      .sendForm(
        "service_jrgaq57",
        "template_j6snca8",
        form.current,
        "36B1PoPlACVPxMI_K"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert(
            "🎉 Chúc mừng bạn đã đăng ký thành công! 😊\n BA Digital sẽ liên hệ với bạn trong vòng 24h. Bạn hãy để ý tin nhắn qua email nhé!"
          );
          setIsSendEmail(false);
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("❌ Đăng ký thất bại! 😢. Vui lòng thử lại sau! ");
        }
      );
  };

  return (
    <footer className="section-sm bg-tertiary pt-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="footer-widget">
              <h5 className="mb-4 text-primary font-secondary">
                {t("footer.page")}
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/services">{t("footer.service")}</a>
                </li>
                <li className="mb-2">
                  <a href="/projects">Dự án</a>
                </li>
                <li className="mb-2">
                  <a href="/contact">{t("footer.contact")}</a>
                </li>
                <li className="mb-2">
                  <a href="/about">{t("footer.about")}</a>
                </li>
                <li className="mb-2">
                  <a href="/how-to-work">{t("footer.how-it-works")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="footer-widget">
              <h5 className="mb-4 text-primary font-secondary">
                {t("footer.about")}
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/#pills-how-much-can-i-recive-tab">
                    {" "}
                    {t("footer.benefit")}
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/about/#major"> {t("footer.majoring")}</a>
                </li>
                <li className="mb-2">
                  <a href="/about/#team"> {t("footer.team")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="footer-widget">
              <h5 className="mb-4 text-primary font-secondary">
                {t("footer.support")}
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/contact">{t("footer.contact-with-us")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 newsletter-form">
            <div style={{ padding: "35px" }}>
              <h5 className="mb-4 text-primary font-secondary">
                {t("footer.register")}
              </h5>
              <div className="pe-0 pe-xl-5">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control shadow-none bg-white border-end-0"
                      placeholder={t("footer.email-address")}
                      name="email_register"
                      required
                    />
                    <span className="input-group-text border-0 p-0">
                      {!isSendEmail && (
                        <button
                          className="input-group-text border-0 bg-primary"
                          type="submit"
                          name="subscribe"
                          aria-label="Subscribe for Newsletter"
                        >
                          <i className="fas fa-arrow-right"></i>
                        </button>
                      )}
                      {isSendEmail && (
                        <button
                          className="input-group-text border-0 bg-primary"
                          type="submit"
                          name="subscribe"
                          aria-label="Subscribe for Newsletter"
                          disabled
                        >
                          <i className="fas fa-spinner fa-spin"></i>
                        </button>
                      )}
                    </span>
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_463ee871f45d2d93748e77cad_a0a2c6d074"
                      tabIndex="-1"
                    />
                  </div>
                </form>
              </div>
              <p className="mb-0">{t("footer.under-input-email")}</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-5 text-center text-md-start">
          <div className="col-lg-4">
            <a href="/" style={{ color: "black" }}>
              <img
                loading="preload"
                decoding="async"
                width="200"
                src="/images/logo-ngang.png"
                alt="Ảnh logo"
              ></img>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <ul className="list-unstyled list-inline mb-0 text-lg-center">
              <li className="list-inline-item me-4">
                <a className="text-black" href="/privacy-policy">
                  {t("header.privacy-policy")}
                </a>
              </li>
              <li className="list-inline-item me-4">
                <a className="text-black" href="/terms">
                  {t("header.terms")}
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
                  href="https://www.facebook.com/badigitalwebapp/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a
                  title="Explorer Instagram Profile"
                  className="text-black"
                  href="https://www.instagram.com/badigitalwebapp/"
                  target="_blank"
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
