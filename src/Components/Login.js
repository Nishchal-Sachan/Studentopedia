import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email, "Password:", password);
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(20, 125, 191, 0.9), rgba(40, 237, 208, 0.9))",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={6} md={8} sm={10} xs={12}>
            <div
              style={{
                background: "rgba(0, 0, 0, 0.6)",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
                Welcome Back!
              </h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      backgroundColor: "#f7f7f7",
                      color: "#333",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      padding: "12px",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      backgroundColor: "#f7f7f7",
                      color: "#333",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      padding: "12px",
                    }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 mb-3"
                  style={{
                    backgroundColor: "#ff7e5f",
                    borderColor: "#ff7e5f",
                    color: "white",
                    padding: "14px",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Log In
                </Button>
              </Form>

              <div className="text-center">
                <p style={{ fontSize: "0.9rem", color: "white" }}>
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "#ff7e5f" }}
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
