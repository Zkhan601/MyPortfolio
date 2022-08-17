import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import aboutImg from "../../../assets/about.gif";

import nya from "../../../assets/communities/nya.png";
import turing from "../../../assets/communities/turing.png";
import wtm from "../../../assets/communities/wtm.png";

const communities = [
    { label: "Turing Developer Community", icon: turing },
    { label: "Woman Techmakers", icon: wtm },
    { label: "National Yotuh Assembly Pakistan", icon: nya },
];

export const About = () => {
    return (
        <div className="about-section">
            <Container>
                <Row>
                    <Col lg={6} className="about-image-column mb-5">
                        <Image className="about-image" src={aboutImg} />
                    </Col>
                    <Col lg={6} className="about-text-column">
                        <div className="about-text-wrapper">
                            <h2 className="section-heading">About Me 👩</h2>

                            <h6 className="about-description">
                                I am a junior at <strong>Brooklyn College</strong>. Currently majoring in Computer Science.
                                

                                <br />
                                <br />
                                
                                <br />
                            </h6>

                            {/* <h5 className="communities-heading bold">Communities</h5> */}
                            {/* {communities.map(({ icon, label }, i) => (
                                <OverlayTrigger
                                    key={i}
                                    overlay={<Tooltip id={`tooltip-${label}`}>{label}</Tooltip>}
                                >
                                    <Image className="community-logo" src={icon} />
                                </OverlayTrigger>
                            ))} */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
