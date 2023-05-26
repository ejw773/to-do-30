import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './HeaderComponent';
import Main from './MainComponent';
import Footer from './FooterComponent';

const App = () => {
  return (
    <>
      <Header />
      <Row className="m-3">
        <Main/>
      </Row>
      <Footer />
    </>
  )
}

export default App;