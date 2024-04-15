import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

//swiper css
import '../../assets/swiperBanner.css';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function BannerProduct() {
  return (
    <>
      <div className="banner-product">
        <div className="container">
          <div className="row">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>
                <div className="carousel-item">
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
                </div>
                <div className="carousel-item">
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
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
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
