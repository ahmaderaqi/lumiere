import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Container from 'react-bootstrap/Container';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Container className="pt-10">
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
