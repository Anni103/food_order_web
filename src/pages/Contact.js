import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaRegSmileWink, FaRegThumbsUp, FaRegGrinHearts } from "react-icons/fa"; // Importing some emojis from react-icons
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import "../styles/ContactStyle.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Trigger email functionality here if integrated with backend or EmailJS
  };

  return (
    <div>
      <Header />
      <section className="contact-section">
        <Container className="mt-5 contact-container">
          <h1 className="text-center mb-4">Get in Touch with Us</h1>
          <p className="text-center">We'd love to hear from you! Please fill out the form below to send us a message.</p>
          
          {isSubmitted ? (
            <div className="thank-you-message text-center">
              <p className="text-success">Thank you for reaching out! We'll respond shortly.</p>
              <div className="emoji-container">
                <FaRegSmileWink className="emoji" />
                <FaRegThumbsUp className="emoji" />
                <FaRegGrinHearts className="emoji" />
              </div>
            </div>
          ) : (
            <Form onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter your subject"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit" className="send-button">
                  Send Message
                </Button>
              </div>
            </Form>
          )}
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
