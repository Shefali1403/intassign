import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Blogcard(props) {
  return (
    <div className={props.className}>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>{props.text}</MDBCardText>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
