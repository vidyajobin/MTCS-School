import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  return (
    <div>
      <header style={{ paddingLeft: 0 }}>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('/images/mtcs-kids-bg.jpg')",
            height: 300,
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">{props.pagename}</h1>
                <Breadcrumb style={{ marginLeft: "18px" }}>
                  <Breadcrumb.Item href="#"><Link to="/" style={{ color: "white" }}>Home</Link></Breadcrumb.Item>
                  <Breadcrumb.Item active>{props.pagename}</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default BreadCrumb;
