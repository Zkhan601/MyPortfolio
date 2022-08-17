import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import Tooltip from "react-bootstrap/Tooltip";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { techs } from "../../../constants";
import { SingleSkillPropsTypes, Skill } from "../../../types";

const skillsArr: Skill[] = [
    { ...techs.react, strength: 9 },
    { ...techs.java, strength: 8 },
    { ...techs.javascript, strength: 9 },
    { ...techs.html, strength: 9 },
    { ...techs.sql, strength: 8 },
    { ...techs.css, strength: 9 },
    { ...techs.git, strength: 8 },
];

const SingleSkill = ({ skill }: SingleSkillPropsTypes) => {
    return (
        <div className="skill-wrapper">
            <div className="single-skill">
                <CircularProgressbarWithChildren
                    value={skill.strength * 10}
                    strokeWidth={6}
                    styles={{
                        path: {
                            stroke: `#673ab7`,
                        },
                    }}
                >
                    <OverlayTrigger
                        overlay={<Tooltip id={`tooltip-${skill.title}`}>{skill.title}</Tooltip>}
                    >
                        <img className="skill-icon" src={skill.icon} alt={skill.title} />
                    </OverlayTrigger>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
};

export const Skills = () => {
    return (
        <div className="skills-section">
            <Container>
                <Row>
                    <Col lg={12} className="skill-text-column">
                        <div className="text-align-center">
                            <h2 className="section-heading">Skills 🔥</h2>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {skillsArr.map((s, i) => {
                        return (
                            <Col lg={2} sm={4} xs={6} key={i}>
                                <SingleSkill skill={s} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};
