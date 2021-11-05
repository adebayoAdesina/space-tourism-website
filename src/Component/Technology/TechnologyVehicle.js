import React from 'react';
import { Row, Button } from 'react-bootstrap';
import LaunchVehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg'

function TechnologyVehicle ({TechnologyChange}) {
    return ( 
        <React.Fragment>
            <Row className="my-5">
                <div className="col-12 col-lg-6 my-3">
                    <Row>
                        <div id="pickDestination" className="my-5">
                            <span>03</span> SPACE LAUNCH 101
                        </div>
                    </Row>
                    
                    <Row className="mt-4">
                        <div className="col-3">
                            <Row className="mx-auto">
                                <Button id="techCircle" className="techCircle1 m-3 py-3" onClick={()=> TechnologyChange('1')}>1</Button>
                            </Row>
                            <Row className="mx-auto">
                                <Button id="techCircle" className="m-3 py-3" onClick={()=> TechnologyChange('2')}>2</Button>
                            </Row>
                            <Row className="mx-auto">
                                <Button id="techCircle" className="m-3 py-3" onClick={()=> TechnologyChange('3')}>3</Button>
                            </Row>
                        </div>
                        <div className="col-9">
                            <Row>
                                THE TERMINOLOGY..
                            </Row>
                            <Row>
                                <div className="launch my-2">
                                    LAUNCH VEHICLE
                                </div>
                            </Row>
                            <Row>
                                <p className="colorParagraph">
                                    A launch vehicle or carrier rocket is a rocket-propelled 
                                    vehicle used to carry a payload from Earth's surface to 
                                    space, usually to Earth orbit or beyond. Our WEB-X 
                                    carrier rocket is the most powerful in operation. Standing
                                    150 metres tall, it's quite an awe-inspiring sight 
                                    on the launch pad!
                                </p>
                            </Row>
                        </div>
                    </Row>
                </div>

                <div className="col-12 col-lg-6">
                    <img src={LaunchVehicle} alt="Launch Vehicle Img"/>
                </div>
            </Row>
        </React.Fragment>
    );
}

export default TechnologyVehicle;