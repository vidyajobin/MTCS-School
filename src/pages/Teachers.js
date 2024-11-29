import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import PrincipalSection from '../components/PrincipalSection';
import ManagerSection from '../components/ManagerSection';
import { Container, Row, Col } from "react-bootstrap";
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Teachers = ({show=true }) => {

  const teachers = [
    {
      name: "Vidya Jobin",
      subject: "Msc IT MCA [Computer]",
      imageUrl: "/image/teachers/vidya-jobin-c.jpg"
    },
    {
      name: "Anitha Varghese",
      subject: "Bsc BEd [Biology]",
      imageUrl: "/image/teachers/anitha-varghese.jpg"
    },
    {
      name: "Beena K A",
      subject: "BA BEd [Social Studies]",
      imageUrl: "/image/teachers/beena-k-a.png"
    },
    {
      name: "Simi T B",
      subject: "MA BEd",
      imageUrl: "/image/teachers/simi-tb.jpg"
    },
    {
      name: "Priya Varghese",
      subject: "Msc BEd [Mathematics]",
      imageUrl: "/image/teachers/priya-varghese.jpg"
    },
    {
      name: "Rany John",
      subject: "PDC NTTC",
      imageUrl: "/image/teachers/rany-john.jpg"
    },
    {
      name: "Rekha Menon",
      subject: "MA BEd [Malayalam]",
      imageUrl: "/image/teachers/rekha-menon.jpg"
    },
    {
      name: "Sarala Devi",
      subject: "M.Com PGDCA [Computer]",
      imageUrl: "/image/teachers/sarala-devi.jpg"
    },
    {
      name: "Aswini Sreekumar",
      subject: "BA BEd [English]",
      imageUrl: "/image/teachers/aswini-sreekumar.jpg"
    },
    {
      name: "Shaly Shaju",
      subject: "TTC",
      imageUrl: "/image/teachers/shaly-shaju.jpg"
    },
    {
      name: "Siny P G",
      subject: "Hindi Vidhwan",
      imageUrl: "/image/teachers/siny-p-g.jpg"
    },
    {
      name: "Anju Basil",
      subject: "MA BEd [Social Science]",
      imageUrl: "/image/teachers/anju-basil.jpg"
    },
    {
      name: "Kesia P B",
      subject: "MA BEd [English]",
      imageUrl: "/image/teachers/kesia-p-b.jpg"
    },
    {
      name: "Anjaly V A",
      subject: "Bsc BEd [Mathematics]",
      imageUrl: "/image/teachers/anjaly-va.jpg"
    },
    {
      name: "Sreebha V",
      subject: "Msc BEd M phil [Zoology]",
      imageUrl: "/image/teachers/sreebha.jpg"
    },
    {
      name: "Blessy Alias",
      subject: "Bsc TTC [Computer]",
      imageUrl: "/image/teachers/blessy-alias.jpg"
    }
  ];

  const managementdata = [
    {
      name: "Eldho Paul",
      imageUrl: "/image/management/eldho-paul-c.jpg"
    },
    {
      name: "Saji Cherian",
      imageUrl: "/image/management/saji_cherian-c.jpg"
    },
    {
      name: "Eldho Varghese",
      imageUrl: "/image/management/eldho-varghese.jpg"
    },
    {
      name: "Nelson",
      imageUrl: "/image/management/nelson.jpg"
    },
    {
      name: "Shabu T George",
      imageUrl: "/image/management/shabu.jpg"
    },
    {
      name: "Shaji Varghese",
      imageUrl: "/image/management/shaji.jpg"
    },
    {
      name: "Shimson Shaji",
      imageUrl: "/image/management/shimson.jpg"
    },
    {
      name: "Scariya P K",
      imageUrl: "/image/management/scariya.jpg"
    },
    {
      name: "Manoj Mathew",
      imageUrl: "/image/management/manoj.jpg"
    }
    
  ];

  const managementdata1 = [
    {
      name: "Kuriakose A V",
      subject: "Vice President",
      imageUrl: "/image/management/kuriakose-av.jpg"
    },
    {
      name: "Jacob T V",
      subject: "Secretary",
      imageUrl: "/image/management/jacob.jpg"
    },
    {
      name: "Kuriakose A C",
      subject: "Joint Secretary",
      imageUrl: "/image/management/kuriakose-ac.jpg"
    },
    
    
  ];

  // Animation variant for teacher cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      {show && <BreadCrumb pagename={'Teachers'}/>}
      <PrincipalSection />
      <ManagerSection/>
      <section className="teachers-section">
        <Container>
          <Row className="justify-content-center mb-5 pb-2">
            <Col md={8} className="text-center heading-section">
              <h2 className="mb-4">
                <span>Certified</span> Teachers
              </h2>
              <p>
                Certified teachers at Mount Thabore Central School are qualified professionals who have undergone rigorous training and have obtained relevant teaching credentials from accredited institutions. They bring expertise and dedication to their roles, ensuring high-quality education and personalized support for students' academic and personal development.
              </p>
            </Col>
          </Row>
          <Row>
            {teachers.map((teacher, index) => (
              <Col key={index} md={6} lg={3}>
                <motion.div
                  className="staff shadow-md"
                  initial="hidden"  // This should be the state for initial
                  animate="visible" // This should be the state for animation
                  variants={cardVariants} // Make sure variants are passed correctly
                  whileHover={{ scale: 1.05 }} // Apply hover effect
                >
                  <div className="img-wrap d-flex align-items-stretch">
                    <div
                      className="img align-self-stretch"
                      style={{
                        backgroundImage: `url(${teacher.imageUrl})`,
                      }}
                    ></div>
                  </div>
                  <div className="text pt-3 text-center" style={{ marginBottom: '20px' }}>
                    <h3>{teacher.name}</h3>
                    <span className="position mb-2">{teacher.subject}</span>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="teachers-section">
        <Container>
          <Row className="justify-content-center mb-5 pb-2">
            <Col md={8} className="text-center heading-section">
              <h2 className="mb-4">
                <span>Management</span> Panel
              </h2>
              <p>
              The management panel at Mount Thabore Central School comprises experienced professionals dedicated to guiding the institution's strategic direction and ensuring operational efficiency. With a focus on transparency and collaboration, the panel oversees financial planning, curriculum development, and staff management to uphold academic excellence and promote student welfare.
              </p>
            </Col>
          </Row>
          <Row className="centered-row">
            {managementdata1.map((management, index) => (
              <Col key={index} md={6} lg={3}>
                <motion.div
                  className="staff shadow-md"
                  initial="hidden"  // This should be the state for initial
                  animate="visible" // This should be the state for animation
                  variants={cardVariants} // Make sure variants are passed correctly
                  whileHover={{ scale: 1.05 }} // Apply hover effect
                >
                  <div className="img-wrap d-flex align-items-stretch">
                    <div
                      className="img align-self-stretch"
                      style={{
                        backgroundImage: `url(${management.imageUrl})`,
                      }}
                    ></div>
                  </div>
                  <div className="text pt-3 text-center" style={{ marginBottom: '20px' }}>
                    <h3>{management.name}</h3>
                    <span className="position mb-2">{management.subject}</span>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
          <Row>
            {managementdata.map((management, index) => (
              <Col key={index} md={6} lg={3}>
                <motion.div
                  className="staff shadow-md"
                  initial="hidden"  // This should be the state for initial
                  animate="visible" // This should be the state for animation
                  variants={cardVariants} // Make sure variants are passed correctly
                  whileHover={{ scale: 1.05 }} // Apply hover effect
                >
                  <div className="img-wrap d-flex align-items-stretch">
                    <div
                      className="img align-self-stretch"
                      style={{
                        backgroundImage: `url(${management.imageUrl})`,
                      }}
                    ></div>
                  </div>
                  <div className="text pt-3 text-center" style={{ marginBottom: '20px' }}>
                    <h3>{management.name}</h3>
                    
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {show && <Footer />}
    </>
  );
};

export default Teachers;
