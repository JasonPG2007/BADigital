import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function ForgotPassword() {
  // Variables
  const [isSuccess, setIsSuccess] = useState("");
  const [isSent, setIsSent] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [account, setAccount] = useState("");
  let [error, setError] = useState("");
  let [msg, setMsg] = useState("");
  let [isMatch, setIsMatch] = useState(false);
  const [showPassword, setShowPassword] = useState("");
  const form = useRef();
  // End Variables

  useEffect(() => {
    setIsMatch(password === confirmPassword);
  }, [confirmPassword, password]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSendCodeMail = async function (e) {
    e.preventDefault();
    setIsSent(true);
    const form = e.target;
    try {
      const checkContainsAccountByEmail = await axios.get(
        `https://badigitalapi-g6hsh5eqh2e8hua9.centralus-01.azurewebsites.net/api/Account/account-email/${email}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          validateStatus: () => true,
        }
      );

      if (checkContainsAccountByEmail.status !== 200) {
        setMsg("Không tìm thấy tài khoản với email này.");
        setError("Không tìm thấy tài khoản với email này.");
        setIsSent(false);
        return;
      }

      // Handle successful response
      setAccount(checkContainsAccountByEmail.data);
      if (account != null) {
        const res = await axios.post(
          "https://badigitalapi-g6hsh5eqh2e8hua9.centralus-01.azurewebsites.net/api/Account/send-verification-email",
          form,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      setMsg("");
      setIsSent(false);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error sending verification email:", error);
      setIsSent(false);
      alert(error);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsSent(true);
    try {
      const res = await axios.post(
        "https://badigitalapi-g6hsh5eqh2e8hua9.centralus-01.azurewebsites.net/api/Account/verification-email",
        {
          email,
          code,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsSent(false);
      setIsVerified(true);
    } catch (err) {
      console.error("Error verifying code:", err);
      setIsSent(false);
      setIsVerified(false);
      alert("Mã không đúng hoặc đã hết hạn.");
    }
  };

  const handleChangePassword = async function (e) {
    e.preventDefault();
    setIsSent(true);
    try {
      const res = await axios.post(
        "https://badigitalapi-g6hsh5eqh2e8hua9.centralus-01.azurewebsites.net/api/Account/reset-password",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsSent(false);
      setIsSuccess(true);

      if (isSuccess) {
        setMsg("Đặt lại mật khẩu thành công.");
        window.location.href = "/sign-in";
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSent(false);
    }
  };

  return (
    <>
      <div className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
              <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                <div className="row gy-3 mb-5">
                  <div className="col-12">
                    <div className="text-center">
                      <a href="/">
                        <img
                          src="/images/logo-ngang.png"
                          alt="BootstrapBrain Logo"
                          width="175"
                          height="57"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <h2 className="fs-6 fw-normal text-center text-secondary m-0 px-md-5">
                      Cung cấp địa chỉ email được dùng khi đăng ký tài khoản của
                      bạn để khôi phục mật khẩu.
                    </h2>
                  </div>
                </div>
                {error != null && (
                  <label
                    className={`form-label p-2 w-100 text-center ${
                      isSuccess ? "text-success" : "text-danger"
                    }`}
                  >
                    {msg}
                  </label>
                )}
                {isSuccess ? (
                  <>
                    {!isVerified ? (
                      <form onSubmit={handleVerify}>
                        <div className="row gy-3 gy-md-4 overflow-hidden">
                          <h3>
                            Nhập mã xác thực đã gửi đến email:{" "}
                            <span className="text-primary">{email}</span>
                          </h3>
                          <div className="col-12">
                            <input
                              type="number"
                              value={code}
                              onChange={(e) => setCode(e.target.value)}
                              placeholder="Mã xác thực"
                              className="form-control"
                              inputMode="numeric"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            {isSent ? (
                              <i
                                className="fas fa-spinner fa-spin"
                                style={{ paddingLeft: "10px" }}
                              ></i>
                            ) : (
                              "Xác minh"
                            )}
                          </button>
                        </div>
                      </form>
                    ) : (
                      <form onSubmit={handleChangePassword} ref={form}>
                        <div className="row gy-3 gy-md-4 overflow-hidden">
                          <div className="col-12">
                            <label htmlFor="password" className="form-label">
                              Mật khẩu mới{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <span className="input-group-text bg-primary">
                                <i
                                  className="fa-solid fa-lock"
                                  style={{ color: "white" }}
                                ></i>
                              </span>
                              <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                name="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                              />
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
                                  zIndex: 5,
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
                            <label htmlFor="confirm" className="form-label">
                              Xác nhận mật khẩu{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              {isMatch ? (
                                <span className="input-group-text bg-primary">
                                  <i
                                    className="fa-solid fa-circle-check"
                                    style={{ color: "white" }}
                                  ></i>
                                </span>
                              ) : (
                                <span className="input-group-text bg-danger">
                                  <i className="fa-solid fa-circle-xmark"></i>
                                </span>
                              )}
                              <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="confirm"
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                                value={confirmPassword}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                className={`${
                                  isMatch && "btn-primary"
                                } btn btn-lg`}
                                type="submit"
                                style={
                                  isMatch ? {} : { backgroundColor: "#ccc" }
                                }
                                disabled={!isMatch}
                              >
                                {isSent ? (
                                  <i
                                    className="fas fa-spinner fa-spin"
                                    style={{ paddingLeft: "10px" }}
                                  ></i>
                                ) : (
                                  "Xác nhận"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  </>
                ) : (
                  <div>
                    <form onSubmit={handleSendCodeMail}>
                      <div className="row gy-3 gy-md-4 overflow-hidden">
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <i
                                className="fa-solid fa-envelope"
                                style={{ color: "black" }}
                              ></i>
                            </span>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              className="btn btn-primary btn-lg"
                              type="submit"
                            >
                              {isSent ? (
                                <i
                                  className="fas fa-spinner fa-spin"
                                  style={{ paddingLeft: "10px" }}
                                ></i>
                              ) : (
                                "Gửi mã xác minh"
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="row">
                      <div className="col-12">
                        <hr className="mt-5 mb-4 border-secondary-subtle" />
                        <div className="d-flex gap-4 justify-content-center">
                          <a
                            href="/sign-in"
                            className="link-secondary text-decoration-none"
                          >
                            Đăng nhập
                          </a>
                          <a
                            href="/sign-up"
                            className="link-secondary text-decoration-none"
                          >
                            Đăng ký
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
