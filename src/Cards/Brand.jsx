import React from "react";
const Brand = (props) => {
  return (
    <>
      <div className={props.className}>
        <img src={props.img} alt="" />
      </div>
    </>
  );
};
export default Brand;
