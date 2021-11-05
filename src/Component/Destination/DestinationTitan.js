import React from 'react';
import { Row } from 'react-bootstrap';

import Titan from '../../assets/destination/image-titan.png'

function DestinationTitan({solarFunction}) {
    return (
        <React.Fragment>
            <Row id="changes">
                <div className="col-12 col-lg-6 pt-4 my-3">
                    <Row>
                        <div className="my-5" id="destinationImages">
                            <img src={Titan} alt="titan Img"/>
                        </div>
                    </Row>
                </div>

                <div className="col-12 col-lg-6 mt-5 pt-4">
                    <Row className="mt-5 pt-5">
                        <div className="col-2" onMouseOver={(e)=>solarFunction('MOON')} id="links">MOON</div>
                        <div className="col-2" onMouseOver={(e)=>solarFunction('MAR')} id="links">MAR</div>
                        <div className="col-2" onMouseOver={(e)=>solarFunction('EUROPA')} id="links">EUROPA</div>
                        <div className="col-2 Destination__Titan" onMouseOver={(e)=>solarFunction('TITAN')} id="links">TITAN</div>
                    </Row>
                    <Row>
                        <h3 class="col-12 my-4">TITAN</h3>
                    </Row>

                    <Row>
                        <p class="colorParagraph">
                            The only moon known to have a dense atmosphere other than Earth, <br/>
                            Titan is a home away from home (just a few hundred degrees colder!). <br/>
                            As a bonus, you get striking views of the Rings of Saturn. <br/>
                    
                        </p>
                    </Row>

                    <hr class="mt-5 mb-3"/>
                    <Row>
                        <div class="row">
                            <div class="col-4">
                                <div class="distance">
                                    AVG. DISTANCE 
                                </div>
                                <h5 class="distance">
                                    1.6 BIL. KM 
                                </h5>
                            </div>
                            <div class="col-4">
                                <div class="distance">
                                    EST. TRAVEL TIME 
                                </div>
                                <h5 class="distance">
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