import React from 'react';
import NavBar from "./NavBar"
function About() {

  return (
    <div>
      <NavBar></NavBar>
      <div className='text-white'>
        <center>

          <br></br>
          <br></br>

          <div className="card w-75" style={{ marginTop: "-20px" }}>
            <div className="card-body">

              {/* Title Section */}
              <h3 className="card-title" style={{
                fontSize: '2.5rem', //changes added style in class h3 previously it was h5
                fontWeight: 'bold',
                color: '#FFFFFF',
                backgroundColor: '#C4D9FF',
                padding: '10px',
                borderRadius: '5px',
                textAlign: 'center',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                margin: '20px 0'
              }}>VidyaSetu</h3>
              
              {/* Description Section */}
              <p className="card-text text-black fs-4">
                VidyaSetu is designed to facilitate seamless communication between students and teachers. Our platform offers a user-friendly interface and robust features to enhance the educational experience.
              </p>
              <p className="card-text text-black fs-4">&nbsp; &nbsp;
                It is a web-based platform that connects students and teachers, streamlining academic interactions. It is built with Java Spring Boot, React js and MySQL.
                <br></br>
                <b>Student Module</b>: Registration, login, and personal data retrieval.
                <br></br>
                <b>Teacher Module</b>: Login and batch-wise student data access.
                <br></br>
                <b>Admin Module</b>: Manage teachers and system settings.
                <br></br>
                With role-based access, teachers can view only their assigned batch details, while students can securely access their own records. VidyaSetu enhances communication and data accessibility in an organized manner.
              </p>

            </div>
          </div>

          {/* Technology Used Section */}
          <div className="card w-75" style={{ marginTop: "5px", marginBottom: "10px" }}>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text text-black fs-4 fw-bolder">
                <p><span style={{ fontFamily: "unset" }} >&nbsp;&nbsp; <span className='fs-3'>Technology Used</span></span></p>
                &nbsp; &nbsp; &nbsp;&nbsp;<span >Backend</span> - <span className='fw-semibold'>Spring Boot </span><br></br>
                &nbsp;<span>Frontend</span> <span className='fw-semibold'>-  React JS</span><br></br>
                <span >Database</span> <span className='fw-semibold'> -  MySQL</span>
              </p>
            </div>
          </div>

        </center>
      </div>
    </div>
  );
}
export default About;