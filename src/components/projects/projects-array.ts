export type project = {
    title: string;
    description: string;
    href: string;
    tech: string[];
};

export const projects: project[] = [
    {
        title: "SCC Website",
        description:
            "The official website for Social Cultural Club at the Collage of Computer and Information Science at King Saud University",
        href: "https://www.scc-ksu.club",
        tech: ["NextJS", "TailwindCSS", "Firebase"],
    },
    {
        title: "Basirah",
        description:
            "Your intelligent financial companion that transforms complex market data into clear insights, helping investors at all levels make confident decisions.",
        href: "https://basirah.vercel.app/",
        tech: ["NextJS", "TailwindCSS", "Framer Motion"],
    },
    {
        title: "Code Board",
        description:
            "A Stack Overflow-like website where users can post questions, answers, comments, and rate them.",
        href: "https://github.com/HAQ7/code-board",
        tech: ["PHP", "Javascript", "CSS"],
    },
    {
        title: "React Quiz",
        description: "A simple quiz app about ReactJS built with ReactJS.",
        href: "https://haq7.github.io/quiz-app/",
        tech: ["ReactJS", "TailwindCSS", "Framer Motion"],
    },

    {
        title: "Task Manager",
        description: "A task manager app built with ReactJS.",
        href: "https://haq7.github.io/project-management/",
        tech: ["ReactJS", "TailwindCSS"],
    },
    {
        title: "KeyTab",
        description:
            "A Chrome extinction that enables you to reach your websites faster and easier.",
        href: "https://chromewebstore.google.com/detail/keytab/giflgblfmoeilnlakmjobjfnoklklbcm",
        tech: ["Javascript", "CSS"],
    },
    {
        title: "Gamesser",
        description:
            "A guessing game where you have to guess the name of the game from a blurred image.",
        href: "https://haq7.github.io/Gamesser/",
        tech: ["Javascript", "CSS"],
    },
    {
        title: "Aimless Pigeon",
        description:
            "A simple game where you have to avoid the obstacles and get the highest score.",
        href: "https://haq7.github.io/aimless-pigeon/",
        tech: ["Javascript", "CSS"],
    },
];
