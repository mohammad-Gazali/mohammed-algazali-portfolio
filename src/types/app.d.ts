export interface Basic {
    name: string;
    intro: string;
    about: string;
}

export interface Skill {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    repository: string;
    images: string[];
    technologies: Technology[];
}

export interface Technology {
    name: string;
    description: string;
    image: string;
}