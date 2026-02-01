export interface Command {
    name: string;
    description: string;
    execute: (args: string[]) => CommandResult;
}

export type CommandResult = {
    type: 'text';
    content: string | React.ReactElement;
} | {
    type: 'projects';
} | {
    type: 'experience';
} | {
    type: 'skills';
};

export interface HistoryEntry {
    command: string;
    output: CommandResult;
}

export interface Experience {
    title: string;
    company: string;
    duration: string;
    description: string;
    responsibilities?: string[];
    achievements?: string[];
    technologies?: string[];
}

export interface Project {
    name: string;
    description: string;
    description2?: string;
    technologies: string[];
    highlights: string[];
    videoUrl?: string;
    link?: string;
}

export interface Education {
    degree: string;
    institution: string;
    duration: string;
    major?: string;
}