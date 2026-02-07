import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import { heroData } from "../../data/homeData";

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center -mt-16" // -mt-16 to counteract layout pt-16 if we want full screen
      style={{
        backgroundImage: `url("${heroData.backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/70 to-black/30"></div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
          {heroData.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto">
          {heroData.subtitle}
        </p>

        <div className="pt-4">
          <Button
            href={heroData.ctaLink}
            variant="primary"
            className="text-lg px-10 py-4 group"
          >
            {heroData.ctaText}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
