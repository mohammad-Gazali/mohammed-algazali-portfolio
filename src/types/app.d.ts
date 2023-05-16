export interface Constants {
    name: string;
    intro: string;
    about: string;
    skills: Skill[];
}

export interface Skill {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}