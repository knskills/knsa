import React from "react";

const TrainersPanel = (props) => {
  return (
    <>
      <div className="panels-container">
        <div className="panels-cont-flex">This is the Trainers Panel</div>
        <div className="check">{props.item.usersName}</div>
      </div>
    </>
  );
};

export default TrainersPanel;
