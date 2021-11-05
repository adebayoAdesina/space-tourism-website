import React from 'react';
import { Row } from 'react-bootstrap';
import markShutttleworth from '../../assets/crew/image-mark-shuttleworth.png'
function CrewSpecialist({changeCrew}) {
    return ( 
        <Row>
        <div className="col-12 col-lg-6" id="crewCommander">
            <Row>
                <div id="pickDestination" className="my-5">
                    <span>02</span> MEET YOUR CREW
                </div>
            </Row>
            
            <Row>
                <h5 className="mt-5"  id="crew">
                    MISSION SPECIALIST
                </h5>

            </Row>
            <Row>
                <h3 className="mt-4">
                    MARK SHUTTLEWORTH
                </h3>
            </Row>
            <Row>
                <p className="colorParagraph">
                    Mark Richard Shuttleworth is the founder and CEO of
                    Canonical, the company behind the Linux-based Ubuntu operating system.
                    Shuttleworth became the first South African to travel  to space as a space tourist.<br/><br/>
                </p>
            </Row>
            <Row>
                    <div style={{display: "flex"}} className="mt-5">
                        <div className="mx-2 Round1" onMouseOver={(e)=>changeCrew('commander')}></div>
                        <div className="mx-2 Round4" id="round4" onMouseOver={(e)=>changeCrew('specialist')}></div>
                        <div className="mx-2 Round2" onMouseOver={(e)=>changeCrew('pilot')}></div>
                        <div className="mx-2 Round3" onMouseOver={(e)=>changeCrew('engineer')}></div>
                    </div>
                </Row>
        </div>
        <div className="col-12 col-lg-6">
            <img src={markShutttleworth} id="markShutttleworth" alt=" MARK SHUTTLEWORTH img"/>
        </div>
            
    </Row>
    );
}

export default CrewSpecialist;