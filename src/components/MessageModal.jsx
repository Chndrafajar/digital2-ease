import React from 'react';
import { IoIosSend } from 'react-icons/io';

export default function MessageModal() {
  return (
    <>
      <div className="modal fade" id="messageModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Send Message
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body" style={{ margin: '0px' }}>
              <div className="modal-message">
                <div className="mb-3" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src="/produk/profil.jpg" alt="" style={{ width: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                  <h6 style={{ fontSize: '17px', fontWeight: '600', margin: '0px' }}>Nestype</h6>
                </div>
                <form action="">
                  <div className="inputStyle" style={{ gap: '10px' }}>
                    <label htmlFor="subject">Subject</label>
                    <input type="email" className="formInput" id="subject" placeholder="Bison - A Powerful Sans Serif" />
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="write a message..." className="formInput" id="message" rows={3} defaultValue={''} />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" style={{ background: '#0f486c', color: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span>Send</span> <IoIosSend style={{ fontSize: '20px' }} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
