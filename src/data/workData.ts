
const img1 = "https://images.unsplash.com/photo-1460904577954-8fadb262612c?w=600&auto=format&fit=crop&q=60";
const img2 = "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&auto=format&fit=crop&q=60";
const img3 = "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&auto=format&fit=crop&q=60";
const img4 = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=60";
const img5 = "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=60";
const img6 = "https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?w=600&auto=format&fit=crop&q=60";
const img7 = "https://images.unsplash.com/photo-1524666041070-9d87656c25bb?w=600&auto=format&fit=crop&q=60";
const img8 = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=60";

const theatreImage = "https://images.unsplash.com/photo-1507676184212-d0330a151f84?w=800&auto=format&fit=crop&q=60";
const culturalImage = "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&auto=format&fit=crop&q=60";
const workshopImage = "https://images.unsplash.com/photo-1513258496099-481620d4ce8d?w=800&auto=format&fit=crop&q=60";

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
