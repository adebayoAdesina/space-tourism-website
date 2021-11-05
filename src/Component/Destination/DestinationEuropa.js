import React from 'react';

import Europa from '../../assets/destination/image-europa.png'
import { Row } from 'react-bootstrap';

function DestinationEuropa({solarFunction}) {
    return (
    <React.Fragment>
            <Row id="changes">
                <div className="col-12 col-lg-6 pt-4 my-3">
                    <Row>
                        <div className="my-5" id="destinationImages">
                            <img src={Europa} alt="Europa Img"/>
                        </div>
                    </Row>
                </div>

                <div className="col-12 col-lg-6 mt-5 pt-4">
                    <Row className="mt-5 pt-5">
                        <div className="col-2" onMouseOver={(e)=>solarFunction('MOON')} id="links">MOON</div>
                        <div className="col-2" onMouseOver={(e)=>solarFunction('MAR')} id="links">MAR</div>
                        <div className="col-2 Destination_Europa" onMouseOver={(e)=>solarFunction('EUROPA')} id="links">EUROPA</div>
                        <div className="col-2" onMouseOver={(e)=>solarFunction('TITAN')} id="links">TITAN</div>
                    </Row>
                    <Row>
                        <h3 class="col-12 my-4">EUROPA</h3>
                    </Row>

                    <Row>
                        <p class="colorParagraph">
                            See our planet as you’ve never seen it before. A perfect <br/>
                            relaxing trip away to help regain perspective and come <br/>
                            back refreshed. While you’re there, take in some history <br/>
                            by visiting the Luna 2 and Apollo 11 landing sites.
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
                                    384,400 KM 
                                </h5>
                            </div>
                            <div class="col-4">
                                <div class="distance">
                                    EST. Travel TIME 
                                </div>
                                <h5 class="distance">
                                    3 DAYS 
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
