import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const JoinShop = () => {
  return (
    <>
      <div className="joinShop">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Join With Us</h2>
              <p>Sell your digital product designs and reach millions of buyers or promote let's be a part of us.</p>

              <button className="btn-open-shop" data-bs-toggle="modal" data-bs-target="#signupmodal">
                Join Now <FiArrowRight />
              </button>
            </div>
            <div className="col-md-6">
              <img src="/images/join.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinShop;
