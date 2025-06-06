import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function SignUp() {
  // Variables
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isSubmit, setIsSubmit] = useState("");
  let [msg, setMsg] = useState("");
  let [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [isSaveSession, setIsSaveSession] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // End Variables

  useEffect(() => {
    if (msg.length > 0) {
      setError("");
    }
    if (error.length > 0) {
      setMsg("");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    try {
      const response = await axios.post(
        `https://badigitalapi-g6hsh5eqh2e8hua9.centralus-01.azurewebsites.net/api/Account/signin`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          validateStatus: () => true,
        }
      );

      // Error
      if (response.status !== 200) {
        setIsSubmit(false);
        setMsg(response.data);
        setError(response.data);
        return;
      }

      // Handle successful response
      setIsSubmit(false);
      const data = response.data;
      setMsg("Đăng ký thành công");
      setError("");
      isSaveSession
        ? (Cookies.set("username", data.username, { expires: 14 }),
          Cookies.set("role", data.role, { expires: 14 }),
          Cookies.set("accountId", data.accountId, { expires: 14 }))
        : (sessionStorage.setItem("username", data.username),
          sessionStorage.setItem("role", data.role),
          sessionStorage.setItem("accountId", data.accountId));

      if (data.role === "Admin" || data.role === "Staff") {
        window.location.href = "/manage/dashboard";
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      setIsSubmit(false);
      setError("Network problem or server not working");
      console.error("Axios error:", error.message);
      if (error.message === "Network Error") {
        setMsg("Không có kết nối mạng");
      }
    }
  };

  return (
    <>
      <section className="bg-light py-3 py-md-5 container-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="text-center mb-3">
                    <a href="/">
                      <img
                        loading="lazy"
                        src="/images/logo-ngang.png"
                        alt="BootstrapBrain Logo"
                        width="175"
                        height="57"
                      />
                    </a>
                  </div>

                  {/* Successfully */}
                  {msg.length > 0 && error.length == 0 && (
                    <label className="form-label p-2 w-100 text-center text-primary">
                      {msg}
                    </label>
                  )}

                  {/* Failed */}
                  {error.length > 0 && (
                    <label className="form-label p-2 w-100 text-center text-danger">
                      {msg}
                    </label>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-2 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                          />
                          <label htmlFor="email" className="form-label">
                            Email <span style={{ color: "red" }}>*</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="Password"
                            required
                          />
                          <label htmlFor="password" className="form-label">
                            Password <span style={{ color: "red" }}>*</span>
                          </label>
                          <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            style={{
                              position: "absolute",
                              right: "10px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              border: "none",
                              background: "transparent",
                              cursor: "pointer",
                            }}
                          >
                            {showPassword ? (
                              <i className="fa-solid fa-eye"></i>
                            ) : (
                              <i className="fa-solid fa-eye-slash"></i>
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid my-3">
                          {!isSubmit ? (
                            <button className="btn btn-primary btn-lg">
                              Đăng Ký
                            </button>
                          ) : (
                            <button className="btn btn-primary btn-lg">
                              <i
                                className="fas fa-spinner fa-spin"
                                style={{ paddingLeft: "10px" }}
                              ></i>
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <p className="m-0 text-center">
                          Đã có tài khoản? {""}
                          <a
                            href="/sign-in"
                            className="link-secondary text-decoration-none"
                          >
                            Đăng nhập
                          </a>
                        </p>
                      </div>
                      <div className="col-12">
                        <p
                          className="m-0 text-center"
                          style={{ color: "orangered" }}
                        >
                          <i>(*Chỉ Dành Cho Nhân Viên)</i>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
