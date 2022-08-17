import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import ui1 from "../../../assets/ui/ui1.png";
import ui2 from "../../../assets/ui/ui2.png";
import ui3 from "../../../assets/ui/ui3.png";
import ui4 from "../../../assets/ui/ui4.png";
import ui5 from "../../../assets/ui/ui5.png";
import ui6 from "../../../assets/ui/ui6.png";
import ui7 from "../../../assets/ui/ui7.png";
import ui8 from "../../../assets/ui/ui8.png";

const galleryImages: string[] = [ui1, ui2, ui3, ui4, ui5, ui6, ui7, ui8];

export const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <div className="gallery-section">
            <Modal
                show={selectedIndex !== -1}
                size="lg"
                onHide={() => {
                    setSelectedIndex(-1);
                }}
            >
                <Modal.Body className="p-0">
                    <Image src={galleryImages[selectedIndex]} loading="lazy" fluid></Image>
                </Modal.Body>
            </Modal>
            <Container>
                <Row>
                    <Col lg={12} className="project-text-column">
                        <div className="text-align-center">
                            <h2 className="section-heading">Portfolio 📷</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {galleryImages.map((g, i) => {
                        return (
                            <Col lg={3} key={i}>
                                <Image
                                    fluid
                                    thumbnail
                                    loading="lazy"
                                    src={g}
                                    className="gallery-image"
                                    onClick={() => {
                                        setSelectedIndex(i);
                                    }}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};
