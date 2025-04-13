export default function SignUp() {
  return (
    <>
      <section className="signin-section">
        <div className="container-fluid">
          {/* title-wrapper start */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title">
                  <h2>Sign up</h2>
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
                        Sign up
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
                    <h1 className="text-primary mb-10">Get Started</h1>
                    <p className="text-medium">
                      Start creating the best possible user experience
                      <br className="d-sm-block" />
                      for you customers.
                    </p>
                  </div>
                  <div className="cover-image">
                    <img
                      src="/images/auth/signin-image.svg"
                      alt="image"
                      loading="lazy"
                    />
                  </div>
                  <div className="shape-image">
                    <img
                      src="/images/auth/shape.svg"
                      alt="image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-lg-6">
              <div className="signup-wrapper">
                <div className="form-wrapper">
                  <h6 className="mb-15">Sign Up Form</h6>
                  <p className="text-sm mb-25">
                    Start creating the best possible user experience for you
                    customers.
                  </p>
                  <form action="#">
                    <div className="row">
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Name</label>
                          <input type="text" placeholder="Name" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Email</label>
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Password</label>
                          <input type="password" placeholder="Password" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-12">
                        <div className="form-check checkbox-style mb-30">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="checkbox-not-robot"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-not-robot"
                          >
                            I’m not a robot
                          </label>
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-12">
                        <div className="button-group d-flex justify-content-center flex-wrap">
                          <button className="main-btn primary-btn btn-hover w-100 text-center">
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* end row */}
                  </form>
                  <div className="singup-option pt-40">
                    <p className="text-sm text-medium text-center text-gray">
                      Easy Sign Up With
                    </p>
                    <div className="button-group pt-40 pb-40 d-flex justify-content-center flex-wrap">
                      <button className="main-btn primary-btn-outline m-2">
                        <i className="fa-brands fa-facebook-f"></i>
                        Facebook
                      </button>
                      <button className="main-btn danger-btn-outline m-2">
                        <i className="fa-brands fa-google"></i>
                        Google
                      </button>
                    </div>
                    <p className="text-sm text-medium text-dark text-center">
                      Already have an account?{" "}
                      <a href="/admin/signin">Sign In</a>
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
