import React, { useState } from 'react';
import { Container,  Button, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import CrewCommander from './Crew/CrewCommander';
import CrewEngineer from './Crew/CrewEngineer';
import CrewPilot from './Crew/CrewPilot';
import CrewSpecialist from './Crew/CrewSpecialist';

function Crew() {

  let [crewChange, setCrewChange] = useState({e: "commander"})

  const changeCrew = (e) => {
    setCrewChange({...crewChange, e})
  }
  console.log(crewChange)
    return (
        <React.Fragment>
            <div className="App-crew">
            <header className="container-fluid navbar navbar-default sticky-top navbar-expand-md shadow text-white p-1 mb-0 sticky-top align-items-center">
          <Navbar collapseOnSelect expand="lg" variant="dark" className="w-100 mt-3">
            <Container>
                <Nav>
                  <Navbar.Brand>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                  </Navbar.Brand>
                </Nav>
                <div className="col-md-0 col-lg-4">
                  <hr/>
                </div>

              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto py-3">
                  <Nav.Link className="px-4"><Link to="/" id="links"><b>00</b> Home</Link></Nav.Link>
                  <Nav.Link className="px-4"><Link to="/Destination" id="links"><b>01</b> DESTINATION</Link></Nav.Link>
                  <Nav.Link className="px-4"><Link to="/Crew" id="links"><b>02</b> CREW</Link></Nav.Link>
                  <Nav.Link className="px-4"><Link to="/Technology" id="links"><b>03</b> TECHNOLOGY</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
            <div className="container">
                {crewChange.e === 'commander' && <CrewCommander changeCrew={changeCrew}/>}
                {crewChange.e === 'engineer' && <CrewEngineer changeCrew={changeCrew}/>}
                {crewChange.e === 'pilot' && <CrewPilot changeCrew={changeCrew}/>}
                {crewChange.e === 'specialist' && <CrewSpecialist changeCrew={changeCrew}/>}
                
            </div> 
            </div>            
        </React.Fragment>
    );
}

export default Crew;