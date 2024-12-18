import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const PrincipalSection = () => {
  return (
    <>
    <div className="d-flex justify-content-center  ">
    <Container className="principal-section px-5 m-2 rounded-md mb-7" style={{backgroundColor: '#F5F5F5'}}>
      <Row className="align-items-center">
        <Col md={5} className="text-center">
          <Image
            src="./image/management/principal.jpg"
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
            <h5 className="principal-name">Athira J</h5>
            <p className="principal-designation">Principal</p>
          </div>
        </Col>
        <Col md={7} className="principal-message " >
        {/* <i class="fa-solid fa-thumbtack" style={{ fontSize: '2rem', color: '#41A1F0', marginBottom:"10px" }}></i> */}
          <h2 style={{color: "#1eaaf1"}}>Message from the Principal</h2>
          <p>
            Dear students, parents, and visitors,
            <br />
            Welcome to MTCS Public School! We are dedicated to fostering a love for learning and helping each child achieve their fullest potential. Thank you for being a part of our vibrant school community.
            <br />
            <br />
            Sincerely,
            <br />
            <strong>Principal</strong>
          </p>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
};

export default PrincipalSection;