import React from 'react';
import { Row } from 'react-bootstrap';
import anoushenAnsari from '../../assets/crew/image-anousheh-ansari.png'

function CrewEngineer({changeCrew}) {
    return (
        <Row >
            <div className="col-12 col-lg-6">
                <Row>
                    <div id="pickDestination" className="my-5">
                        <span>02</span> MEET YOUR CREW
                    </div>
                </Row>
                
                <Row>
                    <h5 className="mt-5"  id="crew">
                        FLIGHT ENGINEER
                    </h5>

                </Row>
                <Row>
                    <h3 className="mt-4" id="crewDetails">
                        ANOUSHEH ANSARI
                    </h3>
                </Row>
                <Row>
                    <p className="colorParagraph" id="crewDetails">
                        Anousheh Ansari is an Iranian American engineer and
                        co-founder of Prodea Systems. Ansari was the fourth self-funded
                        space tourist, the first self-funded woman to fly to the ISS,
                        and the first Iranian in space.
                    </p>
                </Row>
                <Row>
                    <div style={{display: "flex"}} className="mt-5">
                        <div className="mx-2 Round1" onMouseOver={(e)=>changeCrew('commander')}></div>
                        <div className="mx-2 Round4" onMouseOver={(e)=>changeCrew('specialist')}></div>
                        <div className="mx-2 Round2" onMouseOver={(e)=>changeCrew('pilot')}></div>
                        <div className="mx-2 Round3" id="round3" onMouseOver={(e)=>changeCrew('engineer')}></div>
                    </div>
                </Row>
            </div>
            <div className="col-12 col-lg-6">
                <img src={anoushenAnsari} alt=" ANOUSHEH ANSARI Img"  id="crewImage"/>
            </div>
                
        </Row>
    );
}

export default CrewEngineer;