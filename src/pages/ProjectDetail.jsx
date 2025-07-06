import axios from "axios";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
  // Variables
  let [data, setData] = useState("");
  let [isConnected, setIsConnected] = useState("");
  const id = window.location.pathname.split("/").pop();
  // End Variables

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://badigitalapi-g6hsh5eqh2e8hua9.centralus-01.azurewebsites.net/api/Product/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          validateStatus: () => true,
        }
      );
      setIsConnected(response.status);
      setData(response.data);
    };

    fetch();
  }, []);

  return id ? (
    <>
      {data.productId ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 mb-4 product-image">
              <img
                src={`/images/projects/${data.productImage}`}
                alt={`Dự án của ${data.customerName}`}
                id="mainImage"
              />
              <a
                href={data.productLink}
                className="link-website link-website-detail"
                target="_blank"
                title={`Mở website của ${data.customerName}`}
              >
                Mở website{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>

            <div className="col-md-6">
              <h2 className="mb-3" style={{ color: data.primaryColor }}>
                {data.productName}
              </h2>
              <p className="text-muted mb-4">
                Khách hàng: {data.customerName} <br />
                Thể loại: {data.categoryName}
              </p>
              {/* <div className="mb-3">
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star-half text-warning"></i>
                <span className="ms-2">4.5 (120 reviews)</span>
              </div> */}
              <h5>Mô tả:</h5>
              <div className="mb-4 description-wrapper active">
                <p className="description">
                  {data.description !== null
                    ? data.description
                    : "Không có mô tả"}
                </p>
              </div>
              <div className="mb-4">
                <h5>Màu chính:</h5>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Color selection"
                >
                  <label
                    style={{
                      backgroundColor: data.primaryColor,
                      color: "#fff",
                      padding: "10px 20px",
                      borderRadius: "10px",
                    }}
                  >
                    {data.primaryColor}
                  </label>
                </div>
              </div>
              {/* <div className="mt-4">
                <h5>Key Features:</h5>
                <ul>
                  <li>Industry-leading noise cancellation</li>
                  <li>30-hour battery life</li>
                  <li>Touch sensor controls</li>
                  <li>Speak-to-chat technology</li>
                </ul>
              </div> */}
            </div>
          </div>
          <br />
          {/* <div className="mt-5 mb-5 text-center">
            <h2>Các sản phầm cùng thể loại:</h2>
            <div className="row mt-5">
              <div className="text-center col-lg-3 col-md-6 mb-4">
                <div className="rounded shadow">
                  <div className="card-project">
                    <div className="img-projects">
                      <a href={`/project/`}>
                        <img
                          src={`/images/projects/${data.productImage}`}
                          alt="project picture"
                        />
                      </a>
                    </div>
                    <div className="info-project">
                      <a href={`/project/`} title="Xem thêm">
                        <h3 style={{ color: data.primaryColor }}>SDASDASDAD</h3>
                      </a>
                      <a
                        href={""}
                        target="_blank"
                        className="link-website"
                        title={`Mở website của `}
                      >
                        Website{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      ) : (
        <section className="page-header bg-tertiary">
          <div className="container">
            <div className="row">
              <div className="col-8 mx-auto text-center">
                <h2 className="mb-3 text-capitalize">
                  <i className="fa-solid fa-magnifying-glass"></i> Không tìm
                  thấy dự án
                </h2>
                <br />
                <a className="btn btn-primary" href="/projects">
                  Xem dự án khác{" "}
                  <span
                    style={{ fontSize: "14px" }}
                    className="ms-2 fas fa-arrow-right"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  ) : (
    <section className="page-header bg-tertiary">
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto text-center">
            <h2 className="mb-3 text-capitalize">
              <i className="fa-solid fa-magnifying-glass"></i> Không tìm thấy dự
              án
            </h2>
            <br />
            <a className="btn btn-primary" href="/projects">
              Xem dự án khác{" "}
              <span
                style={{ fontSize: "14px" }}
                className="ms-2 fas fa-arrow-right"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
