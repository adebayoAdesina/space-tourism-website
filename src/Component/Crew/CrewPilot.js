import React from 'react';
import { Row } from 'react-bootstrap';



import victorGlover from '../../assets/crew/image-victor-glover.png'



function CrewPilot({changeCrew}) {
    return (
        <Row id="crewPilot">
            <div className="col-12 col-lg-6 crewResponsiveOne">
                <Row>
                    <div id="pickDestination" className="my-5">
                        <span><b>02</b></span> MEET YOUR CREW
                    </div>
                </Row>
                <Row  id="roundsChangeOne">
                    <div style={{display: "flex"}} className="mt-5">
                        <div className="mx-2 Round1 mx-auto" onMouseOver={(e)=>changeCrew('commander')}></div>
                        <div className="mx-2 Round4 mx-auto" onMouseOver={(e)=>changeCrew('specialist')}></div>
                        <div className="mx-2 Round2 mx-auto" id="round2" onMouseOver={(e)=>changeCrew('pilot')}></div>
                        <div className="mx-2 Round3 mx-auto" onMouseOver={(e)=>changeCrew('engineer')}></div>
                    </div>
                </Row>
                <Row>
                    <h5 className="mt-5"  id="crew">
                        PILOT
                    </h5>
                </Row>
                <Row>
                    <h3 className="mt-4" id="crewDetails">
                        VICTOR GLOVER
                    </h3>
                </Row>
                <Row>
                    <p className="colorParagraph" id="crewDetails">
                        Pilot Victor Glover Pilot on the first operational flight 
                        of the SpaceX Crew Dragon to the International Space Station. 
                        Glover is a commander in the U.S. Navy where he pilots an F/A-18.
                        He was a crew member of Expedition 64, and served as a station systems flight engineer.<br/>
                    </p>
                </Row>
                <Row  id="roundsChangeTwo">
                    <div style={{display: "flex"}} className="mt-5">
                        <div className="mx-2 Round1" onMouseOver={(e)=>changeCrew('commander')}></div>
                        <div className="mx-2 Round4" onMouseOver={(e)=>changeCrew('specialist')}></div>
                        <div className="mx-2 Round2" id="round2" onMouseOver={(e)=>changeCrew('pilot')}></div>
                        <div className="mx-2 Round3" onMouseOver={(e)=>changeCrew('engineer')}></div>
                    </div>
                </Row>
            </div>
            <div className="col-12 col-lg-6 crewResponsiveTwo">
                <img src={victorGlover} alt="VICTOR GLOVER Img"  id="crewImage"/>
            </div>
        </Row>
    );
}

export default CrewPilot;