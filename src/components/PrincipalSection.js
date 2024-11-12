import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const PrincipalSection = () => {
  return (
    <Container className="principal-section px-5 m-5">
      <Row className="align-items-center">
        <Col md={5} className="text-center">
          <Image
            src="./Image/management/principal-nobg.png"
            alt="Principal"
            fluid
            rounded
            style={{
                width: '490px',
                height: '300px',
                objectFit: 'cover',
                objectPosition: '50% 25%'
              }}
          />
          <div className="principal-info mt-3">
            <h5 className="principal-name">Athira J</h5>
            <p className="principal-designation">Principal</p>
          </div>
        </Col>
        <Col md={7} className="principal-message">
          <h2>Message from the Principal</h2>
          <p>
            Dear students, parents, and staff,
            <br />
            Welcome to our school! Our mission is to foster a supportive and
            inspiring environment for all our students, encouraging them to
            achieve their highest potential. Together, let's build a future
            filled with learning, creativity, and success.
            <br />
            <br />
            Sincerely,
            <br />
            <strong>Principal</strong>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrincipalSection;