import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);

  return (
    <>
      <div className="navbar-cont">
        <MDBNavbar expand="lg" light bgColor="light">
          <MDBContainer fluid>
            <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar open={openNavNoTogglerSecond}>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page" href="#">
                    <NavLink to="/">Home</NavLink>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <NavLink to="/about">About</NavLink>
                </MDBNavbarLink>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page" href="#">
                    <NavLink to="/blog">Blog</NavLink>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page" href="#">
                    <NavLink to="/contact">Contact</NavLink>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
              <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
                <input
                  className="form-control"
                  placeholder="Type query"
                  aria-label="Search"
                  type="Search"
                />
                <MDBBtn outline>Search</MDBBtn>
              </MDBInputGroup>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>
    </>
  );
}
