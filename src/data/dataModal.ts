export interface ModalContent {
    id: number;
    title: string;
    content: {
        description: string;
        technologies: string[];
        methodologies: string[];
        hosting: string;
    };
}

export const modalData: ModalContent[] = [
    {
        id: 1,
        title: "Project Details",
        content: {
            description: "In this project, the following technologies and methodologies were used:",
            technologies: ["NextJS", "TailwindCSS", "TypeScript"],
            methodologies: ["Agile Scrum", "RESTful APIs"],
            hosting: "The project is hosted on Vercel.",
        },
    },
];