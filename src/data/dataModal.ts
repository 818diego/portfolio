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
            description:
                "In this project, the following technologies and methodologies were used:",
            technologies: ["NextJS", "TailwindCSS", "TypeScript"],
            methodologies: ["Agile Scrum", "RESTful APIs"],
            hosting: "The project is hosted on Vercel.",
        },
    },
    {
        id: 2,
        title: "Appointment Management Mobile App",
        content: {
            description:
                "Worked on the UI and UX of the application, connecting the backend with the frontend using RESTful APIs. Designed in Figma and worked with React Native and vanilla CSS in React Native with JavaScript.",
            technologies: ["React Native", "CSS", "JavaScript"],
            methodologies: ["RESTful APIs", "UI/UX Design", "Agile Scrum"],
            hosting: "Hosting unvailable.",
        },
    },
    {
        id: 3,
        title: "Hotel Management",
        content: {
            description:
                "Refactored code, made design changes, and worked on the system using Laravel for APIs, PHP, Bootstrap, and jQuery.",
            technologies: ["Laravel", "PHP", "Bootstrap", "jQuery"],
            methodologies: ["No use Methodologies 😥"],
            hosting: "Hosting unvailable.",
        },
    },
];
