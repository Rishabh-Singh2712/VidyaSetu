
import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import StudentNavBar from './StudentNavBar';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Student() {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("userName") === null) {
      navigate("/");
    }
    if (sessionStorage.getItem("userRole") === "ROLE_ADMIN") {
      navigate("/admin")
    }
    if (sessionStorage.getItem("userRole") === "ROLE_FACULTY") {
      navigate("/faculty")
    }
  }, [navigate]);

  return (
    <div>
      <StudentNavBar />
      
      <div className='container-fluid'>
        <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: 30,marginBottom:120 }}>
          <div className="col-6 p-5 shadow bg-white rounded ">
            <center><span className='fw-bolder fs-4 mb-3'><h2><i className="bi bi-mortarboard"></i> &nbsp; Student Dashboard</h2></span></center>
            <br />
            <table >
              <tbody>
                <tr>
                  <td  className='p-3 px-5'>
                    <div className="card  mb-3" style={{ maxWidth: '18rem' }}>
                      
                    <div style={{ backgroundColor: "black" }}>
                     
                        <NavLink to="/student/timetable" style={{ textDecoration: 'none' }}>
                        <div className="card-body text-center">
                        <img src="/image/time table.png" alt="timetable" className="card-img-top" style={{ width: '100%', height: '15vh', borderRadius: '0.25rem' }} />

                          <h5 className="card-title p-4 text-white">TimeTable</h5>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  
                  </td>
                  <td>
                    <div className="card  mb-3" style={{ maxWidth: '18rem' }}>
                   
                    <div style={{ backgroundColor: "black" }}>
                   
                      <div className="card-body text-center">
                        <NavLink to="/student/noticeboard" style={{ textDecoration: 'none' }}>
                        <img src="/image/noticeboard.webp" alt="noticeboard" className="card-img-top" style={{ width: '100%', height: '15vh', borderRadius: '0.25rem' }} />
                          <h5 className="card-title p-4 text-white">NoticeBoard</h5>
                        </NavLink>
                      </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="card  mb-3" style={{ maxWidth: '18rem', marginLeft: '50px' }}>
                      
                    <div style={{ backgroundColor: "black" }}>

                      <div className="card-body text-center">
                      <NavLink to="/student/result" style={{ textDecoration: 'none' }}>
                      <img src="/image/result.webp" alt="result" className="card-img-top" style={{ width: '100%', height: '15vh', borderRadius: '0.25rem' }} />
                        
                          <h5 className="card-title p-4 text-white">Result</h5>
                        </NavLink>
                      </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td  className='p-3 px-5'>
                    <div className="card  mb-3" style={{ maxWidth: '18rem' }}>
                     
                    <div style={{ backgroundColor: "black" }}>

                      <div className="card-body text-center">
                      <img src="/image/teacher.png" alt="Faculty" className="card-img-top" style={{ width: '100%', height: '15vh', borderRadius: '0.25rem' }} />
                        <NavLink to="/student/faculty" style={{ textDecoration: 'none' }}>
                          <h5 className="card-title p-4 text-white">Faculty</h5>
                        </NavLink>
                      </div>
                    </div>
                    </div>
                  </td>
                  <td>
                    <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem' }}>
                    <div style={{ backgroundColor: "black" }}>
                      <div className="card-body">
                     
                     <img src="/image/assignment.webp" alt="Add Faculty" className="card-img-top" style={{ width: '100%', height: 'auto', borderRadius: '0.25rem' }} /> 
                      
                        <NavLink to="/student/assignment" style={{ textDecoration: 'none' }}>
                          <h5 className="card-title p-4 text-white">Assignment</h5>
                        </NavLink>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
