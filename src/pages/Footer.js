import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#282c34',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
    fontSize: '14px',
    position: 'relative',
    bottom: '0',
    width: '100%',
    marginTop: '40px',
  };

  const linkStyle = {
    color: '#61dafb',
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2020 Rumah Belajar. All rights reserved.</p>
      <div>
        <a href="/about" style={linkStyle}>Tentang Kami</a> |
        <a href="/contact" style={linkStyle}>Kontak</a> |
        <a href="/privacy" style={linkStyle}>Kebijakan Privasi</a>
      </div>
    </footer>
  );
};

export default Footer;
