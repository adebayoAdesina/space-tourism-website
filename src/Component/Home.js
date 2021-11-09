import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Home () {
  return (
    <React.Fragment>
      <div  className="App-home">
        <header className="container-fluid navbar navbar-default sticky-top navbar-expand-md shadow text-white p-1 mb-0 sticky-top align-items-center">
          <Navbar collapseOnSelect expand="lg" variant="dark" className="w-100 mt-3">
            <Container>
              <Nav>
                <Navbar.Brand>
                  <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                      <g fill="none" fill-rule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF"/>
                        <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
                      </g>
                    </svg>
                  </Link>
                </Navbar.Brand>
                </Nav>
                <div className="col-md-0 col-lg-4">
                  <hr/>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <Link to="/" className="link"><li className="px-4 py-4 linksHome navHover"><b>00</b> HOME</li></Link>
                    <Link to="/Destination" className="link"><li className="px-4 py-4 links navHover"><b>01</b> DESTINATION</li></Link>
                    <Link to="/Crew" className="link"><li className="px-4 py-4 links navHover"><b>02</b> CREW</li></Link>
                    <Link to="/Technology" className="link"><li className="px-4 py-4 links navHover"><b>03</b> TECHNOLOGY</li></Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row className="my-5 pt-5">
            <div className="col-12 col-lg-6 p-0">
              <Row className="mt-5">
                <h5>SO, YOU WANT TO TRAVEL TO</h5>
              </Row>
              <Row>
                <h1 className="my-2">SPACE</h1>
              </Row>
              <Row id="homeText">
                <p className="col-12" id="homeText">
                    Let’s face it; if you want to go to space, you might as well 
                    genuinely go to outer space and not hover kind of on the 
                    edge of it. Well sit back, and relax because we’ll give you 
                    a truly out of this world experience!
                </p>
              </Row>
            </div>
            <div className="col-12 col-lg-6 pt-5">
              <Row>
                <h3 className="explore col-4 mx-auto">
                  EXPLORE
                </h3>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Home;