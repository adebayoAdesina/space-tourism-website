import React from 'react';
import SpaceCapsule from '../../assets/technology/image-space-capsule-portrait.jpg'
import { Row, Button } from 'react-bootstrap';

function TechnologyCapsule ({TechnologyChange}) {
    return (
        <React.Fragment>
        <Row className="my-5 TechnologyResponsive">
            <div className="col-12 col-lg-6 my-3">
                <Row>
                    <div id="pickDestination" className="my-5">
                        <span>03</span> SPACE LAUNCH 101
                    </div>
                </Row>
                
                <Row className="mt-4">
                    <div className="col-12 col-lg-3 techParent">
                        <Row className="mx-auto">
                            <Button id="techCircle" className="m-3 py-3" onClick={()=> TechnologyChange('1')}>1</Button>
                        </Row>
                        <Row className="mx-auto">
                            <Button id="techCircle" className="m-3 py-3" onClick={()=> TechnologyChange('2')}>2</Button>
                        </Row>
                        <Row className="mx-auto">
                            <Button id="techCircle" className="techCircle3 m-3 py-3" onClick={()=> TechnologyChange('3')}>3</Button>
                        </Row>
                    </div>
                    <div className="col-12 col-lg-9">
                        <Row id="Technologys">
                            THE TERMINOLOGY..
                        </Row>
                        <Row>
                            <div className="launch my-2" id="Technologys">
                                SPACE CAPSULE
                            </div>
                        </Row>
                        <Row>
                            <p className="colorParagraph" id="Technologys">
                                A space capsule is an often-crewed spacecraft that uses
                                a blunt-body reentry capsule to reenter the Earth's
                                atmosphere without wings. Our capsule is where you'll
                                spend your time during the flight. It includes a space
                                gym, cinema, and plenty of other activities to keep you
                                entertained.
                            </p>
                        </Row>
                    </div>
                </Row>
            </div>

            <div className="col-12 col-lg-6">
                <img src={SpaceCapsule} alt="Space Capsule Img"/>
            </div>
        </Row>
    </React.Fragment>
    );
}

export default TechnologyCapsule ;