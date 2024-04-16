import React from 'react';
import { IoMdClose } from 'react-icons/io';

export default function CartPages() {
  return (
    <div className="cart-pages">
      <div className="container">
        <div className="row">
          <h4>My Cart (2)</h4>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-6">
            <div className="cart-item">
              <div>
                <img src="/produk/produk1.png" alt="" />
              </div>
              <div className="desc-produk">
                <h6>Bison - A Powerful Sans Serif</h6>
                <p className="by">
                  by <b>Ellen luf</b>
                </p>
                <div className="price">
                  <span>Price:</span>
                  <h6>$20</h6>
                </div>
                <div className="price">
                  <span>Total:</span>
                  <h6>$20</h6>
                </div>
                <button className="btn-remove">
                  <IoMdClose /> <span>Remove</span>
                </button>
              </div>
            </div>
            <div className="cart-item">
              <div>
                <img src="/produk/produk2.jpg" alt="" />
              </div>
              <div className="desc-produk">
                <h6>Bison - A Powerful Sans Serif</h6>
                <p className="by">
                  by <b>Ellen luf</b>
                </p>
                <div className="price">
                  <span>Price:</span>
                  <h6>$20</h6>
                </div>
                <div className="price">
                  <span>Total:</span>
                  <h6>$20</h6>
                </div>
                <button className="btn-remove">
                  <IoMdClose /> <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item-card-total">
              <div className="card">
                <div className="item-total">
                  <span>Subtotal</span>
                  <h6>$20</h6>
                </div>
                <hr />
                <div className="item-total mb-3">
                  <span>Total</span>
                  <h6>$20</h6>
                </div>
                <button className="btn" style={{ background: '#0f486c', color: '#fff' }}>
                  Continue
                </button>
                <div className="footer-cart">
                  <div className="icons-payment">
                    <div className="icons-pay-item">
                      <img src="/logo/paypal.png" alt="" />
                    </div>
                    <div className="icons-pay-item">
                      <img src="/logo/visa.png" alt="" />
                    </div>
                    <div className="icons-pay-item">
                      <img src="/logo/master-card-icon.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
