import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import Tooltip from "react-bootstrap/Tooltip";
import seaImage from "../../../assets/sea-image.png";
import { techs } from "../../../constants";

const technologiesUsed = [
    techs.react,
    techs.express,
    techs.node,
    techs.javascript,
    techs.typescript,
    techs.python,
    techs.mongo,
    techs.stripe,
    techs.git,
    techs.api,
    techs.bootstrap,
    techs.scss,
];

export type Module = {
    title: string;
    description: string;
    icon: string;
};

const modules: Module[] = [
    {
        title: "Post",
        description:
            "Users can share the educational resources with their fellow students and also share their feedback by liking/disliking the post and by comments",
        icon: "fa-solid fa-newspaper",
    },
    {
        title: "Quiz",
        description:
            "Users can upload the notes and the system will generate the MCQs from these notes. User can attempt the quiz and see the result to know how much they are prepared.",
        icon: "fa-solid fa-circle-question",
    },
    {
        title: "Locate Tutor",
        description:
            "Students can find the tutors in nearby areas and contact them regarding the subjects they want help in. The tutors can see the requests and respond with the rates.",
        icon: "fa-solid fa-user-graduate",
    },
    {
        title: "Freelance Projects",
        description:
            "Users can post projects and get them done by the expert students in those subjects. They can also track the status of current projects and the estimated completion date.",
        icon: "fa-solid fa-briefcase",
    },
    {
        title: "Payment Gateway",
        description:
            "Users can pay the project amount to the student using the Stripe API which is integrated into our application. ",
        icon: "fa-solid fa-money-bills",
    },
    {
        title: "Users",
        description:
            "The admin user can manage the application's users through the platform. They can enable/disable the users and can accept/reject the tutor listing requests.",
        icon: "fa-solid fa-users",
    },
    {
        title: "Scholarships",
        description:
            "The students can see the scholarship opportunities being offered throughout the world and they can filter the results by their education level or desired country.",
        icon: "fa-solid fa-graduation-cap",
    },
    {
        title: "Notifications",
        description:
            "Users will get the notifications in the app upon events e.g. someone comments on their post or when the tutor responds to their request etc.",
        icon: "fa-solid fa-bell",
    },
    {
        title: "Messaging",
        description: "Users can send messages to fellow students using the website",
        icon: "fa-solid fa-message",
    },
];

export const SEA = () => {
    return (
        <div className="sea-section sea-card">
            <Container>
                

                

                {/* <Row className="sea-modules-row">
                    <h3 className="sea-subheading bold">Main Modules</h3>
                    {modules.map((m, i) => (
                        <Col lg={4} key={i}>
                            <div className="module-card-wrapper">
                                <div className="module-card">
                                    <div className="module-card-header">
                                        <h5 className="module-heading">
                                            <i className={m.icon}></i> {m.title}
                                        </h5>
                                    </div>

                                    <div className="module-card-body">
                                        <p className="module-description">{m.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row> */}

                <Row>
                    <Col lg={12}>
                        <h3 className="sea-subheading bold">Recommended Technologies</h3>
                        <div className="technologies-used">
                            {technologiesUsed.map(({ title, icon }, i) => {
                                return (
                                    <OverlayTrigger
                                        key={i}
                                        overlay={<Tooltip id={`tooltip-${title}`}>{title}</Tooltip>}
                                    >
                                        <Image className="sea-tech" src={icon} alt={title} />
                                    </OverlayTrigger>
                                );
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
