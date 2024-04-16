import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function BannerProduct() {
  return (
    <>
      <div className="banner-product">
        <div className="container">
          <div className="row">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="items">
                        <div className="desc">
                          <span>Up To 75% Off!</span>
                          <h1>Unbeatable Discounts</h1>
                          <NavLink to="/c/oke">
                            Shop Now <FaArrowRightLong />
                          </NavLink>
                        </div>
                        <img src="/images/Group.png" alt="" />
                      </div>
                    </div>
                  </div>
                  {/* <img src="..." className="d-block w-100" alt="..." /> */}
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="items">
                        <div className="desc">
                          <span>Up To 75% Off!</span>
                          <h1>Unbeatable Discounts</h1>
                          <NavLink to="/c/oke">
                            Shop Now <FaArrowRightLong />
                          </NavLink>
                        </div>
                        <img src="/images/Group.png" alt="" />
                      </div>
                    </div>
                  </div>
                  {/* <img src="..." className="d-block w-100" alt="..." /> */}
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="items">
                        <div className="desc">
                          <span>Up To 75% Off!</span>
                          <h1>Unbeatable Discounts</h1>
                          <NavLink to="/c/oke">
                            Shop Now <FaArrowRightLong />
                          </NavLink>
                        </div>
                        <img src="/images/Group.png" alt="" />
                      </div>
                    </div>
                  </div>
                  {/* <img src="..." className="d-block w-100" alt="..." /> */}
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
