
import poImage from "../assets/po.avif";
import healthImage from "../assets/health.avif";
import ecoImage from "../assets/economic.avif";

export const heroData = {
    title: "Join Hands with Us to Create a Better Tomorrow",
    subtitle:
        "Supporting marginalized communities through education, healthcare, and economic empowerment",
    ctaText: "Donate Now",
    ctaLink: "/donate",
    backgroundImage:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
};

export const featuredPrograms = [
    {
        title: "Education Initiative",
        description:
            "Providing quality education and learning resources to underprivileged children.",
        image: poImage,
    },
    {
        title: "Healthcare Access",
        description:
            "Ensuring accessible healthcare services for rural and urban communities.",
        image: healthImage,
    },
    {
        title: "Economic Empowerment",
        description:
            "Supporting sustainable livelihoods through skill development and microfinance.",
        image: ecoImage,
    },
];

export const impactStats = [
    {
        number: "5000+",
        label: "Lives Impacted",
    },
    {
        number: "20+",
        label: "Active Programs",
    },
    {
        number: "50+",
        label: "Partner Organizations",
    },
    {
        number: "15+",
        label: "Years of Service",
    },
];
