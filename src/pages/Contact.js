import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Optional: hide after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: 'url("/images/bg-contact.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} data-aos="fade-up">
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                padding: '30px',
                color: '#fff',
              }}
            >
              <h2 className="text-center mb-4" style={{ fontWeight: '600' }}>
                Contact Us
              </h2>

              {/* Alert Success */}
              {submitted && (
                <Alert variant="success" className="text-center">
                  ✅ Pesan Anda berhasil terkirim!
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label style={{ color: '#fff' }}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    style={{ borderRadius: '10px' }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label style={{ color: '#fff' }}>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    style={{ borderRadius: '10px' }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label style={{ color: '#fff' }}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your message"
                    style={{ borderRadius: '10px' }}
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="light"
                    type="submit"
                    style={{
                      padding: '10px 30px',
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
