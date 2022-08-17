import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { TaskCardPropsTypes } from "../../../types";

const points = [
    `Prepare variety of different designs, layouts and websites`,
    `Actively listen to customers' requests, confirming full understanding before addressing concerns`,
    `Use Seo Optimization and other software tools to create to grow their business`,
    `Identify issues, analyzed information and provided solutions to problems`,
    `Convert graphic designs to usable web images using React JS`,
    `Plann website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding`,
    `Provide front-end website development using WordPress, Hubspot and other editing software`,
    `Establish presentation consistency across Chrome, Safari, Firefox and other common browser interfaces`,
    `Convert graphic designs to usable web images using Adobe Photo Shop`,
    `Multi-task across multiple functions and roles to generate project results and meet deadlines and organizational expectations`,
    `Code websites using HTML, CSS, JavaScript and jQuery languages`,
    `Implement Google-based SEO and ad campaigns to meet budget specifications`,
    `Employ search engine optimization tactics to increase reach of targeted audience`,
    `Develop technical solutions required to accommodate specific user-facing assets such as [Product or Service]`,
    `Conduct Unit testing over course of web development lifecycle`,
];

const TaskCard = ({ point }: TaskCardPropsTypes) => {
    return (
        <Col lg={4} md={6}>
            <div className="task-card text-left">
                <span className="check-icon">✔</span>
                {point}
            </div>
        </Col>
    );
};

export const WhatIDo = () => {
    return (
        <div className="wid-section section-card">
            <Container>
                <Row>
                    <Col lg={12} className="wid-text-column">
                        <div className="text-align-center">
                            <h2 className="section-heading">What I Do? 👩‍💻</h2>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {points.map((p, i) => (
                        <TaskCard point={p} key={i} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};
