import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section
      className="py-5 d-flex align-items-center"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/bg-about.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right" className="text-center mb-4 mb-md-0">
            <img
              src="/about.jpeg" 
              alt="About"
              style={{
                width: '100%',
                maxWidth: '350px',
                height: 'auto',
                borderRadius: '15px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              }}
              className="img-fluid"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '30px',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <h2 className="fw-bold mb-4" style={{ color: '#fff' }}>Fathan Aditya Putra</h2>
              <p style={{ color: '#eaeaea' }}>
                Sebagai guru les untuk anak SD dan calon ahli di bidang IT, saya percaya pembelajaran efektif dimulai dengan memahami dunia anak. Saya memadukan teknik pengajaran tradisional dengan tools digital interaktif untuk membantu siswa memahami konsep dasar dengan cara yang lebih menarik.
              </p>
              <p style={{ color: '#eaeaea' }}>
                Selain itu, sebagai mahasiswa yang aktif berkecimpung dalam teknologi, saya terus mengembangkan materi belajar berbasis digital, seperti kuis interaktif atau video penjelasan singkat, untuk memudahkan orang tua memantau progres anak. Tujuannya sederhana: membuat belajar terasa seperti petualangan, bukan beban.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
