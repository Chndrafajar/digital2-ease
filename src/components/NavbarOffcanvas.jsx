import React from 'react';
import { categories } from '../data';
import { BiSearch } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const NavbarOffcanvas = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    // Pindahkan halaman ke path yang ditentukan
    navigate(path);
  };

  const handleClose = () => {
    // Tutup offcanvas setelah pindah halaman
    const offcanvas = document.getElementById('offcanvasExample');
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
  };

  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
          <img src="/logo/logo-nav.png" alt="" width="80px" />
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        {/* accordian menu */}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Fonts
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ul className="accordion-sub-menu">
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Serif
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Sans Serif
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Poppins
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Monsterrat
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Script
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Code
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ul className="accordion-sub-menu">
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      HTML5
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Boostrap
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      PHP
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Javascript
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Node Js
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Desain
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ul className="accordion-sub-menu">
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Figma
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Adobe Photoshop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Corel Draw
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Adobe Illustrator
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Lainnya
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ul className="accordion-sub-menu">
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Photo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Video
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Corel Draw
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/c/oke"
                      onClick={() => {
                        handleClick('/c/oke');
                        handleClose();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="link"
                    >
                      Adobe Illustrator
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* accordian menu */}

        <div className="searchMenu">
          <div className="searchInput">
            <select name="" id="" className="select-category">
              <option value="">All Category</option>
              <option value="">Fonts</option>
              <option value="">HTML5</option>
              <option value="">Wordpress</option>
            </select>
            <input type="text" placeholder="search milions fonts" />
            <BiSearch />
          </div>
          <div className="menuNav">
            <div className="menuItems">
              <button className="signup" data-bs-toggle="modal" data-bs-target="#signupmodal">
                Start Open a Shop
              </button>
            </div>
            <NavLink to="/cart" className="link">
              <FaCartArrowDown />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarOffcanvas;
