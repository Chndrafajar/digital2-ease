import { Produk, detailPages } from '../data';
import React, { useRef, useState } from 'react';

import { BiDollar, BiLogoPaypal, BiSolidCloudDownload, BiSolidStar } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { PiShareFatLight } from 'react-icons/pi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import { NavLink, useParams } from 'react-router-dom';
import { FaCartArrowDown, FaEye, FaHeart } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import MessageModal from '../components/MessageModal';
import FormReview from '../components/FormReview';

const DetailPages = () => {
  const { id } = useParams();
  const product = Produk.produk.find((p) => p.id === Number(id));

  return (
    <>
      <div className="detailPages">
        <div className="container">
          <div className="row">
            <div className="categoriesProduct">
              <h3>{product?.categories}</h3>
              <div className="itemsIcons">
                <div className="iconsShare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <PiShareFatLight />
                </div>
                <div className="iconsImg">
                  <img src="/icons/heart.svg" alt="" className="profil" />
                </div>
                <div className="iconsImgBook">
                  <img src="/icons/archive.svg" alt="" className="profil" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="card">
                <div className="items">
                  <img src={product.img} alt="" />
                  <div className="iconsShare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <PiShareFatLight />
                  </div>
                  <div className="iconsImg">
                    <img src="/icons/heart.svg" alt="" className="profil" />
                  </div>
                  <div className="iconsImgBook">
                    <img src="/icons/archive.svg" alt="" className="profil" />
                  </div>
                </div>
              </div>
              <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  430: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                  },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="/produk/produk1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/produk/produk1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/produk/produk1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/produk/produk1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/produk/produk1.png" alt="" />
                </SwiperSlide>
              </Swiper>
              <p>{detailPages.detail.desc}</p>
              <span>
                Show More <img src="/icons/arrow-bottom.svg" alt="" />
              </span>
              <div className="preview">
                <h5>Preview</h5>
                <span>
                  <BiSolidCloudDownload /> Download Demo
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card p-4">
                <div className="price">
                  <h5>Price</h5>
                  <h4>
                    <BiDollar />
                    {product.commercial}
                  </h4>
                </div>
                <h1>{product.name}</h1>
                <span>Choose License</span>
                <select name="" id="">
                  <option value="">Commercial ${product.commercial}</option>
                  <option value="">Personal ${product.personal}</option>
                </select>

                <button className="add">Add To Cart</button>
                <button className="buy">
                  Buy Now <BiLogoPaypal />
                </button>
                <div className="reviewDetail">
                  <span>Reviews</span>
                  <div className="items">
                    {!isNaN(product.totalStars / product.starNumber) && (
                      <>
                        <div className="stars">
                          {Array(Math.round(product.totalStars / product.starNumber))
                            .fill()
                            .map((item, i) => (
                              <BiSolidStar />
                            ))}

                          <span> </span>
                        </div>
                        <div className="title">
                          <span>{Math.round(product.totalStars / product.starNumber)} Reviews</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="categories">
                  <h5>Categories</h5>
                  <h6>
                    {product.categories} / {product.subCategories}
                  </h6>
                </div>
                <div className="info">
                  <h5>Info</h5>
                  <div className="icons-item">
                    <div className="icons-info">
                      <FaEye /> 12
                    </div>
                    <div className="icons-info">
                      <FaHeart /> 2
                    </div>
                    <div className="icons-info">
                      <FaMessage /> 3
                    </div>
                  </div>
                </div>
              </div>
              <h5>Shop Owner </h5>
              <div className="card link userCard ">
                <img src={detailPages.user.imgToko} alt="" />
                <h6>{detailPages.user.nameToko}</h6>
                <p>{detailPages.user.descToko}</p>
                <div style={{ display: 'flex', gap: '30px' }}>
                  <button className="fol">
                    <AiOutlinePlus /> Follow
                  </button>
                  <button className="mes" data-bs-toggle="modal" data-bs-target="#messageModal">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <h3>
              Stay With <span>{detailPages?.user?.nameToko}</span>
            </h3>
            {detailPages?.produkToko.map((p) => (
              <div className="col-sm-6 col-xl-3 col-lg-4 col-12" key={p.id}>
                <div className="card">
                  <div className="itemsProfil">
                    <img src={p.img} alt="" />
                    <img src={p.imgToko} alt="" className="profil" />
                    <div className="harga">
                      <h5>${p.price}</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="name">
                      <h5> {p.name.substring(0, 26)}...</h5>
                    </div>
                    <NavLink to="/toko/123" className="by link">
                      by <b>{p.nameToko}</b> in <b>{p.categories}</b>
                    </NavLink>
                    <div className="info">
                      <div className="infoItems">
                        <div className="infoSales">
                          <div className="items">
                            {!isNaN(p.totalStars / p.starNumber) && (
                              <>
                                <div className="stars">
                                  {Array(Math.round(p.totalStars / p.starNumber))
                                    .fill()
                                    .map((item, i) => (
                                      <BiSolidStar />
                                    ))}
                                </div>

                                <h6>({Math.round(p.totalStars / p.starNumber)})</h6>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="sales">
                          <span>{p.sales} sales</span>
                        </div>
                      </div>
                      <div className="btnDemo">
                        <NavLink to="/detail/123" className="link">
                          <button>
                            <FaCartArrowDown />
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="row">
            <h3 style={{ marginBottom: '0px' }}>{detailPages.detail.starNumber} Review</h3>
            <div className="col-lg-8">
              {detailPages.reviews.map((r) => (
                <div className="reveiw-item">
                  <div className="info">
                    <img src={r.imgUser} alt="" />
                    <div className="name">
                      <span>{r.nameUser}</span>

                      <div className="star">
                        {Array(Math.round(r.totalStars))
                          .fill()
                          .map((item, i) => (
                            <BiSolidStar />
                          ))}
                      </div>
                    </div>
                  </div>
                  <p>{r.comment}</p>
                </div>
              ))}
            </div>
            <hr className="garis-produk" />
            <div className="col-lg-4 ">
              <div className="detail-product">
                {Produk?.produk.slice(0, 4).map((p) => (
                  <div className="card-detail-product" key={p.id}>
                    <NavLink to={`/detail/${p.slug}`} className="link">
                      <div className="card">
                        <div className="itemsProfil">
                          <img src={p.img} alt="" />
                          <img src={p.imgToko} alt="" className="profil" />
                          <div className="harga">
                            <h5>${p.price}</h5>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="name">
                            <h5> {p.name.substring(0, 26)}...</h5>
                          </div>
                          <NavLink to="/toko/123" className="by link">
                            by <b>{p.nameToko}</b> in <b>{p.categories}</b>
                          </NavLink>
                          <div className="info">
                            <div className="infoItems">
                              <div className="infoSales">
                                <div className="items">
                                  {!isNaN(p.totalStars / p.starNumber) && (
                                    <>
                                      <div className="stars">
                                        {Array(Math.round(p.totalStars / p.starNumber))
                                          .fill()
                                          .map((item, i) => (
                                            <BiSolidStar />
                                          ))}
                                      </div>

                                      <h6>({Math.round(p.totalStars / p.starNumber)})</h6>
                                    </>
                                  )}
                                </div>
                              </div>
                              <div className="sales">
                                <span>{p.sales} sales</span>
                              </div>
                            </div>
                            <div className="btnDemo">
                              <NavLink to="/detail/123" className="link">
                                <button>
                                  <FaCartArrowDown />
                                </button>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr />
          <FormReview />
        </div>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <h4>Share</h4>
                <ul>
                  <li>
                    <img src="/icons/pinterest.svg" alt="" /> <span>Pinterest</span>
                  </li>
                  <li>
                    <img src="/icons/facebook.svg" alt="" /> <span>Facebook</span>
                  </li>
                  <li>
                    <img src="/icons/twitter.svg" alt="" /> <span>Twitter</span>
                  </li>
                  <li>
                    <img src="/icons/link-solid.svg" alt="" /> <span>Link</span>
                  </li>
                  <li>
                    <img src="/icons/whatsapp.svg" alt="" /> <span>Whatsapp</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MessageModal />
    </>
  );
};

export default DetailPages;
