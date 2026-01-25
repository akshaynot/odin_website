
import React from "react";
import Hero from "../components/Home/Hero";
import FeaturedPrograms from "../components/Home/FeaturedPrograms";
import ImpactStats from "../components/Home/ImpactStats";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Featured Programs */}
      <FeaturedPrograms />

      {/* Impact Numbers */}
      <ImpactStats />

      {/* Call to Action */}
      <Section className="bg-gray-900 text-white text-center py-24 md:py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Make a <span className="text-orange-500">Difference</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us in our mission to create positive change. Every contribution counts and helps us reach more communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button href="/donate" variant="primary" className="text-lg px-8 py-4">
              Donate Now
            </Button>
            <Button href="/get-involved#volunteer" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
              Volunteer
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

