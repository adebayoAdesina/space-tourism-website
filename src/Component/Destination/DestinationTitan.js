import React from 'react';
import { Row } from 'react-bootstrap';

import Titan from '../../assets/destination/image-titan.png'

function DestinationTitan({solarFunction}) {
    return (
        <React.Fragment>
            <Row id="changes">
                <div className="col-12 col-lg-6 pt-2 my-3">
                    <Row>
                        <div className="my-5" id="destinationImages">
                            <img src={Titan} alt="titan Img" id="destinationImage"/>
                        </div>
                    </Row>
                </div>

                <div className="col-12 col-lg-6 mt-3 pt-2">
                    <Row className="mt-5 pt-5 destination">
                        <div className="col-2" onMouseOver={(e)=>solarFunction('MOON')} id="links">MOON</div>
                        <div className="col-2" onMouseOver={(e)=>solarFunction('MAR')} id="links">MAR</div>
                        <div className="col-2" onMouseOver={(e)=>solarFunction('EUROPA')} id="links">EUROPA</div>
                        <div className="col-2 Destination__Titan" onMouseOver={(e)=>solarFunction('TITAN')} id="links">TITAN</div>
                    </Row>
                    <Row>
                        <h3 className="col-12 my-4" id="DestinationTitans">TITAN</h3>
                    </Row>

                    <Row className="destination">
                        <p className="colorParagraph" id="DestinationTitans">
                            The only moon known to have a dense atmosphere other than Earth,
                            Titan is a home away from home (just a few hundred degrees colder!).
                            As a bonus, you get striking views of the Rings of Saturn.
                    
                        </p>
                    </Row>

                    <hr className="mt-5 mb-3"/>
                    <Row>
                        <div className="row  destination">
                            <div className="col-4">
                                <div className="distance">
                                    AVG. DISTANCE 
                                </div>
                                <h5 className="distance">
                                    1.6 BIL. KM 
                                </h5>
                            </div>
                            <div className="col-4">
                                <div className="distance">
                                    EST. TRAVEL TIME 
                                </div>
                                <h5 className="distance">
                                    7 YEARS
                                </h5>
                            </div>
                        </div>
                    </Row>
                </div>
            </Row>        
        </React.Fragment>
    );
}

export default DestinationTitan;