import React from "react";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experiences } from "./sections/Experience";
import { Gallery } from "./sections/Gallery";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { SEA } from "./sections/sea";
import { Skills } from "./sections/Skills";
import { WhatIDo } from "./sections/WhatIDo";

export const Home = () => {
    return (
        <div>
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <div id="home">
                <Hero />
            </div>

            {/* About Me */}
            <div id="about">
                <About />
            </div>

            {/* What do I do? */}
            {/* <div id="wid">
                <WhatIDo />
            </div> */}

            {/* Skills Section */}
            <div id="skills">
                <Skills />
            </div>

            {/* Experiences */}
            <div id="experience">
                <Experiences />
            </div>

            {/* Projects Done */}
            <div id="projects">
                <Projects />
            </div>

            {/* Projects Done */}
            <div id="sea">
                <SEA />
            </div>

            {/* Gallery */}
            {/* <div id="gallery">
                <Gallery />
            </div> */}

            {/* Certificates */}

            {/* Contact Me */}
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};
