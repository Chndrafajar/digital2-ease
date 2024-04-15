import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="container">
        <h1 style={{ marginBottom: '0px' }}>UPPSSS!!!!!</h1>
        <h2 className="mb-3" style={{ lineHeight: 'normal' }}>
          Halaman Yang Anda Tujuh Sepertinya Tidak Ada
        </h2>
        <NavLink to="/" className="btn" style={{ background: '#000', color: '#fff' }}>
          Back To Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
