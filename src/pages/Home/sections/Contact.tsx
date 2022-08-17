import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import emailIcon from "../../../assets/contact/email.png";
import linkedinIcon from "../../../assets/contact/linkedin.png";
import locationIcon from "../../../assets/contact/location.png";
import phoneIcon from "../../../assets/contact/phone.png";

export const Contact = () => {
    return (
        <Container className="contact-section">
            <Row>
                <Col lg={12} className="project-text-column">
                    <div className="text-align-center">
                        <h2 className="section-heading">Contact Info 📱</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={12}>
                    <div className="contact-card phone-card">
                        <div className="contact-card-icon">
                            <img src={phoneIcon} alt="" />
                        </div>

                        <div className="contact-card-detail">
                            <p className="contact-heading">Phone</p>
                            <p className="contact-value">+1 (347) 819-9116</p>
                        </div>
                    </div>
                </Col>
               
                 
                
                <Col lg={6} sm={12}>
                    <div className="contact-card email-card" >
                        <div className="contact-card-icon">
                            <img src={emailIcon} alt="" />
                        </div>

                        <div className="contact-card-detail" >
                            <p className="contact-heading">Email</p>
                            <p className="contact-value">zakian.khan01@gmail.com</p>
                        </div>
                    </div>
                </Col>
                {/* <Col lg={4} sm={12}>
                    <div className="contact-card location-card">
                        <div className="contact-card-icon">
                            <img src={locationIcon} alt="" />
                        </div>

                        <div className="contact-card-detail">
                            <p className="contact-heading">Location</p>
                            <p className="contact-value">Brooklyn NY</p>
                        </div>
                    </div>
                </Col> */}
            </Row>
        </Container>
    );
};
