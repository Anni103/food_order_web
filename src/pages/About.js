import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import "../styles/AboutStyle.css";
import Image1 from '../assets/team/aniket.jpeg';
import Image2 from "../assets/team/rakshit.png";
import Image3 from "../assets/team/abhishek.png";
import Image4 from "../assets/team/reena.png";
import Image5 from "../assets/team/shivam.png";
import Image6 from "../assets/team/shivam.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if section is visible on scroll
  const handleScroll = () => {
    const aboutSection = document.getElementById("about-section");
    const top = aboutSection.getBoundingClientRect().top;
    if (top < window.innerHeight) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <section id="about-section" className={`about-section ${isVisible ? "fade-in" : ""}`}>
        <Container className="mt-5">
          {/* About Me Section */}
          <Row className="mb-5">
            <Col md={12} className="text-center">
              <h1>About Us</h1>
              <p>
                We are a food delivery service on a mission to revolutionize how people experience food. We deliver delicious meals with the utmost care and the fastest service, bringing restaurants closer to your door. Our service ensures you get fresh, high-quality food, every time.
              </p>
              <p>
                Founded in 2024, our journey has been fueled by a passion for food, technology, and innovation. Our commitment is to transform food delivery by improving convenience, speed, and satisfaction.
              </p>
            </Col>
          </Row>

          {/* Mission & Vision Section */}
          <Row className="mb-5">
            <Col md={6} className="interactive-card">
              <h2>Our Mission</h2>
              <p>
                Our mission is to provide quick, reliable, and exceptional food delivery services while ensuring the best customer experience. We aim to make food delivery a seamless part of everyday life.
              </p>
            </Col>
            <Col md={6} className="interactive-card">
              <h2>Our Vision</h2>
              <p>
                Our vision is to lead the food delivery industry globally. We aspire to provide unparalleled service, using cutting-edge technology and maintaining a commitment to quality and customer satisfaction.
              </p>
            </Col>
          </Row>

          {/* Our Team Section with Slider */}
          <Row className="mt-5">
            <Col md={12} className="text-center">
              <h3>Meet Our Team</h3>
              <Carousel>
                <Carousel.Item>
                  <Row>
                    <Col md={4}>
                      <div className="team-member">
                        <img src={Image1}  alt="Team Member 1" />
                        <h5>Aniket Singh</h5>
                        <p>CEO & Founder</p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="team-member">
                        <img src={Image5} alt="Team Member 2" />
                        <h5>Shivam Kumar Bhatt</h5>
                        <p>Head of Operations</p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="team-member">
                        <img src={Image4} className="img-fluid" />
                        <h5>Reena Devi</h5>
                        <p>CTO</p>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col md={4}>
                      <div className="team-member">
                        <img src={Image2} alt="Team Member 4" />
                        <h5>Rakshit Singh</h5>
                        <p>Marketing Lead</p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="team-member">
                        <img src={Image3}  alt="Team Member 5" />
                        <h5>Abhishek Singh </h5>
                        <p>Customer Support</p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="team-member">
                        <img src={Image6} alt="Team Member 6" />
                        <h5>Shivam Kumar</h5>
                        <p>Product Manager</p>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          {/* Explore More Section */}
          <Row className="text-center mt-5">
            <Col md={12}>
              <Button variant="primary" className="explore-btn">
                Explore More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
);
};

export default About;
