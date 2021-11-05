import React from 'react';
import Spaceport from '../../assets/technology/image-spaceport-portrait.jpg'
import { Row, Button } from 'react-bootstrap';


function TechnologySpaceport({TechnologyChange}) {
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
                            <Button id="techCircle" className="m-3 py-3" onClick={()=> TechnologyChange('1')}>1</Button>
                        </Row>
                        <Row className="mx-auto">
                            <Button id="techCircle" className="techCircle2 m-3 py-3" onClick={()=> TechnologyChange('2')}>2</Button>
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
                                SPACEPORT
                            </div>
                        </Row>
                        <Row>
                            <p className="colorParagraph">
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
                <img src={Spaceport} alt="Spaceport Img"/>
            </div>
        </Row>
    </React.Fragment>
    );
}

export default TechnologySpaceport;