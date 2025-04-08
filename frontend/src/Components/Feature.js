import React from 'react';
import './Feature.css';

function Feature() {
    return (
        <div className="container mb-5 mt-5">
          <div className="box teal">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <div className="title">Student Details Management</div>
            <div className="description">Streamline student data organization, tracking, and management for educational institutions with a comprehensive student details management system..</div>
          </div>
          
          <div className="box blue">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.9 13.41l-1.41 1.41L10 14.83l-2.83 2.83-1.41-1.41L8.17 16l2.83-2.83L12.9 13.41z"/></svg>
            </div>
            <div className="title">Login Management</div>
            <div className="description">Simplify and secure access to digital platforms with robust login management solutions, ensuring seamless authentication and user experience.</div>
          </div>
          <div className="box orange">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm4 4h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm4 4h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2z"/></svg>
            </div>
            <div className="title">Notice Board Management</div>
            <div className="description text-justify">Efficiently organize, communicate, and manage information through a centralized digital notice board system.</div>
          </div>
          
          <div className="box green">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6V4h8v12z"/></svg>
            </div>
            <div className="title">Assignment Management</div>
            <div className="description">Streamline assignment creation, result recording, and grading processes with an integrated assignment management system, fostering efficiency and accuracy in academic evaluation..</div>
          </div>
        </div>
  );
}

export default Feature;