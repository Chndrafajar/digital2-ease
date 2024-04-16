import React from 'react';

export default function FormReview() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h3>Add Comment Reveiw </h3>
        <form action="">
          <div className="inputStyle" style={{ gap: '10px' }}>
            <textarea placeholder="write a comment..." className="formInput" id="message" rows={8} defaultValue={''} />
          </div>
          <button type="button" className="btn" style={{ background: '#0f486c', color: '#fff', width: '120px' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
