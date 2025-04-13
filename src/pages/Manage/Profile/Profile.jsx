import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  // Variables
  const id = window.location.pathname.split("/").pop();
  let [data, setData] = useState([]);
  let [err, setErr] = useState("");
  // End Variables

  // Get account data from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://badigitalapi-g6hsh5eqh2e8hua9.centralus-01.azurewebsites.net/api/Account/${id}`,
          {
            validateStatus: () => true,
          }
        );
        if (response.status !== 200) {
          setErr(response.data);
          return;
        }
        setData(response.data);
      } catch (error) {
        setErr("Network problem or server not working");
        console.log(
          `There was a problem with the fetch operation: ${error.message}`
        );
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {err.length == 0 ? (
        <section className="">
          <div className="container-fluid">
            {/* title-wrapper start */}
            <div className="title-wrapper pt-30">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="title">
                    <h2>Profile</h2>
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
                          Profile
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
              <div className="col-lg-6">
                <div className="card-style settings-card-1 mb-30">
                  <div className="title mb-30 d-flex justify-content-between align-items-center">
                    <h6>My Profile</h6>
                    <button className="border-0 bg-transparent">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                  </div>
                  <div className="profile-info">
                    <div className="d-flex align-items-center mb-30">
                      <div className="profile-image">
                        <img
                          src="/images/profile/profile-1.png"
                          alt=""
                          loading="lazy"
                        />
                        <div className="update-image">
                          <input type="file" id="avatar" />
                          <label htmlFor="avatar">
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                          </label>
                        </div>
                      </div>
                      <div className="profile-meta">
                        <h5 className="text-bold text-dark mb-10">
                          {data.username}
                        </h5>
                        <p className="text-sm text-gray">{data.positionName}</p>
                      </div>
                    </div>
                    <div className="input-style-1">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="admin@example.com"
                        value={data.email}
                      />
                    </div>
                    <div className="input-style-1">
                      <label>Password</label>
                      <input type="password" value={data.password} />
                    </div>
                    <div className="input-style-1">
                      <label>Website</label>
                      <input type="text" placeholder="" value="" />
                    </div>
                    <div className="input-style-1">
                      <label>Bio</label>
                      <textarea
                        placeholder="Write your bio here"
                        rows="4"
                        value={data.biography}
                      ></textarea>
                    </div>
                  </div>
                </div>
                {/* end card */}
              </div>
              {/* end col */}

              <div className="col-lg-6">
                <div className="card-style settings-card-2 mb-30">
                  <div className="title mb-30">
                    <h6>My Profile</h6>
                  </div>
                  <form onSubmit={{}}>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Full Name</label>
                          <input type="text" value={data.fullName} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Email</label>
                          <input type="email" value={data.email} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Company</label>
                          <input type="text" value={data.company} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Address</label>
                          <input type="text" value={data.address} />
                        </div>
                      </div>
                      <div className="col-xxl-4">
                        <div className="input-style-1">
                          <label>City</label>
                          <input type="text" value={data.city} />
                        </div>
                      </div>
                      <div className="col-xxl-4">
                        <div className="input-style-1">
                          <label>Zip Code</label>
                          <input type="text" value={data.zipCode} />
                        </div>
                      </div>
                      <div className="col-xxl-4">
                        <div className="input-style-1">
                          <label>Country</label>
                          <input type="text" value={data.country} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>About Me</label>
                          <textarea
                            placeholder="Type here"
                            rows="6"
                            value={data.description}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="main-btn primary-btn btn-hover">
                          Update Profile
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end card */}
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
      ) : (
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
          </div>
        </section>
      )}
    </>
  );
}
