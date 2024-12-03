import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import LatestNews from "./LatestNews";

const HeaderNavbar = () => {
  return (
    <>
      <header className="header header1">
        <div className="header-section">
          <h1>Mount Thabore Central School</h1>
          <p>
            <span className="icon-container">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            Puliyanam P.O, Angamaly, Ernakulam, Kerala-683572
          </p>
        </div>
        <div className="header-section">
          <p>
            <i className="fas fa-paper-plane"></i>Email: mountthabore@yahoo.com
          </p>
        </div>
        <div className="header-section">
          <p>
            <i className="fas fa-phone-volume"></i>Phone: +91 484-2982464
          </p>
        </div>
      </header>

      <LatestNews/>

      {/* Responsive Navbar */}
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="custom-navbar-brand"
            style={{ color: "#616161", fontSize: "2rem" }}
          >
            <img
              src='images/mtcs-logo-c.jpg'
              alt="MTCS Logo"
              style={{ width: "70px", height: "50px", marginRight: "10px" }} // Adjust size and margin as needed
            />
            MTCS
          </Navbar.Brand>
          {/* Navbar Toggle for Mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <CiMenuBurger size={30} /> {/* Adjust the size as needed */}
          </Navbar.Toggle>
          {/* Collapsible Navbar Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/teachers">
                Our Team
              </Nav.Link>
              <Nav.Link as={Link} to="/academics">
                Academics
              </Nav.Link>
              <Nav.Link as={Link} to="/schoolfees">
                School Fees
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/cbse">
                CBSE
              </Nav.Link>
              <Nav.Link
                href="CBSE/MPD-edit2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(0 0 0 / 55%)" }}
              >
                MPD
              </Nav.Link>
              <Nav.Link as={Link} to="/contactus">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNavbar;
