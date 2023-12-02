import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
const Contactpage = () => {
  return (
    <>
      <div className="contact-cont">
        <div className="form-cont">
          Name:
          <input type="text" />
          Email:
          <input type="email" />
          Subject:
          <input type="text" />
          Message:
          <input type="text" />
          <div className="cont-but">
            <MDBBtn>Submit</MDBBtn>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contactpage;
