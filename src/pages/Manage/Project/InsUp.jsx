import Cookies from "js-cookie";

export default function InsUp() {
  const handleSubmit = function () {};
  return sessionStorage.getItem("role") === "Admin" ||
    sessionStorage.getItem("role") === "Staff" ||
    Cookies.get("role") === "Admin" ||
    Cookies.get("role") === "Staff" ? (
    <>
      <section className="">
        <div className="container-fluid">
          {/* title-wrapper start */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title">
                  <h2>Add project</h2>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-6">
                <div className="breadcrumb-wrapper">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/admin/dashboard">Dashboard</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Create
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>

          <div className="row">
            <form onSubmit={{ handleSubmit }}>
              <input
                type="text"
                className="form-control"
                placeholder="Order ID"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  ) : (
    <div className="container-custom">
      <h1 className="text-center">You need to login</h1>
      {(window.location.href = "/manage/sign-in")}
    </div>
  );
}
