export type award = {
    title: string;
    description: string;
    image: string;
};

export const awards: award[] = [
    {
        title: "2nd place at KSUMC's Healthon at the Cybersecurity Track",
        description:
            "We built a full-stack MVP in just 72 hours at KSUMC's Healthon, and we’re honored to have taken 2nd place out of 1,300+ applicants.",
        image: "/2nd.jpg",
    },
    {
        title: "4th place in the Elm Company's Generative AI Datathon.",
        description:
            "During this incredible journey, we developed Basirah - your intelligent financial analysis partner. Basirah transforms complex financial data into crystal-clear insights, empowering you to make confident investment decisions.",
        image: "/4th.jpg",
    },
    {
        title: "Dean's Award for Academic Excellence.",
        description:
            "Received the Dean's Award for Academic Excellence, for top 5 students in the college.",
        image: "/dean.jpg",
    },
    {
        title: "150+ hours as Technical committee leader at SCC",
        description:
            " Led a team of 5+ developers to design and develop the offical website for SCC.",
        image: "/leader.jpg",
    },
    {
        title: "Conducted a workshop on GitHub and Git",
        description:
            "Conducted a workshop on GitHub and Git with 50+ attendance. ",
        image: "/github.jpg",
    },
];
