import axios from "axios";
import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function TemplateDetail() {
  // Variables
  const form = useRef();
  let [data, setData] = useState("");
  let [isConnected, setIsConnected] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorFullName, setErrorFullName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [note, setNote] = useState("");
  let [isSent, setIsSent] = useState(false);
  let [isSendEmail, setIsSendEmail] = useState(false);
  let [isSubmitting, setIsSubmitting] = useState(false);
  const id = window.location.pathname.split("/").pop();
  // End Variables

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (phoneNumber.trim() === "") {
      setErrorPhone("SĐT không hợp lệ");
      return;
    }

    setIsSendEmail(true);
    emailjs
      .sendForm(
        "service_jrgaq57",
        "template_j6snca8",
        form.current,
        "36B1PoPlACVPxMI_K",
      )
      .then(
        (result) => {
          alert(
            "🎉 Chúc mừng bạn đã gửi yêu cầu thành công! 😊\n BA Digital sẽ liên hệ với bạn trong vòng 24h. Bạn hãy để ý tin nhắn qua email hoặc zalo nhé!",
          );
          setIsSendEmail(false);
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("❌ Đăng ký thất bại! 😢. Vui lòng thử lại sau! ");
        },
      );
  };

  useEffect(() => {
    if (phoneNumber.length === 10) {
      setErrorPhone("");
    } else if (phoneNumber.length > 0) {
      setErrorPhone("SĐT không hợp lệ");
    } else {
      setErrorPhone(""); // No error display when there is no number
    }

    if (fullName.trim().length < 2) {
      setErrorFullName("Họ và tên phải có ít nhất 2 ký tự");
    } else {
      setErrorFullName(""); // No error display when there is no name
    }

    if (email.length > 0 && !email.includes("@")) {
      setErrorEmail("Email không hợp lệ");
    } else {
      setErrorEmail(""); // No error display when there is no email or it's valid
    }
  }, [phoneNumber, fullName, email]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("/data/templates.json");
      const project = response.data.find(
        (item) => item.productId === Number(id),
      );
      setIsConnected(response.status);
      setData(project);
    };

    fetch();
  }, []);

  return id ? (
    <>
      <div className="template-notice">
        <strong>Lưu ý:</strong> Đây là website demo. Chúng tôi có thể tùy chỉnh
        thiết kế và tính năng theo nhu cầu của bạn.
      </div>
      {data.productId ? (
        <div className="container mt-5">
          <div className="row">
            <div
              className="col-md-6 mb-4 product-image"
              onClick={() => {
                window.open(data.productLink, "_blank");
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <img
                src={`/images/templates/${data.productImage}`}
                alt={`Mẫu của ${data.customerName}`}
                id="mainImage"
                loading="lazy"
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
              <h5>Mã Website:</h5>
              <p className="text-muted mb-4">{data.templateCode}</p>
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
                {data.description.length > 0
                  ? data.description.map((item, index) => (
                      <ul key={index}>
                        <li>{item}</li>
                      </ul>
                    ))
                  : "Không có mô tả"}
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
              <button
                className="btn btn-primary w-100"
                onClick={() => {
                  document
                    .getElementById("popup-overlay")
                    .classList.add("show");
                  document.body.style.overflow = "hidden";
                }}
              >
                <i className="fa-solid fa-pencil me-2"></i>
                Tùy chỉnh mẫu này
              </button>
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

      {/* Popup for order */}
      <div className="popup-overlay" id="popup-overlay">
        <div className="popup-content">
          <h2 className="title heading-service">Tùy chỉnh mẫu website</h2>
          <p className="text-muted subtitle">
            Điền thông tin để chúng tôi liên hệ và cá nhân hóa mẫu này cho bạn.
          </p>
          {!isSent ? (
            <div className="item-service">
              {errorFullName.length > 0 && (
                <label className="form-label p-2 w-100 text-center text-danger">
                  {errorFullName != null && <span>{errorFullName}</span>}
                </label>
              )}

              {errorEmail.length > 0 && (
                <label className="form-label p-2 w-100 text-center text-danger">
                  {errorEmail != null && <span>{errorEmail}</span>}
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
                <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
                  <input
                    type="hidden"
                    name="template_code"
                    placeholder="Mã website *"
                    className="form-control"
                    value={data.templateCode || ""}
                  />
                  <input
                    type="text"
                    name="package"
                    placeholder="Mã website *"
                    className="form-control"
                    disabled
                    value={`Mã website: ${data.templateCode}`}
                    style={{
                      marginBottom: "10px",
                      backgroundColor: "#f5f5f5",
                    }}
                  />
                  <div className="form-order">
                    <input
                      type="text"
                      name="full_name"
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Họ và tên *"
                      className="form-control"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="SĐT / Zalo"
                    className="form-control"
                    onChange={(e) => {
                      // Delete all non-numeric characters
                      e.target.value = e.target.value.replace(/\D/g, "");

                      // The limit for the number of digits entered is 10.
                      if (e.target.value.length > 10) {
                        e.target.value = e.target.value.slice(0, 10);
                      }
                      setPhoneNumber(e.target.value);
                    }}
                  />
                  <p className="error_phone">
                    {errorPhone != null && <span>{errorPhone}</span>}
                  </p>
                  <textarea
                    name="message"
                    id="note"
                    rows="4"
                    placeholder="Ghi chú thêm (nếu có)"
                    className="form-control"
                    style={{ marginBottom: "10px" }}
                    onChange={(e) => setNote(e.target.value)}
                  ></textarea>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {!isSubmitting ? (
                      errorPhone ? (
                        <button
                          className="btn btn-primary p-3 px-5 py-4 mr-md-2 title"
                          style={{
                            marginRight: "10px",
                            backgroundColor: "#ccc",
                          }}
                          disabled
                        >
                          <i className="fas fa-paper-plane"></i> Gửi
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary px-5 title"
                          style={{ marginRight: "10px" }}
                        >
                          <i className="fas fa-paper-plane"></i> Gửi
                        </button>
                      )
                    ) : (
                      <button
                        className="btn btn-primary px-5 title"
                        style={{ marginRight: "10px" }}
                        disabled
                      >
                        <i
                          className="fas fa-spinner fa-spin"
                          style={{ paddingLeft: "10px" }}
                        ></i>
                      </button>
                    )}
                    <button
                      className="btn btn-outline-primary px-5 title"
                      onClick={() => {
                        document
                          .getElementById("popup-overlay")
                          .classList.remove("show");
                        document.body.style.overflow = "auto";
                      }}
                      type="button"
                      disabled={isSubmitting}
                    >
                      <i className="fas fa-xmark"></i> Hủy
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
                <h1 className="success-h1">
                  🎉 Thông tin của bạn đã được gửi thành công. Chúng tôi sẽ sớm
                  liên hệ với bạn qua email mà bạn cung cấp trong vòng 24 giờ
                  tới!
                </h1>
                <p className="note-order">
                  <i>
                    *Ghi chú: Bạn có thể tra cứu trạng thái của đơn đăng ký này
                    bằng mã đơn đăng ký của bạn. (Mã đơn: )
                  </i>
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a
                    href="/"
                    className="btn btn-primary p-3 px-5 py-4 mr-md-2 title"
                    style={{ marginRight: "10px" }}
                  >
                    Đặt thêm
                  </a>
                  <button
                    className="btn btn-outline-primary p-3 px-5 py-4 ml-md-2 title"
                    onClick={() => {
                      document
                        .getElementById("popup-overlay-manicure")
                        .classList.remove("show");
                      document.body.style.overflow = "auto";
                      setIsSent(false);
                      setErrorPhone("");
                    }}
                    type="button"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          )}
          <button
            className="btn-close-popup"
            onClick={() => {
              document.getElementById("popup-overlay").classList.remove("show");
              document.body.style.overflow = "auto";
              {
                setIsSent(false);
                setErrorPhone("");
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
