import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const Change = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://test-omega-three-15.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Form Submitted Successfully:", result);
      alert("Your message has been sent. We will get back to you shortly!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("There was a problem with the form submission:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #c9eaf3, #f7fbfc)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
      }}
    >
      <Container>
        <h2
          className="text-center mb-5"
          style={{ fontWeight: "bold", color: "#1e6091" }}
        >
          Contact Us
        </h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={Submit}>
              <Form.Group controlId="name" className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={Change}
                  required
                  style={{
                    padding: "12px",
                    fontSize: "1rem",
                    borderRadius: "8px",
                    backgroundColor: "#f7f7f7",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="email" className="mb-4">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={Change}
                  required
                  style={{
                    padding: "12px",
                    fontSize: "1rem",
                    borderRadius: "8px",
                    backgroundColor: "#f7f7f7",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="message" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={Change}
                  required
                  style={{
                    padding: "12px",
                    fontSize: "1rem",
                    borderRadius: "8px",
                    backgroundColor: "#f7f7f7",
                  }}
                />
              </Form.Group>

              <Button
                type="submit"
                className="w-100"
                style={{
                  backgroundColor: "#1e6091",
                  borderColor: "#1e6091",
                  padding: "12px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  borderRadius: "8px",
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
