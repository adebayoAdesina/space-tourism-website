import React from 'react';
import { Row } from 'react-bootstrap';

import Mars from '../../assets/destination/image-mars.png'

function DestinationMars({solarFunction}) {
    return (
        <React.Fragment>
            <Row id="changes">
                <div className="col-12 col-lg-6 pt-2 my-3">
                    <Row>
                        <div className="mt-1" id="destinationImages">
                            <img src={Mars} alt="Mar Img" id="destinationImage"/>
                        </div>
                    </Row>
                </div>
                <div className="col-12 col-lg-6 mt-3 pt-2">
                    <Row className="mt-4 pt-4 destination">
                        <div className="col-3 col-md-2" onMouseOver={(e)=>solarFunction('MOON')} id="links">MOON</div>
                        <div className="col-3 col-md-2 Destination_Mar" onMouseOver={(e)=>solarFunction('MAR')} id="links">MAR</div>
                        <div className="col-3 col-md-2" onMouseOver={(e)=>solarFunction('EUROPA')} id="links">EUROPA</div>
                        <div className="col-3 col-md-2" onMouseOver={(e)=>solarFunction('TITAN')} id="links">TITAN</div>
                    </Row>
                    <Row id="DestinationMar">
                        <h3 className="col-4 my-4" id="DestinationMar">MAR</h3>
                    </Row>
                    <Row>
                        <p className="colorParagraph" id="DestinationMar">
                            Don’t forget to pack your hiking boots. You’ll need them to tackle
                            Olympus Mons, the tallest planetary mountain in
                            our solar system. It’s two and a half times the size of Everest! <br/><br/>
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
                                225 MIL. KM 
                                </h5>
                            </div>
                            <div className="col-4">
                                <div className="distance">
                                    EST. Travel TIME 
                                </div>
                                <h5 className="distance">
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