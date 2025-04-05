import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#2c3e50", color: "white", padding: "60px 0" }}>
      <Container>
        <Row className="gy-5">
          {/* Logo & Description */}
          <Col md={4}>
            <h4 className="fw-bold mb-3">Studentopedia</h4>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              Studentopedia is a student-centered media platform offering fast updates, academic support,
              personal guidance, and an interactive student space.
            </p>
          </Col>

          {/* Navigation Menu */}
          <Col md={4}>
            <h5 className="text-uppercase mb-3">Menu</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "News", href: "/news" },
                { name: "Events", href: "/events" },
                { name: "Student Care", href: "/ihoik-care" },
                { name: "Contact Us", href: "/contact" },
              ].map((item, i) => (
                <li key={i} className="mb-2">
                  <a
                    href={item.href}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#1abc9c")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Subscribe Form */}
          <Col md={4}>
            <h5 className="text-uppercase mb-3">Subscribe</h5>
            <p style={{ fontSize: "0.9rem" }}>Get updates right in your inbox:</p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    borderRadius: "8px",
                    padding: "12px",
                    border: "none",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                  }}
                />
              </Form.Group>
              <Button
                variant="success"
                type="submit"
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Bottom Line */}
        <hr style={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />
        <div className="text-center" style={{ fontSize: "0.85rem", color: "#ccc" }}>
          &copy; {new Date().getFullYear()} Studentopedia. All rights reserved. <br />
          Designed with <span style={{ color: "#e74c3c" }}>♥</span> by the Studentopedia Team.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
