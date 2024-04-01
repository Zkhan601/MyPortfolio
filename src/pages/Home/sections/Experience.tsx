import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import starbucksLogo from "../../../assets/jobs/starbucks.png";
import nastechLogo from "../../../assets/jobs/nastech.png";
import technoLogo from "../../../assets/jobs/techno.png";
import { Experience, SingleExperiencePropsTypes } from "../../../types";

const experiences: Experience[] = [
    {
        title: "Software Development Fellow",
        client: "CUNY Tech Prep (CTP)",
        tenure: "August 2022 - June 2023",
        logo: starbucksLogo,
        responsibilities: [
            "Learn in-demand technologies like React, Node + Express, and PostgreSQL.",
            "Learn best practices for design, implementation, and deployment such as MVC, agile & Scrum with Trello and Slack, test-driven development, and CI/CD.",
            "Participated in projects, learning how to navigate group work and issues.",
        ],
        description: `Worked with peers to manage different projects and learned new technologies. `,
    },
    {
        title: "Engineering Internship Program",
        client: "NYC Department of Design and Construction (DDC)",
        tenure: "July 2019 - August 2019",
        logo: starbucksLogo,
        responsibilities: [
            "Managing projects to enhance public safety around New York City.",
            "Validated and studied blueprints.",
            "Participated in project management meetings with Department of Transportation, Department of Buildings AECOM, and Department of Environmental Protection.",
            "Focused on expanding accessibitly for the handicapped around New York City."
        ],
        description: `Worked with the engineer-incharge to manage different project sites such as St.Patrick's cathedral and Grand Central Station.  `,
    },
    {
        title: "Data Technician",
        client: "NK Environmental",
        tenure: "October 2017 - Nov 2021",
        logo: nastechLogo,
        responsibilities: [
            "Use NYC online reporting tools to create reports that would be used by the DOB. ",
            "Training individuals on how to use the city platform to create and submit reports.",
        ],
        description: `At NK Environmental, my role was primarily to enter data using MS Word to generate reports for executive review and subsequent submission to clients. `,
    },
    {
        title: "Administrative Support Specialist",
        client: "Technology Advanced",
        tenure: "June 2016 - Mar 2019",
        logo: technoLogo,
        responsibilities: [
            "Microsoft Office Suite",
            "Document all service transactions, processes, and procedures.",
            "Maintain/Organize a clean operating space to complete necessary repairs.",
        ],
        description: `Technology Advanced is a Brooklyn based IT support group, providing onsite and remote resolution of PC and Mac software and hardware to a client base of X users.`,
    },
];

const SingleExperience = ({ experience: e }: SingleExperiencePropsTypes) => {
    return (
        <div className="single-exp-wrapper">
            <div className="exp-card text-left">
                <Row>
                    <Col lg={4} className="exp-meta">
                        <img src={e.logo} className="job-logo" alt="" />
                        <h5 className="job-client">{e.client}</h5>
                        <h6 className="job-tenure">{e.tenure}</h6>
                    </Col>
                    <Col lg={8} className="exp-details">
                        <h4 className="job-title">{e.title}</h4>
                        <p className="exp-description">{e.description}</p>
                        <h6 className="resp-heading bold">Responsibilites</h6>
                        <ul className="exp-resp">
                            {e.responsibilities?.map((r, i) => {
                                return (
                                    <li key={i} className="responsibility">
                                        {r}
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export const Experiences = () => {
    return (
        <Container className="experience-section">
            <Row>
                <Col lg={12} className="project-text-column">
                    <div className="text-align-center">
                        <h2 className="section-heading">Experience 💼</h2>
                    </div>
                </Col>
            </Row>

            <div className="experience-container">
                <Row>
                    {experiences.map((e, i) => {
                        return (
                            <Col lg={6} key={i}>
                                <SingleExperience experience={e} />
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </Container>
    );
};
