import React from 'react';
import { Row, Button } from 'react-bootstrap';



import LaunchVehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import LaunchVehicleLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg'



function TechnologyVehicle ({TechnologyChange}) {
    return ( 
        <React.Fragment>
            <Row className="mt-4 TechnologyResponsive">
                <div className="col-12 col-lg-6 my-3">
                    <Row>
                        <div id="pickDestination" className="my-5">
                            <span><b>03</b></span> SPACE LAUNCH 101
                        </div>
                    </Row>                    
                    <Row className="mt-4">
                        <div className="col-12 col-lg-3 techParent">
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
                        <div className="col-12 col-lg-9">
                            <Row  id="Technologys">
                                THE TERMINOLOGY..
                            </Row>
                            <Row>
                                <div className="launch my-2" id="Technologys">
                                    LAUNCH VEHICLE
                                </div>
                            </Row>
                            <Row>
                                <p className="colorParagraph" id="Technologys">
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
                    <img src={LaunchVehicle} alt="Launch Vehicle Img" id="technologyPortrait"/>
                    <img src={LaunchVehicleLandscape} alt="Launch Vehicle Img" id="technologyLandscape"/>
                </div>
            </Row>
        </React.Fragment>
    );
}

export default TechnologyVehicle;