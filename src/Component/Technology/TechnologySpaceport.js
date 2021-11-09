import React from 'react';
import Spaceport from '../../assets/technology/image-spaceport-portrait.jpg'
import { Row, Button } from 'react-bootstrap';
import SpaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg'

function TechnologySpaceport({TechnologyChange}) {
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
                                <Button id="techCircle" className="m-3 py-3" onClick={()=> TechnologyChange('1')}>1</Button>
                            </Row>
                            <Row className="mx-auto">
                                <Button id="techCircle" className="techCircle2 m-3 py-3" onClick={()=> TechnologyChange('2')}>2</Button>
                            </Row>
                            <Row className="mx-auto">
                                <Button id="techCircle" className="m-3 py-3" onClick={()=> TechnologyChange('3')}>3</Button>
                            </Row>
                        </div>
                        <div className="col-12 col-lg-9">
                            <Row id="Technologys">
                                THE TERMINOLOGY..
                            </Row>
                            <Row>
                                <div className="launch my-2" id="Technologys">
                                    SPACEPORT
                                </div>
                            </Row>
                            <Row>
                                <p className="colorParagraph" id="Technologys">
                                    A spaceport or cosmodrome is a site for launching (or
                                    receiving) spacecraft, by analogy to the seaport for ships
                                    or airport for aircraft. Based in the famous Cape 
                                    Canaveral, our spaceport is ideally situated to take
                                    advantage of the Earth’s rotation for launch.  
                                </p>
                            </Row>
                        </div>
                    </Row>
                </div>
                <div className="col-12 col-lg-6">
                    <img src={Spaceport} alt="Spaceport Img" id="technologyPortrait"/>
                    <img src={SpaceportLandscape} alt="Spaceport Img" id="technologyLandscape"/>
                </div>
            </Row>
        </React.Fragment>
    );
}

export default TechnologySpaceport;