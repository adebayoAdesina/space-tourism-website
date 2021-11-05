import React, { useEffect, useState } from 'react';

import { Container,  Button, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import DestinationMoon from './Destination/DestinationMoon';
import DestinationEuropa from './Destination/DestinationEuropa';
import DestinationTitan from './Destination/DestinationTitan';
import DestinationMars from './Destination/DestinationMars';





function Destination() {
    
    let [destinationChange, setDestinationChange] = useState({e: "MOON"})

    const solarFunction = (e) => {
        setDestinationChange({...destinationChange, e})
    }

    useEffect(()=> {
        
    },[])
    return (
        <React.Fragment>
            <div className="App-destination">
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
                    <Row>
                        <div id="pickDestination">
                            <span>01</span> Pick your destination
                        </div>
                    </Row>
                    
                   {destinationChange.e === "MOON" && <DestinationMoon solarFunction={solarFunction}/>}
                   {destinationChange.e === "EUROPA" && <DestinationEuropa solarFunction={solarFunction}/>}
                   {destinationChange.e === "TITAN" && <DestinationTitan solarFunction={solarFunction}/>}
                   {destinationChange.e === "MAR" && <DestinationMars solarFunction={solarFunction}/>}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Destination;