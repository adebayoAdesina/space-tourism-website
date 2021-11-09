import React, { useEffect, useState } from 'react';



import { Container, Nav, Navbar, Row } from 'react-bootstrap';
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
    return (
        <React.Fragment>
            <div className="App-destination">
                <header className="container-fluid navbar navbar-default sticky-top navbar-expand-md shadow text-white p-1 mb-0 sticky-top align-items-center">
                    <Navbar collapseOnSelect expand="lg" variant="dark" className="w-100 mt-3">
                        <Container>
                            <Nav>
                                <Navbar.Brand to="/">
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
                                <Link to="/" className="link"><li className="px-4 py-4 links navHover"><b>00</b> Home</li></Link>
                                <Link to="/Destination" className="link"><li className="px-4 py-4 linksDestination navHover"><b>01</b> DESTINATION</li></Link>
                                <Link to="/Crew" className="link"><li className="px-4 py-4 links navHover"><b>02</b> CREW</li></Link>
                                <Link to="/Technology" className="link"><li className="px-4 py-4 links navHover"><b>03</b> TECHNOLOGY</li></Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>

                <div className="container pt-2">        
                    <Row>
                        <div id="pickDestinations" className="my-2">
                            <span><b>01</b></span> PICK YOUR DESTINATION
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