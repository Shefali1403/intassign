import React from "react";
const Clientcard = (props) => {
  return (
    <>
      <div className="client-cont">
        <div className="client-image">
          <img src={props.img} alt="not found" />
        </div>
        <div className="client-write">
          <p>🍃{props.text}🍃</p>
          <p>
            <b>{props.name}</b>
          </p>
        </div>
      </div>
    </>
  );
};
export default Clientcard;
