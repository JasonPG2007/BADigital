import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function SignIn() {
  // Variables
  let [email, setEmail] = useState("");
  let [isSubmit, setIsSubmit] = useState("");
  let [password, setPassword] = useState("");
  let [msg, setMsg] = useState("");
  let [error, setError] = useState("");
  // End Variables

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    try {
      const response = await axios.post(
        `https://badigitalapi-g6hsh5eqh2e8hua9.centralus-01.azurewebsites.net/api/Account/${email}/${password}`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          validateStatus: () => true,
        }
      );

      if (response.status !== 200) {
        setIsSubmit(false);
        setMsg(response.data);
        setError(response.data);
        return;
      }

      // Handle successful response
      setIsSubmit(false);
      const data = response.data;
      setMsg("Đăng nhập thành công");
      setError("");
      Cookies.set("username", data.username, { expires: 7 });
      Cookies.set("role", data.role, { expires: 7 });
      Cookies.set("accountId", data.accountId, { expires: 7 });

      if (data.role === "Admin" || data.role === "Staff") {
        window.location.href = "/manage/dashboard";
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      setIsSubmit(false);
      setError("Network problem or server not working");
      console.error("Axios error:", error.message);
    }
  };

  return (
    <>
      <section className="signin-section">
        <div className="container-fluid">
          {/* title-wrapper start */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title">
                  <h2>Sign in</h2>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-6">
                <div className="breadcrumb-wrapper">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#0">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#0">Auth</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Sign in
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* title-wrapper end */}
          <div className="row g-0 auth-row">
            <div className="col-lg-6">
              <div className="auth-cover-wrapper bg-primary-100">
                <div className="auth-cover">
                  <div className="title text-center">
                    <h1 className="text-primary mb-10">Welcome Back</h1>
                    <p className="text-medium">
                      Sign in to your Existing account to continue
                    </p>
                  </div>
                  <div className="cover-image">
                    <img
                      src="/images/auth/signin-image.svg"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="shape-image">
                    <img src="/images/auth/shape.svg" alt="" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-lg-6">
              <div className="signin-wrapper">
                <div className="form-wrapper">
                  <h6 className="mb-15">Sign In Form</h6>
                  <p className="text-sm mb-25">
                    Start creating the best possible user experience for you
                    customers.
                  </p>
                  {msg.length > 0 && error.length === 0 && (
                    <label className="form-label p-2 w-100 text-center text-primary">
                      {msg}
                    </label>
                  )}
                  {error.length > 0 && (
                    <label className="form-label p-2 w-100 text-center text-danger">
                      {msg}
                    </label>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Email</label>
                          <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                          />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Password</label>
                          <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                          />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-xxl-6 col-lg-12 col-md-6">
                        <div className="form-check checkbox-style mb-30">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="checkbox-remember"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-remember"
                          >
                            Remember me next time
                          </label>
                        </div>
                      </div>
                      {/* end col  */}
                      <div className="col-xxl-6 col-lg-12 col-md-6">
                        <div className="text-start text-md-end text-lg-start text-xxl-end mb-30">
                          <a
                            href="reset-password.html"
                            className="hover-underline"
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-12">
                        <div className="button-group d-flex justify-content-center flex-wrap">
                          {!isSubmit ? (
                            <button
                              className="main-btn primary-btn btn-hover w-100 text-center"
                              type="submit"
                            >
                              Sign In
                            </button>
                          ) : (
                            <button
                              className="main-btn primary-btn btn-hover w-100 text-center"
                              type="submit"
                              disabled
                            >
                              <i
                                className="fas fa-spinner fa-spin"
                                style={{ paddingLeft: "10px" }}
                              ></i>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* end row */}
                  </form>
                  <div className="singin-option pt-40">
                    <p className="text-sm text-medium text-dark text-center">
                      Don’t have any account yet?
                      <a href="/admin/signup">Create an account</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
      </section>
    </>
  );
}
