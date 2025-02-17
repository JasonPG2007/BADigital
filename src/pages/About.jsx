export default function About() {
  return (
    <>
      <section className="page-header bg-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h2 className="mb-3 text-capitalize">
                <i className="fas fa-hourglass-half waiting"></i> Trang này đang
                được phát triển
              </h2>
              <ul
                className="list-inline breadcrumbs text-capitalize"
                style={{ fontWeight: "500" }}
              >
                <li className="list-inline-item">
                  <a href="contact">
                    Rất tiếc về sự bất tiện này và cảm ơn bạn vì đã hiểu và
                    thông cảm.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
