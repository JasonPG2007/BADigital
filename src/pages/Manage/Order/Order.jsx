import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Order() {
  // Variables
  let [isSubmit, setIsSubmit] = useState("");
  let [orderId, setOrderId] = useState("");
  let [listOrder, setListOrder] = useState([]);
  let [error, setError] = useState("");
  let [msg, setMsg] = useState("");
  // End Variables

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(
          `https://badigitalapi-g6hsh5eqh2e8hua9.centralus-01.azurewebsites.net/api/Order/`,
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
        setListOrder(response.data);
      } catch (error) {
        setIsSubmit(false);
        setError("Network problem or server not working");
        console.error("Axios error:", error.message);
      }
    };

    fetchOrder();
  }, []);

  return (
    <>
      <section className="">
        <div className="container-fluid">
          {/* title-wrapper start */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title">
                  <h2>Orders</h2>
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
                        Orders
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          <div className="row text-center">
            <div className="table-responsive custom-table-responsive">
              <table className="table custom-table">
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Order Name</th>
                    <th scope="col">Package</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Customer Email</th>
                    <th scope="col">Customer Phone</th>
                    <th scope="col">Note</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Updated At</th>
                  </tr>
                </thead>
                <tbody>
                  {listOrder.map((item) => (
                    <React.Fragment key={item.orderId}>
                      <tr scope="row">
                        <td className="td-admin">{item.orderId}</td>
                        <td className="td-admin">{item.orderName}</td>
                        <td className="td-admin">{item.packageName}</td>
                        <td className="td-admin">{item.fullName}</td>
                        <td className="td-admin">{item.email}</td>
                        <td className="td-admin">{item.phoneNumber}</td>
                        <td className="td-admin">{item.note}</td>
                        <td className="td-admin">{item.status}</td>
                        <td className="td-admin">
                          {new Date(item.createdAt).toLocaleDateString("vn")}
                        </td>
                        <td className="td-admin">
                          {item.updatedAt != null ? (
                            <span>
                              {new Date(item.updatedAt).toLocaleDateString(
                                "vn"
                              )}
                            </span>
                          ) : (
                            <span>Chưa cập nhật</span>
                          )}
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
        </div>
      </section>
    </>
  );
}
