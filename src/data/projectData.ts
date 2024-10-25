export const projectsData = [
    {
        id: 1,
        title: "Managenments Sales System",
        description:
            "Worked on the design using NextJS and TailwindCSS, following Agile Scrum methodology and managed RESTful APIs..",
        tags: ["NextJS", "Tailwind CSS", "TypeScript"],
        livePreviewUrl: "https://management-sales.vercel.app/",
        previewImage: new URL("/public/images/project.webp", import.meta.url)
            .href,
    },
    {
        id: 2,
        title: "Appointment Management Mobile App",
        description:
            "Worked on UI/UX, connecting backend with frontend using RESTful APIs.",
        tags: ["React Native", "CSS", "JavaScript"],
        // livePreviewUrl: "https://e-commerce-website.vercel.app/",
        previewImage: new URL("/public/images/appmobile.webp", import.meta.url)
            .href,
    },
    {
        id: 3,
        title: "Hotel Management",
        description:
            "Refactored code, made design changes, and worked on the system using Laravel, PHP, Bootstrap, and jQuery.",
        tags: ["Laravel", "PHP", "Bootstrap", "jQuery"],
        // livePreviewUrl: "https://management-sales.vercel.app/",
        previewImage: new URL("/public/images/notfount.webp", import.meta.url)
            .href,
    },
];
