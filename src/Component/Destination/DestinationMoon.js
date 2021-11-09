import React from 'react';
import { Row } from 'react-bootstrap';



import Moon from '../../assets/destination/image-moon.png'



function DestinationMoon({solarFunction}) {    
    return (
        <React.Fragment>
            <Row id="changes">
                <div className="col-12 col-lg-6 pt-2 my-3">
                    <Row>
                        <div className="mt-1" id="destinationImages">
                            <img src={Moon} alt="Moon Img" id="destinationImage"/>
                        </div>
                    </Row>
                </div>
                <div className="col-12 col-lg-6 mt-3 pt-2">
                    <Row className="mt-4 pt-4 destination">
                        <div className="col-3 col-md-2 Destination_Moon" onMouseOver={(e)=>solarFunction('MOON')} id="links">MOON</div>
                        <div className="col-3 col-md-2" onMouseOver={(e)=>solarFunction('MAR')} id="links">MAR</div>
                        <div className="col-3 col-md-2" onMouseOver={(e)=>solarFunction('EUROPA')} id="links">EUROPA</div>
                        <div className="col-3 col-md-2" onMouseOver={(e)=>solarFunction('TITAN')} id="links">TITAN</div>
                    </Row>
                    <Row>
                        <h3 className="col-12 my-4" id="DestinationMoon">MOON</h3>
                    </Row>
                    <Row>
                        <p className="colorParagraph" id="DestinationMoon">
                            See our planet as you’ve never seen it before. A perfect
                            relaxing trip away to help regain perspective and come
                            back refreshed. While you’re there, take in some history
                            by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                    </Row>
                    <hr className="mt-5 mb-3"/>
                    <Row className=" destination">
                        <div className="col-4">
                            <div className="distance">
                                AVG. DISTANCE 
                            </div>
                            <h5 className="distance">
                                384,400 KM 
                            </h5>
                        </div>
                        <div className="col-4">
                            <div className="distance">
                                EST. Travel TIME 
                            </div>
                            <h5 className="distance">
                                3 DAYS 
                            </h5>
                        </div>
                    </Row>
                </div>
            </Row>        
        </React.Fragment>
    );
}

export default DestinationMoon;