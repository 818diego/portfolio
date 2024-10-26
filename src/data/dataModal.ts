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
    {
        id: 4,
        title: "Supremo Team Website",
        content: {
            description:
                "This is a personal project where I created a Discord bot dedicated to the Discord community, which plays music and is a multifunctional security bot for servers.",
            technologies: ["Astro", "DiscordAPI", "MongoDB", "NodeJS"],
            methodologies: ["No methodologies used 😥"],
            hosting: "Hosting unavailable.",
        },
    },
    {
        id: 5,
        title: "Dog Breed Prediction Web Application",
        content: {
            description:
                "This is a final university project, in which we developed a convolutional neural network to predict dog breeds, and a web application was created to interact with the neural network and predict more than 100 dog breeds.",
            technologies: ["Python", "Tensorflow", "Keras"],
            methodologies: ["No methodologies used 😥"],
            hosting: "Hosting unavailable.",
        },
    },
];
