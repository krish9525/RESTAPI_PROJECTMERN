import React from 'react';

const Navbar = () => {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#333',
      color: 'white',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '20px',
      margin: 0,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.3s',
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>CRUD</div>
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
