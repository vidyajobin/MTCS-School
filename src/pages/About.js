import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';

const About = ({ show = true }) => {
  return (
    <>
      {show && <BreadCrumb pagename={'About Us'} />}
      <section className="ftco-section ftco-no-pt ftc-no-pb">
        <Container>
          <Row style={{ marginLeft: '40px', marginRight: '40px', fontSize: '1rem' }}>
            <Col
              md={5}
              className="order-md-last wrap-about py-5 wrap-about bg-light px-1"
            >
              <div className="text px-4 ftco-animate">
                <h2 className="mb-4 font-bold">
                  Welcome to Mount Thabore Central School
                </h2>
                <p>
                  Mount Thabore Central School (MTCS), established in 2003, is
                  affiliated with CBSE and managed by the St. George Thabor
                  Jacobite Syrian Christian Charitable Society.
                </p>
                <p>
                  Located in Angamaly, Kerala, MTCS offers holistic education
                  through academics, sports, and extracurricular activities. The
                  school features modern classrooms, labs, libraries, and sports
                  facilities, promoting interactive learning, creativity, and
                  critical thinking. Our faculty ensure quality education and
                  fosters values like discipline and social responsibility.
                </p>
              </div>
            </Col>
            <Col md={7} className="wrap-about py-5 p-5 pr-md-4 ftco-animate">
              <h2 className="mb-4">What We Offer</h2>
              <p>
                We provide quality education with modern facilities and a
                curriculum that nurtures critical thinking, creativity, and
                teamwork. Our focus on character building equips students for
                academic and personal success.
              </p>
              <Row className="mt-5">
                <Col lg={6}>
                  <div className="services-2 d-flex">
                    <div className="icon-container-about">
                      <i className="fas fa-shield-alt" style={{ fontSize: '2rem', color: '#41A1F0' }}></i>
                    </div>
                    <div className="text">
                      <h3>Safety First</h3>
                      <p>
                        We ensure safety with trained personnel, surveillance,
                        clear policies, and hygiene practices for a secure
                        environment.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="services-2 d-flex">
                    <div className="icon-container-about">
                      <i className="fas fa-book-reader" style={{ fontSize: '2rem', color: '#41A1F0' }}></i>
                    </div>
                    <div className="text">
                      <h3>Regular Classes</h3>
                      <p>
                        Regular classes foster structured learning and critical
                        thinking with guidance from experienced teachers.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="services-2 d-flex">
                    <div className="icon-container-about">
                      <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2rem', color: '#41A1F0' }}></i>
                    </div>
                    <div className="text">
                      <h3>Certified Teachers</h3>
                      <p>
                        Our certified teachers ensure quality education with
                        personalized support for every student's growth.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="services-2 d-flex">
                    <div className="icon-container-about">
                      <i className="fas fa-school" style={{ fontSize: '2rem', color: '#41A1F0' }}></i>
                    </div>
                    <div className="text">
                      <h3>Sufficient Classrooms</h3>
                      <p>
                        Spacious classrooms provide a conducive and comfortable
                        learning environment.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="services-2 d-flex">
                    <div className="icon-container-about">
                      <i className="fas fa-paint-brush" style={{ fontSize: '2rem', color: '#41A1F0' }}></i>
                    </div>
                    <div className="text">
                      <h3>Creative Lessons</h3>
                      <p>
                        Creative lessons make learning engaging through hands-on
                        activities and projects.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="services-2 d-flex">
                    <div className="icon-container-about">
                      <i className="fas fa-basketball-ball" style={{ fontSize: '2rem', color: '#41A1F0' }}></i>
                    </div>
                    <div className="text">
                      <h3>Sports Facilities</h3>
                      <p>
                        Extensive sports facilities promote fitness, teamwork,
                        and active participation.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {show && <Footer />}
    </>
  );
};

export default About;
