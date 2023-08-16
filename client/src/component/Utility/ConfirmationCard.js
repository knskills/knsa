import React from "react";

const ConfirmationCard = () => {
  return (
    <>
      <div className="confirm-flex">
        <div className="confirm-card">
          <div className="confirm-head">
            <b>Sure!</b> <p>do you want to delete?"</p>
          </div>
          <div className="confirm-btn">
            <button onClick={handleDelete}>Yes</button>
            <button onClick={closeCard}>No</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationCard;
