export default function Order() {
  const id = window.location.pathname.split("/").pop();
  return id.length > 0 ? (
    <>
      <section className="page-header bg-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h2 className="mb-3 text-capitalize">
                <i className="fas fa-hourglass-half waiting"></i> Không tìm thấy
                trang
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <section className="page-header bg-tertiary">
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto text-center">
            <h2 className="mb-3 text-capitalize">
              <i className="fa-solid fa-circle-exclamation"></i> Không thể đặt
              dịch vụ này
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
