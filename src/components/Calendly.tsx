
import React, { useEffect } from "react";

const Calendly: React.FC = () => {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head?.appendChild(script);

        return () => {
            // Create a cleanup function if needed, though usually not strictly necessary for this widget script
            // as it puts a global property on window.
            // But removing script tag is good practice.
            head?.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/akki92tiwari"
            style={{ minWidth: "320px", height: "700px" }}
        />
    );
};

export default Calendly;
