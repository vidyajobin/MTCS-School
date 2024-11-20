import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Teachers from '../pages/Teachers';
// import Academics from '../pages/Academics';
// import SchoolFees from '../pages/SchoolFees';
// import Blog from '../pages/Blog';
// import Contact from '../pages/Contact';

const HeaderNavbar = () => {
  return (
    <>
      <header className="header">
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

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand
            href="#home"
            className="custom-navbar-brand"
            style={{ color: "#616161", fontSize: "2rem" }}
          >
            MTCS
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/teachers">
              Teachers
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
            >
              MPD
            </Nav.Link>

            <Nav.Link as={Link} to="/contactus">
              Contact Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/teachers' element={<Teachers />}></Route>
        <Route path='/academics' element={<Academics />}></Route>
        <Route path='/schoolfees' element={<SchoolFees />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contactus' element={<Contact />}></Route>
      </Routes> */}
    </>
  );
};

export default HeaderNavbar;
