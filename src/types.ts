import { techs } from "./constants";

export type TaskCardPropsTypes = {
    point: string;
};

export type SingleSkillPropsTypes = {
    skill: Skill;
};

export type SingleProjectPropsTypes = {
    project: Project;
};

export type SingleExperiencePropsTypes = {
    experience: Experience;
};

export type Technology = {
    [key in keyof typeof techs]: { type: string; icon: string };
};

export type Skill = {
    title: string;
    icon: string;
    strength: number;
};

export type Project = {
    title: string;
    description: string;
    link: string;
    technologies: (keyof typeof techs)[];
    image?: string;
};

export type Experience = {
    title: string;
    client: string;
    tenure: string;
    description: string;
    logo: string;
    responsibilities?: string[];
};
