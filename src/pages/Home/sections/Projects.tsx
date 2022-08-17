import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import Tooltip from "react-bootstrap/Tooltip";
import adminDImage from "../../../assets/projects/adminD.png";
import airbnbImage from "../../../assets/projects/airbnb.png";
import atcReduxImage from "../../../assets/projects/atcRedux.png";
import foodiesImage from "../../../assets/projects/foodies.png";
import googleImage from "../../../assets/projects/google.png";
import huluImage from "../../../assets/projects/hulu.png";
import linkedInImage from "../../../assets/projects/linkedin.png";
import { techs } from "../../../constants";
import { Project, SingleProjectPropsTypes } from "../../../types";

const projects: Project[] = [
    // {
    //     title: "Foodies App",
    //     description: "A UI For foodies app created using ReactJS",
    //     technologies: ["react", "html", "css"],
    //     link: "https://github.com/hamnaiqbal/Foodies-React-App",
    //     image: foodiesImage,
    // },
    // {
    //     title: "HULU Clone",
    //     description: "HULU Clone, View all the latest movies category wise. Built using TMDB API.",
    //     technologies: ["react", "html", "scss", "bulma", "api"],
    //     link: "https://github.com/hamnaiqbal/HULU",
    //     image: huluImage,
    // },
    // {
    //     title: "LinkedIn Clone",
    //     description:
    //         "LinkedIn Clone with React Js+ Firebase and user authentication. Create your account add post and sign out.",
    //     technologies: ["firebase", "react", "css", "java"],
    //     link: "https://github.com/hamnaiqbal/linkedin-clone",
    //     image: linkedInImage,
    // },
    // {
    //     title: "Airbnb Clone",
    //     description: "Airbnb home Page UI design , designed Using React Js with CSS.",
    //     technologies: ["react", "css", "mui"],
    //     link: "https://github.com/hamnaiqbal/Airbnb",
    //     image: airbnbImage,
    // },
    // {
    //     title: "Google Clone",
    //     description: "Google Clone using NEXT JS ,SSR, Tailwind and Google API's to search data.",
    //     technologies: ["nextjs", "css", "react", "tailwind"],
    //     link: "https://github.com/hamnaiqbal/GoogleSearchClone",
    //     image: googleImage,
    // },
    // {
    //     title: "Admin Dashboard",
    //     description: "Admin Dashboard UI with functionalities created using React and Material UI",
    //     technologies: ["react", "html", "javascript", "css"],
    //     link: "https://github.com/hamnaiqbal/AdminDashboard",
    //     image: adminDImage,
    // },
    {
        title: "Bubble Game",
        description: "Pop all the bubbles by clicking the bubbles.",
        technologies: ["html", "javascript"],
        link: "https://zkhan601.github.io/Bubble/",
        image: atcReduxImage,
    },
];

const SingleProject = ({ project: p }: SingleProjectPropsTypes) => {
    const goToProject = () => {
        window.open(p.link);
    };
    return (
        <div className="project-wrapper" onClick={goToProject}>
            <div className="project-card">
                <div className="project-image-wrapper">
                    <Image className="project-image" src={p.image} alt={p.title} />
                </div>

                <div className="project-detail">
                    <div className="project-title-wrapper">
                        <p className="project-title">{p.title}</p>
                    </div>

                    <div className="project-description">
                        <p className="project-description">{p.description}</p>
                    </div>
                </div>

                <div className="project-techs">
                    {p.technologies.map((t, i) => {
                        return (
                            <OverlayTrigger
                                key={i}
                                overlay={<Tooltip id={`tooltip-${i}`}>{techs[t].title}</Tooltip>}
                            >
                                <Image
                                    thumbnail
                                    className="project-tech"
                                    key={i}
                                    src={techs[t].icon}
                                    alt={techs[t].title}
                                />
                            </OverlayTrigger>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export const Projects = () => {
    return (
        <Container className="projects-section">
            <Row>
                <Col lg={12} className="project-text-column">
                    <div className="text-align-center">
                        <h2 className="section-heading">Project 💻</h2>
                    </div>
                </Col>
            </Row>

            <Row className="projects-container">
                {projects.map((p, i) => {
                    return (
                        <Col lg={6} key={i}>
                            <SingleProject project={p} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};
