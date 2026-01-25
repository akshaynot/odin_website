
import img1 from "../assets/work/1.jpg";
import img2 from "../assets/work/2.jpg";
import img3 from "../assets/work/3.jpg";
import img4 from "../assets/work/3.jpg"; // These seem to be repeats in the original file, keeping as is for now or distinct keys if needed.
import img5 from "../assets/work/3.jpg";
import img6 from "../assets/work/3.jpg";
import img7 from "../assets/work/3.jpg";
import img8 from "../assets/work/3.jpg";

import theatreImage from "../assets/work/1.jpg";
import culturalImage from "../assets/work/2.jpg";
import workshopImage from "../assets/work/3.jpg";

export const workImages = [img1, img2, img3, img4, img5, img6, img7, img8];

export interface Program {
    title: string;
    image: string;
    description: string;
    impact: string;
    goals: string[];
}

export const programs: Program[] = [
    {
        title: "Theatre Plays",
        image: theatreImage,
        description:
            "Engaging communities through powerful theatre performances that address social issues and cultural heritage.",
        impact: "20+ plays performed",
        goals: [
            "Social awareness",
            "Cultural preservation",
            "Community engagement",
        ],
    },
    {
        title: "Cultural Plays",
        image: culturalImage,
        description:
            "Celebrating India's rich cultural traditions through authentic folk and classical performances.",
        impact: "15+ cultural events",
        goals: [
            "Cultural promotion",
            "Traditional arts",
            "Youth involvement",
        ],
    },
    {
        title: "Awareness Workshops",
        image: workshopImage,
        description:
            "Interactive workshops raising awareness on social issues, health, education, and community development.",
        impact: "500+ participants trained",
        goals: [
            "Social education",
            "Skill building",
            "Community mobilization",
        ],
    },
];

export interface FutureInitiative {
    title: string;
    status: string;
}

export const futureInitiatives: FutureInitiative[] = [
    {
        title: "Education",
        status: "Coming soon",
    },
    {
        title: "Healthcare",
        status: "Coming soon",
    },
    {
        title: "Women Empowerment",
        status: "Coming soon",
    },
    {
        title: "Environment",
        status: "Coming soon",
    },
];
