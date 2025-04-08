import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FacultyNavBar from './FacultyNavBar';

function Faculty() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("userName") === null) {
      navigate("/");
    }
    if (sessionStorage.getItem("userRole") === "ROLE_ADMIN") {
      navigate("/admin");
    }
    if (sessionStorage.getItem("userRole") === "ROLE_STUDENT") {
      navigate("/student");
    }
  });

  return (
    <div>
      <FacultyNavBar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='container-fluid'>
        <div className="row justify-content-around align-items-center" style={{ minHeight: "98vh", marginTop: 20, marginBottom: 280 }}>
          <div className="col-10 p-5 shadow bg-white rounded">
            <center>
              <span className='fw-bolder fs-1'>
                <h3 style={{ padding: '50px 0' }}>
                <i className="bi bi-person-square"></i> &nbsp;Faculty Dashboard</h3>
              </span>
            </center>
            <br />
            <div className="row g-3">
              {/* First Row of Cards */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card text-bg-success h-100">
                  <img src="/image/timetable.png" alt="timetable" className="card-img-top" style={{ objectFit: 'contain', borderRadius: '0.25rem', height: '200px' }} />
                  <div className="card-body">
                    <NavLink to="/faculty/addtimetable/" style={{ textDecoration: 'none' }}>
                      <h5 className="card-title text-white">Add TimeTable</h5>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card text-bg-success h-100">
                  <img src="/image/viewtimetable.png" alt="viewtimetable" className="card-img-top" style={{ objectFit: 'contain', borderRadius: '0.25rem', height: '200px' }} />
                  <div className="card-body">
                    <NavLink to="/faculty/viewtimetable" style={{ textDecoration: 'none' }}>
                      <h5 className="card-title text-white">View TimeTable</h5>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card text-bg-success h-100">
                  <img src="/image/noticeboard.png" alt="noticeboard" className="card-img-top" style={{ objectFit: 'contain', borderRadius: '0.25rem', height: '200px' }} />
                  <div className="card-body">
                    <NavLink to="/faculty/addnoticeboard" style={{ textDecoration: 'none' }}>
                      <h5 className="card-title text-white">Add Notice Board</h5>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card text-bg-success h-100">
                  <img src="/image/notice.webp" alt="viewnotice" className="card-img-top" style={{ objectFit: 'contain', borderRadius: '0.25rem', height: '200px' }} />
                  <div className="card-body">
                    <NavLink to="/faculty/viewnoticeboard" style={{ textDecoration: 'none' }}>
                      <h5 className="card-title text-white">View Notice Board</h5>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-3 mt-4">
              {/* Second Row of Cards */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card text-bg-success h-100">
                  <img src="/image/viestudents.png" alt="viewstudent" className="card-img-top" style={{ objectFit: 'contain', borderRadius: '0.25rem', height: '200px' }} />
                  <div className="card-body">
                    <NavLink to="/faculty/viewstudent" style={{ textDecoration: 'none' }}>
                      <h5 className="card-title text-white">View Student</h5>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card text-bg-success h-100">
                  <img src="/image/assignment.webp" alt="uploadassignment" className="card-img-top" style={{ objectFit: 'contain', borderRadius: '0.25rem', height: '200px' }} />
                  <div className="card-body">
                    <NavLink to="/faculty/addassignment" style={{ textDecoration: 'none' }}>
                      <h5 className="card-title text-white">Upload Assignment</h5>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card text-bg-success h-100">
                  <img src="/image/book.jpg" alt="viewassignment" className="card-img-top" style={{ objectFit: 'contain', borderRadius: '0.25rem', height: '200px' }} />
                  <div className="card-body">
                    <NavLink to="/faculty/viewassignment" style={{ textDecoration: 'none' }}>
                      <h5 className="card-title text-white">View Assignment</h5>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card text-bg-success h-100">
                  <img src="/image/asiignmentresult.png" alt="viewassignmentanswer" className="card-img-top" style={{ objectFit: 'contain', borderRadius: '0.25rem', height: '200px' }} />
                  <div className="card-body">
                    <NavLink to="/faculty/viewassignmentanswer" style={{ textDecoration: 'none' }}>
                      <h5 className="card-title text-white">View Assignment Answer</h5>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;