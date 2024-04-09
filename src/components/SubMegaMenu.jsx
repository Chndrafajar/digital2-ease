import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

export default function SubMegaMenu({ showSubMenu, handleMouseEnter, handleMouseLeave }) {
  return (
    <nav className={showSubMenu ? 'link-sub active' : 'link-sub'}>
      <div className="container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="row">
          <div className="btn-link-close">
            <IoMdClose />
          </div>
          <div className="col-lg-3">
            <ul className="link-sub-left">
              <li className="active">
                <span>Embroidery Designs</span>
                <FaChevronRight />
              </li>
              <li>
                <span>Knitting Patterns</span>
                <FaChevronRight />
              </li>
              <li>
                <span>More Needlework Patterns</span>
                <FaChevronRight />
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <div className="link-sub-left-item">
              <div className="title-link-sub-left-item">
                <h6>Embroidery Designs</h6>
                <GoArrowUpRight />
              </div>
              <hr />
              <ul className="link-sub-item">
                <li className="active">
                  <span>Animals</span>
                  <FaChevronRight />
                </li>
                <li>
                  <span>Aroun The World</span>
                  <FaChevronRight />
                </li>
                <li>
                  <span>Awareness & Inspiration</span>
                  <FaChevronRight />
                </li>
                <li>
                  <span>Babies & Kids</span>
                  <FaChevronRight />
                </li>
                <li>
                  <span>Family & Friends</span>
                  <FaChevronRight />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <h6>Animals</h6>
            <div className="link-sub-right">
              <ul className="link-sub-item-right">
                <li>
                  <span>Animals</span>
                </li>
                <li>
                  <span>Animals Quotes</span>
                </li>
                <li>
                  <span>Baby Animals</span>
                </li>
                <li>
                  <span>Birds</span>
                </li>
                <li>
                  <span>Bugs & Insects</span>
                </li>
                <li>
                  <span>Cats</span>
                </li>
              </ul>
              <ul className="link-sub-item-right">
                <li>
                  <span>Dinosaurus</span>
                </li>
                <li>
                  <span>Dogs</span>
                </li>
                <li>
                  <span>Farm Animals</span>
                </li>
                <li>
                  <span>Fish & Shells</span>
                </li>
                <li>
                  <span>Horses</span>
                </li>
                <li>
                  <span>Marine Mammals</span>
                </li>
              </ul>
              <ul className="link-sub-item-right">
                <li>
                  <span>Reptiles</span>
                </li>
                <li>
                  <span>Wild Animals</span>
                </li>
                <li>
                  <span>Woodland Animals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
