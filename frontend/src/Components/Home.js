import React from 'react';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Feature from './Feature';
import carosel from "../imges/carosel.png"
const CarouselContainer = () => {
  return (
        <>
    <div>
      <NavBar />
      
      <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
        <img src={carosel}
          alt="School Management"
          style={{ width: '100vw' }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
          borderRadius: '5px'
        }}>
          <h2>VidyaSetu </h2>
          <p>Streamline your portal operations with ease.</p>
        </div>
      </div>
    </div>
    {/* <Feature/> */}
    </>
  );
}

export default CarouselContainer;
