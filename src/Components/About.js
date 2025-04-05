import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function About() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #c9eaf3, #f7fbfc)",
        minHeight: "100vh",
        padding: "60px 0",
      }}
    >
      <Container>
        <Row className="align-items-center mb-5">
        <Col md={6} className="mb-4 mb-md-0">
  <div
    style={{
      position: "relative",
      width: "100%",
      maxWidth: "600px", // Controls size on large screens
      margin: "0 auto", // Centers it horizontally
    }}
  >
    <img
      src="about.png" // Replace with your image
      alt="About Us"
      style={{
        width: "100%",
        height: "300px",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        display: "block",
      }}
    />

    {/* Overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "2px 2px 12px rgba(0, 0, 0, 0.7)",
          textAlign: "center",
          margin: 0,
        }}
      >
        Help the People
      </h2>
    </div>
  </div>
</Col>



          <Col md={6}>
            <h2
              style={{
                fontWeight: "bold",
                color: "#1e6091",
                marginBottom: "25px",
              }}
            >
              About Our Mission
            </h2>
            {[
              "At Studentopedia, we believe that education is a powerful tool to unlock a brighter future. However, for many underprivileged students, access to quality learning resources and guidance is limited.",
              "Our NGO is dedicated to bridging this gap by offering free educational programs, mentorship opportunities, and essential learning materials to students in need. We work to empower young minds, ensuring every student has a chance to succeed regardless of their circumstances.",
              "Together, with your support, we aim to create an equitable world where every student can dream, achieve, and inspire.",
            ].map((text, index) => (
              <p
                key={index}
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.75",
                  color: "#495057",
                  marginBottom: "1rem",
                }}
              >
                {text}
              </p>
            ))}
          </Col>
        </Row>

        <Row className="text-center mb-5 g-4">
          {[
            {
              title: "Our Vision",
              desc: "To create a world where education is accessible to every child, breaking the cycle of poverty and building brighter futures.",
            },
            {
              title: "Our Mission",
              desc: "To provide free educational support, resources, and mentorship to underprivileged students so they can achieve their dreams.",
            },
            {
              title: "Our Impact",
              desc: "Hundreds of students have benefited from our programs, receiving quality education and finding new opportunities for growth.",
            },
          ].map((item, index) => (
            <Col md={4} key={index}>
              <Card
                className="h-100 shadow-sm border-0"
                style={{
                  borderRadius: "12px",
                  padding: "25px 20px",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Card.Body>
                  <h4 style={{ color: "#1e6091", marginBottom: "15px" }}>
                    {item.title}
                  </h4>
                  <p style={{ color: "#555", fontSize: "0.95rem" }}>
                    {item.desc}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="text-center">
          <Col>
            <Button
              variant="primary"
              style={{
                backgroundColor: "#1e6091",
                borderColor: "#1e6091",
                padding: "12px 30px",
                fontSize: "1.1rem",
                borderRadius: "8px",
                fontWeight: "500",
                boxShadow: "0 4px 12px rgba(30, 96, 145, 0.3)",
              }}
              href="/contact"
            >
              Join Us in Making a Difference
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
