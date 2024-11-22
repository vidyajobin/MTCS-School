import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
 // Make sure to include this

const ServiceSection = () => {
  return (
    <section className="ftco-services ftco-no-pb">
      <Container fluid className="container-wrap">
        <Row className="no-gutters">
          <Col md={3} className="d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-primary position-relative">
            <div className="icon-wrapper">
              <span className="fa fa-chalkboard-teacher icon"></span> {/* Font Awesome teacher icon */}
            </div>
            <div className="media block-6 d-block text-center">
              <div className="media-body p-2 mt-5">
                <h3 className="heading">Certified Teachers</h3>
                <p>
                  Certified teachers at Mount Thabore Central School are qualified professionals who have undergone rigorous training and have obtained relevant teaching credentials from accredited institutions. They bring expertise and dedication to their roles, ensuring high-quality education and personalized support for students' academic and personal development.
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} className="d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-tertiary position-relative">
            <div className="icon-wrapper">
              <span className="fa fa-book-open icon"></span> {/* Font Awesome book-open icon */}
            </div>
            <div className="media block-6 d-block text-center">
              <div className="media-body p-2 mt-5">
                <h3 className="heading">Special Education</h3>
                <p>
                  At Mount Thabore Central School, special education is provided by a dedicated team of teachers who offer personalized support tailored to each student's needs. Through individualized education plans and assistive technologies, we ensure that every student receives the necessary resources to succeed and thrive in an inclusive learning environment.
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} className="d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-fifth position-relative">
            <div className="icon-wrapper">
              <span className="fa fa-book icon"></span> {/* Font Awesome book icon */}
            </div>
            <div className="media block-6 d-block text-center">
              <div className="media-body p-2 mt-5">
                <h3 className="heading">Book & Library</h3>
                <p>
                  The school library is accessible for all the students of the school. The library is housed in a spacious room with an adequate number of books. There are sections devoted to textbooks, reference books, and other books based on all areas that promote self-study and learning by doing.
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} className="d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-quarternary position-relative">
            <div className="icon-wrapper">
              <span className="fa fa-award icon"></span> {/* Font Awesome award icon */}
            </div>
            <div className="media block-6 d-block text-center">
              <div className="media-body p-2 mt-5">
                <h3 className="heading">Certification</h3>
                <p>
                  Affiliated to the Central Board of Secondary Education (CBSE).
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;