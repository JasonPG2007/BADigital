import Cookies from "js-cookie";

export default function Dashboard() {
  return sessionStorage.getItem("role") === "Admin" ||
    sessionStorage.getItem("role") === "Staff" ||
    Cookies.get("role") === "Admin" ||
    Cookies.get("role") === "Staff" ? (
    <>
      {/* main-wrapper start */}
      <main>
        {/* header start */}

        {/* header end */}

        {/* section start */}
        <section className="">
          <div className="container-fluid">
            {/* title-wrapper start */}
            <div className="title-wrapper pt-30">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="title">
                    <h2>Dashboard</h2>
                  </div>
                </div>
                {/* end col */}
                <div className="col-md-6">
                  <div className="breadcrumb-wrapper">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="javascript:void(0)">Dashboard</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Home
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
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="icon-card mb-30">
                  <div className="icon purple">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="content">
                    <h6 className="mb-10">New Orders</h6>
                    <h3 className="text-bold mb-10">34567</h3>
                    <p className="text-sm text-success">
                      <i className="fa-solid fa-arrow-up-long"></i> +2.00%
                      <span className="text-gray"> (30 days)</span>
                    </p>
                  </div>
                </div>
                {/* End Icon Cart */}
              </div>
              {/* End Col */}
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="icon-card mb-30">
                  <div className="icon success">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                  <div className="content">
                    <h6 className="mb-10">Total Income</h6>
                    <h3 className="text-bold mb-10">$74,567</h3>
                    <p className="text-sm text-success">
                      <i className="fa-solid fa-arrow-up-long"></i> +5.45%
                      <span className="text-gray">Increased</span>
                    </p>
                  </div>
                </div>
                {/* End Icon Cart */}
              </div>
              {/* End Col */}
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="icon-card mb-30">
                  <div className="icon primary">
                    <i className="fa-solid fa-credit-card"></i>
                  </div>
                  <div className="content">
                    <h6 className="mb-10">Total Expense</h6>
                    <h3 className="text-bold mb-10">$24,567</h3>
                    <p className="text-sm text-danger">
                      <i className="fa-solid fa-arrow-down-long"></i> -2.00%
                      <span className="text-gray">Expense</span>
                    </p>
                  </div>
                </div>
                {/* End Icon Cart */}
              </div>
              {/* End Col */}
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="icon-card mb-30">
                  <div className="icon orange">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="content">
                    <h6 className="mb-10">New User</h6>
                    <h3 className="text-bold mb-10">34567</h3>
                    <p className="text-sm text-danger">
                      <i className="fa-solid fa-arrow-down-long"></i> -25.00%
                      <span className="text-gray"> Earning</span>
                    </p>
                  </div>
                </div>
                {/* End Icon Cart */}
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
            <div className="row">
              <div className="col-lg-7">
                <div className="card-style mb-30">
                  <div className="title d-flex flex-wrap justify-content-between align-items-center">
                    <div className="left">
                      <h6 className="text-medium mb-30">
                        Top Selling Packages
                      </h6>
                    </div>
                    <div className="right">
                      <div className="select-style-1">
                        <div className="select-position select-sm">
                          <select className="light-bg">
                            <option value="">Yearly</option>
                            <option value="">Monthly</option>
                            <option value="">Weekly</option>
                          </select>
                        </div>
                      </div>
                      {/* end select */}
                    </div>
                  </div>
                  {/* End Title */}
                  <div className="table-responsive">
                    <table className="table top-selling-table">
                      <thead>
                        <tr>
                          <th>
                            <h6 className="text-sm text-medium">Products</h6>
                          </th>
                          <th className="min-width">
                            <h6 className="text-sm text-medium">Category</h6>
                          </th>
                          <th className="min-width">
                            <h6 className="text-sm text-medium">Price</h6>
                          </th>
                          <th className="min-width">
                            <h6 className="text-sm text-medium">Sold</h6>
                          </th>
                          <th className="min-width">
                            <h6 className="text-sm text-medium">Profit</h6>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="product">
                              <p className="text-sm">Arm Chair</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm">Interior</p>
                          </td>
                          <td>
                            <p className="text-sm">$345</p>
                          </td>
                          <td>
                            <p className="text-sm">43</p>
                          </td>
                          <td>
                            <p className="text-sm">$45</p>
                          </td>
                          <td>
                            <div className="action justify-content-end">
                              <button
                                className="more-btn ml-10 dropdown-toggle"
                                id="moreAction1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="moreAction1"
                              >
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Remove
                                  </a>
                                </li>
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Edit
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="product">
                              <p className="text-sm">SOfa</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm">Interior</p>
                          </td>
                          <td>
                            <p className="text-sm">$145</p>
                          </td>
                          <td>
                            <p className="text-sm">13</p>
                          </td>
                          <td>
                            <p className="text-sm">$15</p>
                          </td>
                          <td>
                            <div className="action justify-content-end">
                              <button
                                className="more-btn ml-10 dropdown-toggle"
                                id="moreAction1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="moreAction1"
                              >
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Remove
                                  </a>
                                </li>
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Edit
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="product">
                              <p className="text-sm">Dining Table</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm">Interior</p>
                          </td>
                          <td>
                            <p className="text-sm">$95</p>
                          </td>
                          <td>
                            <p className="text-sm">32</p>
                          </td>
                          <td>
                            <p className="text-sm">$215</p>
                          </td>
                          <td>
                            <div className="action justify-content-end">
                              <button
                                className="more-btn ml-10 dropdown-toggle"
                                id="moreAction1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="moreAction1"
                              >
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Remove
                                  </a>
                                </li>
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Edit
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="product">
                              <p className="text-sm">Office Chair</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm">Interior</p>
                          </td>
                          <td>
                            <p className="text-sm">$105</p>
                          </td>
                          <td>
                            <p className="text-sm">23</p>
                          </td>
                          <td>
                            <p className="text-sm">$345</p>
                          </td>
                          <td>
                            <div className="action justify-content-end">
                              <button
                                className="more-btn ml-10 dropdown-toggle"
                                id="moreAction1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="moreAction1"
                              >
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Remove
                                  </a>
                                </li>
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Edit
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End Table */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card-style mb-30">
                  <div className="title d-flex flex-wrap align-items-center justify-content-between">
                    <div className="left">
                      <h6 className="text-medium mb-30">Sales History</h6>
                    </div>
                    <div className="right">
                      <div className="select-style-1">
                        <div className="select-position select-sm">
                          <select className="light-bg">
                            <option value="">Today</option>
                            <option value="">Yesterday</option>
                          </select>
                        </div>
                      </div>
                      {/* end select */}
                    </div>
                  </div>
                  {/* End Title */}
                  <div className="table-responsive">
                    <table className="table top-selling-table">
                      <thead>
                        <tr>
                          <th>
                            <h6 className="text-sm text-medium">Products</h6>
                          </th>
                          <th className="min-width">
                            <h6 className="text-sm text-medium">
                              Category{" "}
                              <i className="fa-solid fa-arrows-up-down"></i>
                            </h6>
                          </th>
                          <th className="min-width">
                            <h6 className="text-sm text-medium">
                              Revenue{" "}
                              <i className="fa-solid fa-arrows-up-down"></i>
                            </h6>
                          </th>
                          <th className="min-width">
                            <h6 className="text-sm text-medium">
                              Status{" "}
                              <i className="fa-solid fa-arrows-up-down"></i>
                            </h6>
                          </th>
                          <th>
                            <h6 className="text-sm text-medium text-end">
                              Actions{" "}
                              <i className="fa-solid fa-arrows-up-down"></i>
                            </h6>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="product">
                              <p className="text-sm">Bedroom</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm">Interior</p>
                          </td>
                          <td>
                            <p className="text-sm">$345</p>
                          </td>
                          <td>
                            <span className="status-btn close-btn">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="action justify-content-end">
                              <button
                                className="more-btn ml-10 dropdown-toggle"
                                id="moreAction1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="moreAction1"
                              >
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Remove
                                  </a>
                                </li>
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Edit
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="product">
                              <p className="text-sm">Arm Chair</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm">Interior</p>
                          </td>
                          <td>
                            <p className="text-sm">$345</p>
                          </td>
                          <td>
                            <span className="status-btn warning-btn">
                              Refund
                            </span>
                          </td>
                          <td>
                            <div className="action justify-content-end">
                              <button
                                className="more-btn ml-10 dropdown-toggle"
                                id="moreAction1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="moreAction1"
                              >
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Remove
                                  </a>
                                </li>
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Edit
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="product">
                              <p className="text-sm">Sofa</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm">Interior</p>
                          </td>
                          <td>
                            <p className="text-sm">$345</p>
                          </td>
                          <td>
                            <span className="status-btn success-btn">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="action justify-content-end">
                              <button
                                className="more-btn ml-10 dropdown-toggle"
                                id="moreAction1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="moreAction1"
                              >
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Remove
                                  </a>
                                </li>
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Edit
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="product">
                              <p className="text-sm">Kitchen</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm">Interior</p>
                          </td>
                          <td>
                            <p className="text-sm">$345</p>
                          </td>
                          <td>
                            <span className="status-btn close-btn">
                              Canceled
                            </span>
                          </td>
                          <td>
                            <div className="action justify-content-end">
                              <button
                                className="more-btn ml-10 dropdown-toggle"
                                id="moreAction1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="moreAction1"
                              >
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Remove
                                  </a>
                                </li>
                                <li className="dropdown-item">
                                  <a href="#0" className="text-gray">
                                    Edit
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End Table */}
                  </div>
                </div>
              </div>
              {/* End Col */}
            </div>
          </div>
          {/* end container */}
        </section>
        {/* section end */}
      </main>
    </>
  ) : (
    <div className="container-custom">
      <h1 className="text-center">You need to login</h1>
      {(window.location.href = "/manage/sign-in")}
    </div>
  );
}
