import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function BannerProduct() {
  return (
    <>
      <div className="banner-product">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="items">
                  <div className="desc">
                    <span>Up To 75% Off!</span>
                    <h1>Unbeatable Discounts</h1>
                    <NavLink>
                      Shop Now <FaArrowRightLong />
                    </NavLink>
                  </div>
                  <img src="/images/Group.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
