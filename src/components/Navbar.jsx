import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { BiSearch } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';
import { HiMiniBars3 } from 'react-icons/hi2';

import SignUpModal from './auth/SignUpModal';
import LoginModal from './auth/LoginModal';
import NavMobile from './NavMobile';
import NavbarOffcanvas from './NavbarOffcanvas';
import SubMegaMenu from './SubMegaMenu';

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  // Fungsi untuk menyembunyikan submenu saat mouse meninggalkan tautan
  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <>
      <nav className="navbar  navbar-expand-lg ">
        <div className="navbar-items">
          <div className="container">
            <NavLink className="navbar-brand">
              <img src="/logo/logo-nav.png" alt="" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
              <HiMiniBars3 />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="searchInput">
                <input type="text" placeholder="search milions fonts" />
                <BiSearch />
              </div>
              <div className="menuNav">
                <div className="menuItems">
                  <button className="login" data-bs-toggle="modal" data-bs-target="#loginmodal">
                    Login
                  </button>
                  <button className="signup" data-bs-toggle="modal" data-bs-target="#signupmodal">
                    Sign Up
                  </button>
                </div>
                <FaCartArrowDown />
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="container">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink onMouseEnter={handleMouseEnter} className="nav-link sans">
                    Sans
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onMouseEnter={handleMouseEnter} className="nav-link serif">
                    Serif
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onMouseEnter={handleMouseEnter} className="nav-link slab">
                    Slab
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onMouseEnter={handleMouseEnter} className="nav-link display">
                    Display
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onMouseEnter={handleMouseEnter} className="nav-link script">
                    Script
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onMouseEnter={handleMouseEnter} className="nav-link mono">
                    Mono
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink to="/c/oke" className="nav-link variable">
                    {categories[6].name}
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <SubMegaMenu showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
      <NavbarOffcanvas handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
      <NavMobile />
      <SignUpModal />
      <LoginModal />
    </>
  );
};

export default Navbar;
