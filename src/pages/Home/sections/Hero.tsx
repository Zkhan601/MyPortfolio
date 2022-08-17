import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Typewriter from "typewriter-effect";
import hamnaImage from "../../../assets/hamna-square.png";

export const Hero = () => {
    const goToLink = (link: string) => {
        window.open(link);
    };

    return (
        <div className="hero-section">
            <Container>
                <Row>
                    <Col lg={{ span: 6, order: 1 }} xs={{ order: 2 }} className="hero-text-column">
                        <div className="hero-text-wrapper">
                            <h2 className="hero-heading">
                                Hi, I'm <span className="hero-name">Zakia </span>
                                <span className="wave">👋</span>
                            </h2>

                            {/* <h3 className="typing-effect">
                                and I am{" "}
                                <Typewriter
                                    options={{
                                        strings: [
                                            "React Developer",
                                            "Frontend Enthusiast",
                                            "UI Designer",
                                            "Open Source Contributor",
                                            "WordPress Designer",
                                            "Dedicated Programmer",
                                            "Team Person",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        wrapperClassName: "hero-typewriter",
                                    }}
                                />
                            </h3> */}

                            <h6 className="hero-description">
                                A passionate front end designer who loves to design web pages layouts
                                using HTML CSS BOOTSTRAP JAVASCRIPT and use multiple libraries to enhance
                                their functionality and make them look more appealing.
                            </h6>
                        </div>

                        <Button
                            onClick={() => {
                                goToLink("https://github.com/Zkhan601");
                            }}
                            className="hero-action"
                            variant="primary"
                            size="lg"
                        >
                            <i className="fa-brands fa-github"></i> View on Github
                        </Button>

                        <Button
                            onClick={() => {
                                goToLink("https://www.linkedin.com/in/zakiak/");
                            }}
                            className="hero-action"
                            variant="primary"
                            size="lg"
                        >
                            <i className="fa-brands fa-linkedin"></i> View on LinkedIn
                        </Button>
                    </Col>

                    <Col
                        lg={{ span: 6, order: 2 }}
                        xs={{ order: 1 }}
                        className="hero-image-column mb-5"
                    >
                        <div className="hero-image-wrapper">
                            <Image className="hero-image" src={hamnaImage} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
