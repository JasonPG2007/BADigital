import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Projects() {
  // Variables
  let [isSubmit, setIsSubmit] = useState("");
  let [listProject, setListProject] = useState([]);
  let [error, setError] = useState("");
  let [msg, setMsg] = useState("");
  let [isSent, setIsSent] = useState("");
  let [isUpdate, setIsUpdate] = useState("");
  let [isDelete, setIsDelete] = useState("");
  // End Variables

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(
          `https://badigitalapi-g6hsh5eqh2e8hua9.centralus-01.azurewebsites.net/api/Product/`,
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
        setListProject(response.data);
      } catch (error) {
        setIsSubmit(false);
        setError("Network problem or server not working");
        console.error("Axios error:", error.message);
      }
    };

    fetchOrder();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    try {
      const responseOrder = await axios.post(
        `https://badigitalapi-g6hsh5eqh2e8hua9.centralus-01.azurewebsites.net/api/Product/`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          validateStatus: () => true,
        }
      );

      if (responseOrder.status !== 200) {
        setIsSubmit(false);
        setMsg(responseOrder.data);
        setError(responseOrder.data);
        return;
      }

      // Handle successful response
      setIsSubmit(false);
      setIsSent(true);
    } catch (error) {
      setIsSubmit(false);
      setError("Network problem or server not working");
      console.error("Axios error:", error.message);
    }
  };

  return (
    <>
      <section className="">
        <div className="container-fluid">
          {/* title-wrapper start */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title">
                  <h2>Projects</h2>
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
                        Projects
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {listProject.length > 0 ? (
            <div className="row text-center">
              <div className="table-responsive custom-table-responsive">
                <table className="table custom-table">
                  <thead>
                    <tr>
                      <th scope="col">Project ID</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">Project Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Image</th>
                      <th scope="col">Link</th>
                      <th scope="col">Primary Color</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Updated At</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listProject.map((project) => (
                      <React.Fragment key={project.productId}>
                        <tr
                          scope="row"
                          className="hover-active"
                          style={{ backgroundColor: "black" }}
                        >
                          <td className="td-admin">{project.productId}</td>
                          <td className="td-admin">{project.customerName}</td>
                          <td className="td-admin">
                            <a
                              href={`/manage/project-category/${project.productCategoryId}`}
                            >
                              {project.categoryName}
                            </a>
                          </td>
                          <td className="td-admin">{project.productName}</td>
                          <td className="td-admin">{project.description}</td>
                          <td className="td-admin">${project.productPrice}</td>
                          <td className="td-admin">
                            <img
                              src={`/images/projects/${project.productImage}`}
                              alt="project image"
                              width={"70"}
                            />
                          </td>
                          <td className="td-admin">
                            <a
                              href={project.productLink}
                              target="_blank"
                              title={project.productLink}
                            >
                              Website{" "}
                              <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                          </td>
                          <td className="td-admin">{project.primaryColor}</td>
                          <td className="td-admin">
                            {new Date(project.createdAt).toLocaleDateString(
                              "vn"
                            )}
                          </td>
                          <td className="td-admin">
                            {project.updatedAt != null ? (
                              <span>
                                {new Date(project.updatedAt).toLocaleDateString(
                                  "vn"
                                )}
                              </span>
                            ) : (
                              <span>Chưa cập nhật</span>
                            )}
                          </td>
                          <td className="td-admin">
                            <button
                              className="btn btn-success me-2"
                              onClick={() => {
                                document
                                  .getElementById("update-delete")
                                  .classList.add("show");
                                document.body.style.overflow = "hidden";
                                setIsUpdate(true);
                                setIsDelete(false);
                              }}
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                document
                                  .getElementById("update-delete")
                                  .classList.add("show");
                                document.body.style.overflow = "hidden";
                                setIsUpdate(false);
                                setIsDelete(true);
                              }}
                            >
                              <i className="fa-solid fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr className="spacer">
                          <td colSpan="100"></td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="loading-back">
              <div className="loading"></div>
              <p className="follow-loading">Connecting to server...</p>
            </div>
          )}
        </div>
      </section>

      {/* Popup for update or delete */}
      <div className="popup-overlay" id="update-delete">
        <div className="popup-content">
          <h2 className="title heading-service">
            {isUpdate ? <span>Update</span> : <span>Delete</span>}
          </h2>
          {!isSent ? (
            <div className="item-service">
              {error.length > 0 && (
                <label className="form-label p-2 w-100 text-center text-danger">
                  {msg}
                </label>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px 0 0",
                }}
                className="form-group"
              >
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="Số điện thoại"
                    className="form-control"
                    onChange={(e) => {
                      // Delete all non-numeric characters
                      e.target.value = e.target.value.replace(/\D/g, "");

                      // The limit for the number of digits entered is 10.
                      if (e.target.value.length > 10) {
                        e.target.value = e.target.value.slice(0, 10);
                      }
                    }}
                  />
                  <div
                    className="mt-3"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {!isSubmit ? (
                      isUpdate ? (
                        <button className="btn btn-success p-3 px-5 py-4 me-2 mr-md-2 title">
                          Update
                        </button>
                      ) : (
                        <button className="btn btn-danger p-3 px-5 py-4 me-2 mr-md-2 title">
                          Delete
                        </button>
                      )
                    ) : (
                      <button
                        className="btn btn-primary p-3 px-5 py-4 mr-md-2 title"
                        style={{ marginRight: "10px" }}
                      >
                        <i
                          className="fas fa-spinner fa-spin"
                          style={{ paddingLeft: "10px" }}
                        ></i>
                      </button>
                    )}
                    <button
                      className="btn btn-outline-success p-3 px-5 py-4 ml-md-2 title"
                      onClick={() => {
                        document
                          .getElementById("update-delete")
                          .classList.remove("show");
                        document.body.style.overflow = "auto";
                      }}
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="item-service">
              <div
                style={{
                  display: "block",
                  justifyContent: "space-between",
                  padding: "20px 0 0",
                }}
                className="form-group"
              >
                <h1 className="success-h1">Delete successfully</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    className="btn btn-outline-primary p-3 px-5 py-4 ml-md-2 title"
                    onClick={() => {
                      document
                        .getElementById("update-delete")
                        .classList.remove("show");
                      document.body.style.overflow = "auto";
                      {
                        setIsSent(false);
                      }
                    }}
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
          <button
            className="btn-close-popup"
            onClick={() => {
              document.getElementById("update-delete").classList.remove("show");
              document.body.style.overflow = "auto";
              {
                setIsSent(false);
              }
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <br />
        </div>
      </div>
      {/* End Popup for order */}
    </>
  );
}
