import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import BreadCrumb from '../components/BreadCrumb'

const About = () => {
  return (
    <>
    <BreadCrumb pagename={'About Us'} />
    <section className="ftco-section ftco-no-pt ftc-no-pb">
        <Container>
          <Row style={{ marginLeft: '40px', marginRight: '40px',fontSize: '1rem' }} >
            <Col
              md={5}
              className="order-md-last wrap-about py-5 wrap-about bg-light px-1"
            >
              <div className="text px-4 ftco-animate">
                <h2 className="mb-4 font-bold">
                  Welcome to Mount Thabore Central School
                </h2>
                <p>
                  Mount Thabore Central School also known as MTCS. The school
                  was established in 2003. It is affiliated with the Central
                  Board of Secondary Education (CBSE) and is managed by St.
                  George Thabor Jacobite Syrian Christian Charitable Society.
                </p>
                <p>
                  Our School is a reputed educational
                  institution located in Angamaly, a town in the Ernakulam
                  district of Kerala, India. Angamaly is known
                  for its cultural heritage and educational institutions. The
                  school is affiliated with the Central Board of Secondary Education (CBSE) and follows a comprehensive curriculum that focuses on holistic education, encompassing academics, sports, extracurricular
                  activities, and character development. The school has modern facilities including well-equipped classrooms,
                  science and computer laboratories, libraries, sports grounds,
                  and other amenities to support the overall development of
                  students. The school emphasizes interactive teaching
                  methodologies, encouraging student participation, critical
                  thinking, and creativity. Mount Thabore Central School offers a variety of extracurricular activities such
                  as sports, cultural events, arts, and literary activities to
                  ensure the holistic development of students. The school has qualified and experienced faculty members who
                  are dedicated to providing quality education and guidance to
                  the students. The school promotes values such as
                  discipline, integrity, compassion, and social responsibility
                  among its students. Overall, Mount Thabore Central School is a prominent educational institution in Angamaly, known
                  for its academic excellence, holistic approach to education,
                  and focus on overall student development.
                </p>
              </div>
            </Col>
            <Col md={7} className="wrap-about py-5  p-5 pr-md-4 ftco-animate" >
              <h2 className="mb-4">What We Offer</h2>
              <p>
                We provide a wide range of opportunities aimed at nurturing
                holistic development in every student. From quality education
                delivered by certified teachers to state-of-the-art facilities
                including spacious classrooms and extensive sports facilities,
                we ensure an enriching learning environment. Our curriculum is
                designed to foster critical thinking, creativity, and practical
                skills, preparing students for success in academics and beyond.
                Moreover, we prioritize character building through instilling
                values such as respect, integrity, and teamwork, shaping
                well-rounded individuals equipped to thrive in an ever-changing
                world.
              </p>
              <Row className="mt-5">
                <Col lg={6}>
                  <div className="services-2 d-flex">
                    <div className="icon-container-about">
                      {/* Icon for "Safety First" */}
                      <i className="fas fa-shield-alt" style={{ fontSize: '2rem', color: '#41A1F0' }}></i>
                    </div>
                    <div className="text">
                      <h3>Safety First</h3>
                      <p>
                        Mount Thabore Central School can ensure safety by
                        employing trained security personnel, implementing
                        surveillance cameras, and practicing emergency drills.
                        They should also maintain clear policies for child
                        protection and cybersecurity while promoting health and
                        hygiene practices among students and staff.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="services-2 d-flex">
                    <div className="icon-container-about">
                      {/* Icon for "Regular Classes" */}
                      <i className="fas fa-book-reader" style={{ fontSize: '2rem', color: '#41A1F0' }}></i>
                    </div>
                    <div className="text">
                      <h3>Regular Classes</h3>
                      <p>
                        Regular classes at Mount Thabore Central School provide
                        a structured learning environment where students engage
                        with the curriculum through interactive teaching
                        methods. Experienced teachers guide students in their
                        academic pursuits, fostering critical thinking skills
                        and academic excellence.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="services-2 d-flex">
                    <div className="icon-container-about">
                      {/* Icon for "Certified Teachers" */}
                      <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2rem', color: '#41A1F0' }}></i>
                    </div>
                    <div className="text">
                      <h3>Certified Teachers</h3>
                      <p>
                      Certified teachers at Mount Thabore Central School are
                      qualified professionals who have undergone rigorous
                      training and have obtained relevant teaching credentials
                      from accredited institutions. They bring expertise and
                      dedication to their roles, ensuring high-quality education
                      and personalized support for students' academic and
                      personal development.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="services-2 d-flex">
                    <div className="icon-container-about">
                      {/* Icon for "Sufficient Classrooms" */}
                      <i className="fas fa-school" style={{ fontSize: '2rem', color: '#41A1F0' }}></i>
                    </div>
                    <div className="text">
                      <h3>Sufficient Classrooms</h3>
                      <p>
                      Mount Thabore Central School is equipped with sufficient
                      classroom space, ensuring that all students have a
                      conducive environment for learning. With spacious
                      classrooms, students have ample room to move around,
                      interact with peers, and engage with the curriculum,
                      promoting effective teaching and learning experiences.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="services-2 d-flex">
                    <div className="icon-container-about">
                      {/* Icon for "Creative Lessons" */}
                      <i className="fas fa-paint-brush" style={{ fontSize: '2rem', color: '#41A1F0' }}></i>
                    </div>
                    <div className="text">
                      <h3>Creative Lessons</h3>
                      <p>
                      Creative lessons at Mount Thabore Central School ignite
                      students' imaginations through hands-on activities, group
                      projects, and multimedia presentations, making learning
                      fun and engaging.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="services-2 d-flex">
                    <div className="icon-container-about">
                      {/* Icon for "Sports Facilities" */}
                      <i className="fas fa-basketball-ball" style={{ fontSize: '2rem', color: '#41A1F0' }}></i>
                    </div>
                    <div className="text">
                      <h3>Sports Facilities</h3>
                      <p>
                      Mount Thabore Central School offers extensive sports
                      facilities, including well-maintained fields, courts, and
                      equipment, encouraging students to participate in a
                      variety of sports and physical activities to promote
                      overall fitness and teamwork.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About