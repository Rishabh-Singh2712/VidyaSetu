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
        <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: 20, marginBottom: 280 }}>
          <div className="col-10 p-5 shadow bg-white rounded">
            <center>
              <span className='fw-bolder fs-1'>
                <h3><i className="bi bi-person-square"></i> &nbsp;Faculty Dashboard</h3>
              </span>
            </center>
            <br />
            <div className="d-flex flex-wrap justify-content-around">
              {/* First Row of Cards */}
              <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem', height: '300px' }}>
                <img src="/image/timetable.png" alt="timetable" className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.25rem' }} />
                <div className="card-body">
                  <NavLink to="/faculty/addtimetable/" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title p-4 text-white">Add TimeTable</h5>
                  </NavLink>
                </div>
              </div>

              <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem', height: '300px' }}>
                <img src="/image/viewtimetable.png" alt="viewtimetable" className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover ', borderRadius: '0.25rem' }} />
                <div className="card-body">
                  <NavLink to="/faculty/viewtimetable" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title p-4 text-white">View TimeTable</h5>
                  </NavLink>
                </div>
              </div>

              <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem', height: '300px' }}>
                <img src="/image/noticeboard.png" alt="noticeboard" className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.25rem' }} />
                <div className="card-body">
                  <NavLink to="/faculty/addnoticeboard" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title p-4 text-white">Add Notice Board</h5>
                  </NavLink>
                </div>
              </div>

              <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem', height: '300px' }}>
                <img src="/image/notice.webp" alt="timetaviwenotice" className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.25rem' }} />
                <div className="card-body">
                  <NavLink to="/faculty/viewnoticeboard" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title p-4 text-white">View Notice Board</h5>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-around mt-4">
              {/* Second Row of Cards */}
              <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem', height: '300px' }}>
                <img src="/image/viestudents.png" alt="viewstudent" className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.25rem' }} />
                <div className="card-body">
                  <NavLink to="/faculty/viewstudent" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title p-4 text-white">View &nbsp;Student</h5>
                  </NavLink>
                </div>
              </div>

              <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem', height: '300px' }}>
                <img src="/image/assignment.webp" alt="timetable" className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.25rem' }} />
                <div className="card-body">
                  <NavLink to="/faculty/addassignment" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title p-4 text-white">Upload Assignment</h5>
                  </NavLink>
                </div>
              </div>

              <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem', height: '300px' }}>
                <img src="/image/book.jpg" alt="timetable" className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.25rem' }} />
                <div className="card-body">
                  <NavLink to="/faculty/viewassignment" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title p-4 text-white">View Assignment</h5>
                  </NavLink>
                </div>
              </div>

              <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem', height: '300px' }}>
                <img src="/image/asiignmentresult.png" alt="timetable" className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.25rem' }} />
                <div className="card-body">
                  <NavLink to="/faculty/viewassignmentanswer" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title p-4 text-white"> View Assignment Answer</h5>
                  </NavLink>
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