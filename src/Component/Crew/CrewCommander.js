import React from 'react';
import { Row } from 'react-bootstrap';



import douglasHurey from '../../assets/crew/image-douglas-hurley.png'



function CrewCommander({changeCrew}) {
    return (
        <Row id="crewCommander">
            <div className="col-12 col-lg-6 crewResponsiveOne">
                <Row>
                    <div id="pickDestination" className="my-5">
                        <span><b>02</b></span> MEET YOUR CREW
                    </div>
                </Row>
                <Row id="roundsChangeOne">
                    <div style={{display: "flex"}} className="mt-5 a">
                        <div className="mx-2 Round1 mx-auto" id="round1" onMouseOver={(e)=>changeCrew('commander')}></div>
                        <div className="mx-2 Round4 mx-auto" onMouseOver={(e)=>changeCrew('specialist')}></div>
                        <div className="mx-2 Round2 mx-auto" onMouseOver={(e)=>changeCrew('pilot')}></div>
                        <div className="mx-2 Round3 mx-auto" onMouseOver={(e)=>changeCrew('engineer')}></div>
                    </div>
                </Row>
                <Row>
                    <h5 className="mt-5" id="crew">
                        COMMANDER
                    </h5>
                </Row>
                <Row>
                    <h3 className="mt-4" id="crewDetails">
                        DOUGLAS HURLEY
                    </h3>
                </Row>
                <Row>
                    <p className="colorParagraph" id="crewDetails">
                        Douglas Gerald Hurley is an American engineer, former
                        Marine Corps pilot and former NASA astronaut. He
                        launched into space for the third time as commander of
                        Crew Dragon Demo-2.<br/>
                        <br/>
                    </p>
                </Row>
                <Row id="roundsChangeTwo">
                    <div style={{display: "flex"}} className="mt-5">
                        <div className="mx-2 Round1" id="round1" onMouseOver={(e)=>changeCrew('commander')}></div>
                        <div className="mx-2 Round4" onMouseOver={(e)=>changeCrew('specialist')}></div>
                        <div className="mx-2 Round2" onMouseOver={(e)=>changeCrew('pilot')}></div>
                        <div className="mx-2 Round3" onMouseOver={(e)=>changeCrew('engineer')}></div>
                    </div>
                </Row>
            </div>
            <div className="col-12 col-lg-6 crewResponsiveTwo">
                <img src={douglasHurey} alt="DOUGLAS HURLEY Img" id="crewImage"/>
            </div>    
        </Row>
    );
}

export default CrewCommander;