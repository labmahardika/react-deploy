import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        height: '100vh',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/bg-home.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Container data-aos="fade-up" style={{ zIndex: 2, maxWidth: '800px' }}>
        <h1 className="fw-bold display-4 mb-4">Welcome to <span style={{ color: '#ffd700' }}>Rumah Belajar</span></h1>
        <p className="lead" style={{ lineHeight: '1.8', color: '#e0e0e0' }}>
          <strong>
            Rumah Belajar adalah tempat bimbingan belajar khusus anak SD yang mengedepankan pendekatan personal, kreativitas, dan sentuhan teknologi. 
            Dibimbing oleh pengajar berpengalaman sekaligus mahasiswa Teknik Informatika, kami menyajikan pelajaran seperti Matematika, IPA, Bahasa Indonesia, dan lainnya 
            dengan metode menyenangkan dan adaptif — sesuai kebutuhan individu setiap anak.
          </strong>
        </p>

        {/* Gambar Maskot */}
        <img
          src= "/codingkids.png"
          alt="Ilustrasi Anak"
          style={{
            maxWidth: '180px',
            marginTop: '35px',
            marginBottom: '25px',
            borderRadius: '19px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
            animation: 'float 3s ease-in-out infinite',
          }}
        />
      </Container>

      {/* Float Animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Home;
