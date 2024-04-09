import React from 'react';
import { categories } from '../data';
import { BiSearch } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NavbarOffcanvas = ({ handleMouseEnter, handleMouseLeave }) => {
  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
          <img src="/logo/logo-nav.png" alt="" width="80px" />
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="list-group mb-2">
          <li key={categories[0]?.id} className="list-group-item" data-bs-dismiss="offcanvas" aria-label="Close">
            <NavLink className="link sans" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {categories[0]?.name}
            </NavLink>
          </li>
          <li key={categories[1]?.id} className="list-group-item" data-bs-dismiss="offcanvas" aria-label="Close">
            <NavLink className="link serif" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {categories[1]?.name}
            </NavLink>
          </li>
          <li key={categories[2]?.id} className="list-group-item" data-bs-dismiss="offcanvas" aria-label="Close">
            <NavLink className="link slab" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {categories[2]?.name}
            </NavLink>
          </li>
          <li key={categories[3]?.id} className="list-group-item" data-bs-dismiss="offcanvas" aria-label="Close">
            <NavLink className="link display" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {categories[3]?.name}
            </NavLink>
          </li>
          <li key={categories[4]?.id} className="list-group-item" data-bs-dismiss="offcanvas" aria-label="Close">
            <NavLink className="link script" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {categories[4]?.name}
            </NavLink>
          </li>
          <li key={categories[5]?.id} className="list-group-item" data-bs-dismiss="offcanvas" aria-label="Close">
            <NavLink className="link mono" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {categories[5]?.name}
            </NavLink>
          </li>
        </ul>

        <div className="searchMenu">
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
    </div>
  );
};

export default NavbarOffcanvas;
