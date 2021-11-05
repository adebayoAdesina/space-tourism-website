import React from 'react';
import { Row } from 'react-bootstrap';
import douglasHurey from '../../assets/crew/image-douglas-hurley.png'

function CrewCommander({changeCrew}) {
    return (
        <Row>
            <div className="col-12 col-lg-6" id="crewCommander">
                <Row>
                    <div id="pickDestination" className="my-5">
                        <span>02</span> MEET YOUR CREW
                    </div>
                </Row>
                <Row>
                    <h5 className="mt-5" id="crew">
                        COMMANDER
                    </h5>

                </Row>
                <Row>
                    <h3 className="mt-4">
                        DOUGLAS HURLEY
                    </h3>
                </Row>
                <Row>
                    <p className="colorParagraph">
                        Douglas Gerald Hurley is an American engineer, former <br/>
                        Marine Corps pilot and former NASA astronaut. He <br/>
                        launched into space for the third time as commander of <br/>
                        Crew Dragon Demo-2.
                        <br/>
                    </p>
                </Row>
                <Row>
                    <div style={{display: "flex"}} className="mt-5">
                        <div className="mx-2 Round1" id="round1" onMouseOver={(e)=>changeCrew('commander')}></div>
                        <div className="mx-2 Round4" onMouseOver={(e)=>changeCrew('specialist')}></div>
                        <div className="mx-2 Round2" onMouseOver={(e)=>changeCrew('pilot')}></div>
                        <div className="mx-2 Round3" onMouseOver={(e)=>changeCrew('engineer')}></div>
                    </div>
                </Row>
            </div>
            <div className="col-12 col-lg-6">
                <img src={douglasHurey} alt="DOUGLAS HURLEY Img"/>
            </div>
                
        </Row>
    );
}

export default CrewCommander;