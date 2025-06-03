import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  {
    title: 'Bimbingan Belajar Anak SD (kelas 1-6)',
    content: [
      'Mata pelajaran: Matematika, IPA, Bahasa Indonesia, IPS, Bahasa Inggris.',
      'Metode: Belajar sambil bermain dengan flashcard, kuis interaktif, dan analogi sehari-hari.',
      'Fokus: Pemahaman konsep dasar, penyelesaian tugas sekolah, dan persiapan ujian.',
    ],
  },
  {
    title: 'Kelas Logika & Pemrograman Dasar untuk Anak',
    content: [
      'Mengenalkan dasar pemikiran komputasional melalui tools ramah anak (Scratch, Blockly).',
      'Projek sederhana: Animasi, game mini, atau cerita interaktif untuk melatih kreativitas.',
    ],
  },
  {
    title: 'Les Privat Online/Offline',
    content: [
      'Fleksibel: Bisa tatap muka di rumah siswa (jangkauan: Cirebon) atau via Zoom.',
      'Materi digital: Video rekaman, lembar kerja online, dan laporan perkembangan berkala.',
    ],
  },
  {
    title: 'Pendampingan Tugas Sekolah',
    content: [
      'Bantuan mengerjakan PR dengan pendekatan mandiri, bukan sekadar memberi jawaban.',
      'Latihan soal tambahan berbasis kebutuhan individu siswa.',
    ],
  },
  {
    title: 'Workshop Literasi Digital untuk Orang Tua',
    content: [
      'Tips memilih konten edukatif digital untuk anak.',
      'Cara mendampingi anak belajar dengan teknologi secara aman.',
    ],
  },
  {
    title: 'Science Fun Experiment (Usia 7-12 Tahun)',
    content: [
      'Eksplorasi Sains dengan Metode Hands-on!',
      'Aktivitas: Eksperimen sederhana (gunung berapi baking soda, rainbow water density).',
      'Fokus: Konsep sains dasar (fisika, kimia, biologi) yang diaplikasikan langsung.',
      'Manfaat: Stimulasi rasa ingin tahu & pemahaman konsep melalui praktik.',
      'Bonus: Video dokumentasi eksperimen untuk orang tua.',
    ],
  },
];

const Services = () => {
  return (
    <section
      className="py-5"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/bg-services.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <div
          className="text-center mb-5 pt-5"
          data-aos="zoom-in"
          style={{ color: '#fff', marginTop: '40px' }}
        >
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-light">Online and offline learning services</p>
        </div>

        <Row className="g-4">
          {services.map((service, idx) => (
            <Col key={idx} md={6} lg={4} data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  borderRadius: '15px',
                  minHeight: '100%',
                  transition: 'transform 0.3s ease',
                }}
                className="h-100 shadow-sm card-hover"
              >
                <Card.Body>
                  <Card.Title className="fw-semibold mb-3">{service.title}</Card.Title>
                  <Card.Text as="div">
                    <ul style={{ paddingLeft: '1rem' }}>
                      {service.content.map((item, i) => (
                        <li key={i} style={{ marginBottom: '8px' }}>{item}</li>
                      ))}
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Custom Hover Style */}
      <style jsx>{`
        .card-hover:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

export default Services;
