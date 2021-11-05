import React from 'react';
import { Row } from 'react-bootstrap';

import Mars from '../../assets/destination/image-mars.png'

function DestinationMars({solarFunction}) {
    return (
        <React.Fragment>
            <Row id="changes">
                <div className="col-12 col-lg-6 pt-4 my-3">
                    <Row>
                        <div className="my-5" id="destinationImages">
                            <img src={Mars} alt="Mar Img"/>
                        </div>
                    </Row>
                </div>

                <div className="col-12 col-lg-6 mt-5 pt-4">
                    <Row className="mt-5 pt-5">
                        <div className="col-2" onMouseOver={(e)=>solarFunction('MOON')} id="links">MOON</div>
                        <div className="col-2 Destination_Mar" onMouseOver={(e)=>solarFunction('MAR')} id="links">MAR</div>
                        <div className="col-2" onMouseOver={(e)=>solarFunction('EUROPA')} id="links">EUROPA</div>
                        <div className="col-2" onMouseOver={(e)=>solarFunction('TITAN')} id="links">TITAN</div>
                    </Row>
                    <Row>
                        <h3 className="col-4 my-4">MAR</h3>
                    </Row>

                    <Row>
                        <p class="colorParagraph">
                            Don’t forget to pack your hiking boots. You’ll need them to tackle <br/>
                            Olympus Mons, the tallest planetary mountain in <br/>
                            our solar system. It’s two and a half times the size of Everest! <br/>
                    
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
                                225 MIL. KM 
                                </h5>
                            </div>
                            <div class="col-4">
                                <div class="distance">
                                    EST. Travel TIME 
                                </div>
                                <h5 class="distance">
                                    9 MONTHS 
                                </h5>
                            </div>
                        </div>
                    </Row>
                </div>
            </Row>        
        </React.Fragment>
    );
}

export default DestinationMars;