import { useEffect, useState } from "react";
import "../i18n";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navigation bg-tertiary ${isSticky ? "sticky" : ""}`}>
      <nav className="navbar navbar-expand-xl navbar-light text-center py-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              loading="preload"
              decoding="async"
              width="200"
              src="/images/logo.png"
              alt="Ảnh Logo"
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
                <a className="nav-link" href="/">
                  {t("header.home")}
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/about">
                  {t("header.about")}
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/how-it-works">
                  {t("header.how-it-works")}
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/services">
                  {t("header.service")}
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/contact">
                  {t("header.contact")}
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
                  {t("header.page")}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item " href="/blog">
                      {t("header.blog")}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="/faqs">
                      {t("header.faqs")}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="/terms">
                      {t("header.terms")}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="/privacy-policy">
                      {t("header.privacy-policy")}
                    </a>
                  </li>
                </ul>
              </li>
              <select
                className="language-selector"
                onClick={(e) => changeLanguage(e.target.value)}
              >
                <option value="">{t("header.language")}</option>
                <option value="vi">{t("header.vi")}</option>
                <option value="en">{t("header.en")}</option>
                <option value="fr">{t("header.fr")}</option>
                <option value="zh">{t("header.zh")}</option>
                <option value="ko">{t("header.ko")}</option>
                <option value="ja">{t("header.ja")}</option>
              </select>
            </ul>
            <a href="/sign-in" className="btn btn-outline-primary">
              {t("header.login")}
            </a>
            <a href="/sign-up" className="btn btn-primary ms-2 ms-lg-3">
              {t("header.sign-up")}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
