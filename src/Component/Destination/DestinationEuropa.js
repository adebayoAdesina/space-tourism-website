import React from 'react';
import { Row } from 'react-bootstrap';



import Europa from '../../assets/destination/image-europa.png'



function DestinationEuropa({solarFunction}) {
    return (
        <React.Fragment>
            <Row id="changes">
                <div className="col-12 col-lg-6 pt-2 my-3">
                    <Row>
                        <div className="mt-1" id="destinationImages">
                            <img src={Europa} alt="Europa Img" id="destinationImage"/>
                        </div>
                    </Row>
                </div>

                <div className="col-12 col-lg-6 mt-3 pt-2" >
                    <Row className="mt-4 pt-4 destination">
                        <div className="col-3 col-md-2" onMouseOver={(e)=>solarFunction('MOON')} id="links">MOON</div>
                        <div className="col-3 col-md-2" onMouseOver={(e)=>solarFunction('MAR')} id="links">MAR</div>
                        <div className="col-3 col-md-2 Destination_Europa" onMouseOver={(e)=>solarFunction('EUROPA')} id="links">EUROPA</div>
                        <div className="col-3 col-md-2" onMouseOver={(e)=>solarFunction('TITAN')} id="links">TITAN</div>
                    </Row>
                    <Row>
                        <h3 className="col-12 my-4" id="DestinationEuropa">EUROPA</h3>
                    </Row>
                    <Row>
                        <p class="colorParagraph" id="DestinationEuropa">
                            The smallest of the four Galilean moons orbiting Jupiter,
                            Europa is a winter lover’s dream. With an icy surface,
                            it’s perfect for a bit of ice skating, curling, hockey,
                            or simple relaxation in your snug wintery cabin.
                        </p>
                    </Row>
                    <hr className="mt-5 mb-3"/>
                    <Row>
                        <div className="row destination">
                            <div className="col-4">
                                <div className="distance">
                                    AVG. DISTANCE 
                                </div>
                                <h5 className="distance">
                                    628 MIL. KM 
                                </h5>
                            </div>
                            <div className="col-4">
                                <div className="distance">
                                    EST. Travel TIME 
                                </div>
                                <h5 className="distance">
                                    3 YEARS
                                </h5>
                            </div>
                        </div>
                    </Row>
                </div>
            </Row>        
        </React.Fragment>
    );
}

export default DestinationEuropa;
