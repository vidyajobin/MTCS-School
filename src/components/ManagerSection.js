import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const PrincipalSection = () => {
  return (
    <>
    <div className="d-flex justify-content-center ">
    <Container className="principal-section px-5 m-2 rounded-md mb-7" style={{backgroundColor: '#F5F5F5'}}>
      <Row className="align-items-center">
        <Col md={5} className="text-center">
          <Image
            src="./image/management/manager.jpg"
            alt="Principal"
            fluid
            rounded
            style={{
                width: '490px',
                height: '300px',
                objectFit: 'cover',
                objectPosition: '50% 22%',
                marginTop:'20px'
              }}
          />
          <div className="principal-info mt-3">
            <h5 className="principal-name">Jibi Yohannan</h5>
            <p className="principal-designation">Manager</p>
          </div>
        </Col>
        <Col md={7} className="principal-message " >
        {/* <i class="fa-solid fa-thumbtack" style={{ fontSize: '2rem', color: '#41A1F0', marginBottom:"10px" }}></i> */}
          <h2 style={{color: "#ffa500"}}>Our Mission</h2>
          <p>
            
            <br />
            Our mission is to foster a supportive and
            inspiring environment for all our students, encouraging them to
            achieve their highest potential. Together, let's build a future
            filled with learning, creativity, and success.
            <br />
            <br />
            Sincerely,
            <br />
            <strong>Manager</strong>
          </p>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
};

export default PrincipalSection;