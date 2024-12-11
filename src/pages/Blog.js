import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import "../styles/BlogStyle.css";  // Adding a custom style file for the blog page

const blogs = [
  {
    id: 1,
    title: "The Rise of Online Food Ordering",
    content: "Online food ordering has transformed the restaurant industry by allowing customers to order food from the comfort of their homes...",
    fullContent: "Online food ordering has transformed the restaurant industry by allowing customers to order food from the comfort of their homes. With new delivery options, users can access a wide range of cuisines and enjoy them conveniently.",
  },
  {
    id: 2,
    title: "Healthy Eating Trends in 2024",
    content: "As we move into 2024, healthy eating trends continue to evolve, with a focus on plant-based diets and sustainable food...",
    fullContent: "As we move into 2024, healthy eating trends continue to evolve, with a focus on plant-based diets and sustainable food options. These changes are not only helping people lead healthier lives but also aiding in environmental conservation.",
  },
  {
    id: 3,
    title: "How Technology is Shaping Food Delivery",
    content: "Technology has played a pivotal role in shaping food delivery, from GPS tracking to AI-powered recommendations...",
    fullContent: "Technology has played a pivotal role in shaping food delivery, from GPS tracking to AI-powered recommendations. These innovations are making food delivery faster, safer, and more personalized.",
  },
  {
    id: 4,
    title: "Exploring Exotic Cuisines from Around the World",
    content: "Food delivery services now allow people to explore exotic cuisines from around the world right from their homes...",
    fullContent: "Food delivery services now allow people to explore exotic cuisines from around the world right from their homes. This accessibility helps people expand their culinary horizons without traveling.",
  },
  {
    id: 5,
    title: "The Importance of Food Safety in Online Orders",
    content: "Ensuring food safety is crucial when ordering online, with proper handling and packaging practices...",
    fullContent: "Ensuring food safety is crucial when ordering online, with proper handling and packaging practices in place. This safeguards the health of customers and maintains the quality of the food.",
  },
  {
    id: 6,
    title: "How to Choose a Great Food Delivery Service",
    content: "With many food delivery services available, selecting the right one can be challenging...",
    fullContent: "With many food delivery services available, selecting the right one can be challenging. Customers should consider factors like delivery time, food quality, and app user experience when making a choice.",
  },
  {
    id: 7,
    title: "The Future of Food Delivery: Drone Deliveries?",
    content: "Drone delivery could be the next big thing in food delivery, offering faster service and reducing traffic...",
    fullContent: "Drone delivery could be the next big thing in food delivery, offering faster service and reducing traffic congestion. This futuristic technology has the potential to revolutionize the food delivery industry.",
  },
  {
    id: 8,
    title: "The Impact of Food Delivery on Local Businesses",
    content: "Food delivery services have significantly impacted local businesses, with both challenges and opportunities...",
    fullContent: "Food delivery services have significantly impacted local businesses, with both challenges and opportunities for growth. While they expand reach, the fees and competition can also be tough.",
  },
  {
    id: 9,
    title: "Sustainable Packaging in Food Delivery",
    content: "Sustainable packaging is becoming essential in food delivery to reduce environmental impact...",
    fullContent: "Sustainable packaging is becoming essential in food delivery to reduce environmental impact. More companies are adopting eco-friendly practices to appeal to environmentally conscious customers.",
  },
];

const Blog = () => {
  const [expanded, setExpanded] = useState({});

  const handleReadMore = (id) => {
    setExpanded((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    
    <div>
      <Header />
      <section className="Blog_bhai">
      <Container className="mt-5 blog-container">
        <h1 className="text-center mb-4">Our Blog</h1>
        <Row>
          {blogs.map((blog) => (
            <Col key={blog.id} md={6} lg={4} className="mb-4">
              <div className="blog-post p-3 border rounded">
                <h3>{blog.title}</h3>
                <p>{expanded[blog.id] ? blog.fullContent : blog.content}</p>
                <Button
                  variant="primary"
                  className="read-more-button"
                  onClick={() => handleReadMore(blog.id) }
                >
                  {expanded[blog.id] ? "Read Less" : "Read More"}
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
</section>
      <Footer />
    </div>
  );
};


export default Blog;
